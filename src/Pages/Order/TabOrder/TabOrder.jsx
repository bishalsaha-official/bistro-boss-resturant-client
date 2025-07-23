import FoodCard from "../../../Shared/FoodCard/FoodCard";

const TabOrder = ({ items }) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <FoodCard items={item} key={item._id}></FoodCard>)
            }
        </div>
    );
};

export default TabOrder;