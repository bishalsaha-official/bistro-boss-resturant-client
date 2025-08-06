import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete ${item.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} is deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            <div className="max-w-10/12 mx-auto bg-white p-10">
                <h2 className="text-yellow-800 font-semibold text-2xl mb-10 text-center uppercase">Manage Items</h2>
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white uppercase p-5">
                                <th>Sl No</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl">
                            {
                                menu.map((item, index) => <tr key={index}>
                                    <td>{index + 1}</td>
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
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn btn-ghost bg-[#D1A054] text-white"><FaPenToSquare className="text-xl"></FaPenToSquare></button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost bg-[#D1A054] text-white"><RiDeleteBin6Line className="text-xl"></RiDeleteBin6Line></button>
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

export default ManageItems;