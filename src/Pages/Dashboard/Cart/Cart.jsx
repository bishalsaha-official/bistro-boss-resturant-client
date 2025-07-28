import useCart from "../../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
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
                                        1
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
                                        <div >
                                            <button className="btn btn-ghost bg-[#D1A054] text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
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