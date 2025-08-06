import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth()

    return (
        <div>
            <h2 className="text-2xl font-semibold">
                {
                    user ? <span>Welcome {user.displayName}</span> : <span>Welcome Back</span>
                }
            </h2>
        </div>
    );
};

export default UserHome;