import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import './FoodCard.css'
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({ items }) => {

    const { user } = useAuth()
    const { name, recipe, image, price, _id } = items
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = food => {
        console.log(food)
        if (user && user.email) {
            console.log(user.email)
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} is added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the cart
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "LogIn first for add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "LogIn Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-[#F3F3F3] w-96 shadow-sm">
            <figure>
                <img src={image} alt="food" />
            </figure>
            <p className="absolute top-4 right-2.5 bg-black text-white p-2.5 rounded-xl">{price}</p>
            <div className="card-body text-center">
                <h2 className="font-bold text-[#151515] text-xl">{name}</h2>
                <p className="text-[#737373]">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(items)} className="btn food-card-btn mx-auto my-5 text-xl">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;