import useAuth from "../../hooks/useAuth";
import google from '../../assets/icon/google.png'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({ text }) => {
    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-full my-5">
                <img className="w-5" src={google} alt="Google" />
                {text}
            </button>
        </div>
    );
};

export default SocialLogin;