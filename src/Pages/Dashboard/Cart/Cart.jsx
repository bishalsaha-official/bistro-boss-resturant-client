import useCart from "../../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import './cart.css'
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()
    const handleDeleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
            <div className="max-w-9/12 mx-auto bg-white p-10">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Cart Items: {cart.length}</h2>
                    <h2 className="text-2xl font-bold">Total Price: ${totalPrice}</h2>
                    <button className="btn bg-[#D1A054] text-white">Pay</button>
                </div>
                {/* Show item */}
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white uppercase p-5">
                                <th>Sl No</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl">
                            {
                                cart.map((item, index) => <tr key={index}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <div>
                                            <button onClick={() => handleDeleteItem(item._id)} className="btn btn-ghost bg-[#D1A054] text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Cart;