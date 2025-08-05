import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data
        }
    })

    return (
        <div className="max-w-10/12 mx-auto bg-white p-10">
            <h2 className="text-yellow-800 font-semibold text-2xl mb-10 text-center uppercase">Payments History</h2>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    <thead>
                        <tr className="bg-[#D1A054] text-white uppercase p-5">
                            <th>#</th>
                            <th>Total Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl">
                        {
                            payments.map((payment, index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>${payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;