import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, bgImg, description }) => {
    return (
        <>
            {
                title && <Cover title={title} bgImg={bgImg} description={description}></Cover>
            }
            <div className='max-w-10/12 mx-auto my-10'>
                <div className="grid md:grid-cols-2 gap-5">
                    {
                        items.map(items => <MenuItem items={items} key={items._id}></MenuItem>)
                    }
                </div>
                <div className="text-center my-5">
                    <Link to={`/order/${title}`} className="border-b-4 border-b-[#D99904] px-5 py-2.5 rounded-b-3xl font-semibold text-[#1F2937]">ORDER YOUR FAVOURITE FOOD</Link>
                </div>
            </div>
        </>
    );
};

export default MenuCategory;