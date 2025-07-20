const PopularItem = ({ item }) => {
    const { name, recipe, image, price } = item
        return(
            <div className="flex gap-2.5 mb-5">
                <img src={image} style={{borderRadius: "0 200px 200px 200px" }} className="w-[120px]"  alt={name} />
                <div>
                    <h3 className="text-[#151515] text-2xl">{name} ------------------ </h3>
                    <p className="text-[#737373]">{recipe}</p>
                </div>
                <p className="text-[#BB8506] text-xl">{price}</p>
            </div>
        );
};

export default PopularItem;