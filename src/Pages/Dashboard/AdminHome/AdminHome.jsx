import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BsCashCoin } from "react-icons/bs";
import { FaUsers, FaTruck, FaCartPlus } from "react-icons/fa";

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })

    return (
        <div className="max-w-10/12 mx-auto">
            <h2 className="text-2xl font-semibold uppercase">
                {
                    user ? <span>Welcome {user.displayName}</span> : <span>Admin Home</span>
                }
            </h2>
            {/* Stat */}
            <div className="mt-10 grid grid-cols-4 gap-5">
                {/* stat 1 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] p-10 text-white rounded-2xl">
                    <div>
                        <BsCashCoin className="text-3xl"></BsCashCoin>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">${stats.revenue}</h2>
                        <p className="text-xl font-bold">Revenue</p>
                    </div>
                </div>
                {/* stat 2 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] p-10 text-white rounded-2xl">
                    <div>
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">${stats.users}</h2>
                        <p className="text-xl font-bold">Users</p>
                    </div>
                </div>
                {/* stat 3 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] p-10 text-white rounded-2xl">
                    <div>
                        <FaCartPlus className="text-3xl"></FaCartPlus>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">${stats.menuItems}</h2>
                        <p className="text-xl font-bold">Products</p>
                    </div>
                </div>
                {/* stat 4 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] p-10 text-white rounded-2xl">
                    <div>
                        <FaTruck className="text-3xl"></FaTruck >
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">${stats.orders}</h2>
                        <p className="text-xl font-bold">Orders</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;