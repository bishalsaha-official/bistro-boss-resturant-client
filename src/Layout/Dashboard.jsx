import { NavLink, Outlet } from "react-router-dom";
import logo from '../../src/assets/dashboard/logo.png'
import { FaHome, FaCartPlus, FaShoppingBag   } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePayment, MdOutlineReviews, MdEmail  } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";



const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-[#D1A054] text-white p-6">
                <div className="flex items-center gap-2.5 mb-10">
                    <img className="w-10" src={logo} alt="" />
                    <h2 className="text-xl font-bold">BISTRO BOSS RESTAURANT</h2>
                </div>
                <ul className="menu uppercase w-full font-semibold">
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><SlCalender></SlCalender> reservation</NavLink></li>
                    <li><NavLink to="/dashboard/payment"><MdOutlinePayment></MdOutlinePayment> Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaCartPlus></FaCartPlus> My Cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><MdOutlineReviews></MdOutlineReviews> Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/booking"><FaBook></FaBook> My Booking</NavLink></li>
                </ul>

                <div className="border-t border-white my-6"></div>

                <ul className="menu uppercase font-semibold">
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"><IoMdMenu></IoMdMenu> Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                    <li><NavLink to="contact"><MdEmail></MdEmail> Contact</NavLink></li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-[#F6F6F6] p-10">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Dashboard;