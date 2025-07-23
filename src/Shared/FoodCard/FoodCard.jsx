import './FoodCard.css'

const FoodCard = ({ items }) => {
    const { name, recipe, image, price } = items
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
                    <button className="btn food-card-btn mx-auto my-5 text-xl">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;