import { Link, useLocation, useNavigate } from 'react-router-dom';
import bg from '../../assets/others/authentication.png'
import authentication from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)
    const { loginUser } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        // login user
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Login Successful",
                    icon: "success",
                    draggable: true
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div style={{ backgroundImage: `url(${bg})` }} className='min-h-screen flex items-center justify-center'>
                <div className="bg-white shadow-xl rounded-lg flex w-full max-w-5xl overflow-hidden">
                    {/* Left side illustration */}
                    <div className="w-1/2 bg-orange-50 flex items-center justify-center p-6">
                        <img src={authentication} alt="Illustration" className="w-full h-auto" />
                    </div>

                    {/* Right side login form */}
                    <div className="w-1/2 p-8 space-y-4">
                        <h2 className="text-2xl font-bold text-center">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className='mb-3'>
                                <label className="block mb-1 font-medium">Email</label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" />
                            </div>

                            <div className='mb-3'>
                                <label className="block mb-1 font-medium">Password</label>
                                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered w-full" />
                                <label className='mb-3'><a className="cursor-pointer hover:text-amber-500 hover:font-semibold text-black">Forgot your password?</a></label>
                            </div>

                            <div className='mb-3'>
                                <label className="block mb-1 font-medium">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} type="text" name='captcha' placeholder="Type the captcha" className="input input-bordered w-full mt-2" />
                                <button onClick={handleValidateCaptcha} type="button" className='btn my-3 w-full'>Validate Captcha</button>
                            </div>
                            <div className='my-5'>
                                <input disabled={disabled} type="submit" value="Sign In" className={` ${disabled ? "bg-gradient-to-r from-amber-200 to-amber-200" : "bg-gradient-to-r from-amber-400 to-amber-500"} btn btn-primary text-white w-full  border-none`} />
                            </div>
                        </form>
                        <p className="text-center text-sm">
                            New here?{' '} <Link to="/signup" className="text-amber-600 font-medium">Create a New Account</Link>
                        </p>

                        <div className="divider">Or sign in with</div>
                        <div className="">
                            <SocialLogin text="LogIn with Google"></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
