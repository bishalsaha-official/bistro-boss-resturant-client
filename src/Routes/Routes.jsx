import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: '/dashboard/userHome',
        element: <UserHome></UserHome>
      },
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: '/dashboard/addReview',
        element: <AddReview></AddReview>
      },

      // Admin Routes
      {
        path: '/dashboard/adminHome',
        element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
      },
      {
        path: '/dashboard/users',
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: '/dashboard/addItems',
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: '/dashboard/manageItems',
        element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoutes><UpdateItem></UpdateItem></AdminRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
]);