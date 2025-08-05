import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const CheckOutForm = () => {
    const [errors, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        // confirm payment method
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous"
                }
            }
        })

        if (confirmError) {
            {
                console.log("confirmError")
            }
        }
        else {
            console.log(paymentIntent, "payment intent")
            if (paymentIntent.status === "succeeded") {
                console.log(paymentIntent.id)
                setTransactionId(paymentIntent.id)

                // post payment history to the server
                const paymentInfo = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // use moment js later,
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: "pending"
                }

                const res = await axiosSecure.post('/payments', paymentInfo)
                console.log('payment saved', res.data)
                refetch()
                if (res?.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your payment has been done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className="btn btn-primary outline" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{errors}</p>
            {
                transactionId && <p className="text-green-700">your transaction id: {transactionId}</p>
            }
        </form>
    );
};

export default CheckOutForm;