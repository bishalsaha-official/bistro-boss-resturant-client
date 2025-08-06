import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_GATEWAY_PK);

const Payment = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Payment</title>
            </Helmet>
            <div className="max-w-10/12 mx-auto bg-white p-10">
                <h2 className="text-yellow-800 font-semibold text-2xl mb-10 text-center uppercase">Payment</h2>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm></CheckOutForm>
                    </Elements>
                </div>
            </div>
        </>
    );
};

export default Payment;