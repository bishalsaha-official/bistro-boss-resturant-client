import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    
    // tan stack query
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is now on Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user?._id}`)
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
        <Helmet>
            <title>Bistro Boss | All Users</title>
        </Helmet>
            <div className="max-w-9/12 mx-auto bg-white p-10">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Total Users: {users.length}</h2>
                </div>
                {/* Show item */}
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white uppercase p-5">
                                <th>Sl</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl">
                            {
                                users.map((user, index) => <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role  === 'admin' ?
                                                <p>Admin</p>
                                                :
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-amber-600 text-white">
                                                    <FaUsers className="text-xl"></FaUsers>
                                                </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost bg-[#D1A054] text-white">
                                            <RiDeleteBin6Line className="text-xl"></RiDeleteBin6Line>
                                        </button>
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

export default AllUsers;