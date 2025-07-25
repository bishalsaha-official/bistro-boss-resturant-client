import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-bars loading-3xl text-amber-500"></span>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;