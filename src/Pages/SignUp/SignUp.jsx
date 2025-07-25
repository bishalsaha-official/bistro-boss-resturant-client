import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import bg from '../../assets/others/authentication.png'
import authentication from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors }, } = useForm()
    const { createUser, googleLogin, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                userUpdateProfile(data.name, data.photo)
                    .then(() => {
                        reset()
                        Swal.fire({
                            title: "Successfully Created",
                            icon: "success",
                            draggable: true
                        });
                        navigate('/')
                    }).catch((error) => {
                        console.log(error)
                    });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div style={{ backgroundImage: `url(${bg})` }} className='min-h-screen flex items-center justify-center'>
                <div className="bg-white shadow-xl rounded-lg flex w-full max-w-5xl overflow-hidden">
                    {/* Left side login form */}
                    <div className="w-1/2 p-8 space-y-4">
                        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-3'>
                                <label className="block mb-1 font-medium">Name</label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="input input-bordered w-full" />
                                {errors.name && <span className="text-amber-400 font-semibold mt-2">The Name field is required</span>}
                            </div>
                            <div className='mb-3'>
                                <label className="block mb-1 font-medium">Photo Url</label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Enter photo url" className="input input-bordered w-full" />
                                {errors.photo && <span className="text-amber-400 font-semibold mt-2">The url field is required</span>}
                            </div>
                            <div className='mb-3'>
                                <label className="block mb-1 font-medium">Email</label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter your email" className="input input-bordered w-full" />
                                {errors.email && <span className="text-amber-400 font-semibold mt-2">The Email field is required</span>}
                            </div>
                            {/* Password Field */}
                            <div className='mb-3'>
                                <label className="block mb-1 font-medium">Password</label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                                })} name='password' placeholder="Enter your password" className="input input-bordered w-full" />
                                {errors.password?.type === "required" && (
                                    <p className="text-amber-400 font-semibold mt-2">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-amber-400 font-semibold mt-2">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-amber-400 font-semibold mt-2">Password must be less than 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-amber-400 font-semibold mt-2">Password must be at least 6 characters long and include uppercase, lowercase, number, and special character</p>
                                )}
                            </div>
                            <div className='my-5'>
                                <input type="submit" value="Sign In" className="btn btn-primary text-white w-full  border-none bg-gradient-to-r from-amber-400 to-amber-500" />
                            </div>
                        </form>
                        <p className="text-center text-sm">
                            Already have an account? {' '} <Link to="/login" className="text-amber-600 font-medium">SignIn Here</Link>
                        </p>

                        <div className="divider">Or sign in with</div>
                        <div className="flex justify-center gap-4">
                            <button className="btn btn-circle btn-outline">
                                <FaFacebookF className="text-lg" />
                            </button>
                            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                                <FaGoogle className="text-lg" />
                            </button>
                        </div>
                    </div>
                    {/* Right side illustration */}
                    <div className="w-1/2 bg-orange-50 flex items-center justify-center p-6">
                        <img src={authentication} alt="Illustration" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;