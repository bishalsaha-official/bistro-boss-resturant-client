import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";
import { MdEmail } from "react-icons/md";
import { FaUsers, FaCartPlus } from "react-icons/fa";

const UserHome = () => {
    const { user } = useAuth()

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | User Home</title>
            </Helmet>
            <h2 className="text-2xl font-semibold">
                {
                    user ? <span>Hi, Welcome {user.displayName}</span> : <span>Welcome Back</span>
                }
            </h2>
            {/* Stat */}
            <div className="mt-10 grid grid-cols-3 gap-5">
                {/* stat 1 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] p-10 text-white rounded-2xl">
                    <div>
                        <FaCartPlus className="text-3xl"></FaCartPlus>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">{ }</h2>
                        <p className="text-xl font-bold">Cart</p>
                    </div>
                </div>
                {/* stat 2 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] p-10 text-white rounded-2xl">
                    <div>
                        <FaUsers className="text-3xl"></FaUsers>
                    </div>
                    <div>
                        <p className="text-xl font-bold">Payment</p>
                    </div>
                </div>
                {/* stat 3 */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] p-10 text-white rounded-2xl">
                    <div>
                        <MdEmail></MdEmail>
                    </div>
                    <div>
                        <p className="text-xl font-bold">{user?.email}</p>
                    </div>
                </div>
            </div>

            {/* Profile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {/* Left: Profile Image and Name */}
                <div className="bg-orange-100 flex flex-col items-center justify-center p-8">
                    <div className="w-32 h-32 rounded-full border-4 border-orange-400 mb-4">
                        <img className="w-full rounded-full" src={user.photoURL} alt="" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">{user.displayName}</h2>
                </div>

                {/* Right: Activities */}
                <div className="bg-yellow-100 p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Activities</h2>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center text-blue-600">
                             Orders: <span className="ml-1 font-medium">{}</span>
                        </li>
                        <li className="flex items-center text-green-600">
                             Reviews: <span className="ml-1 font-medium">{}</span>
                        </li>
                        <li className="flex items-center text-orange-600">
                             Payment: <span className="ml-1 font-medium">{}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserHome;