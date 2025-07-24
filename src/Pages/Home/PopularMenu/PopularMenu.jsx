import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")

    return (
        <section className='max-w-10/12 mx-auto my-10'>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popular.map(items=> <MenuItem items={items} key={items._id}></MenuItem>)
                }
            </div>
            <div className="text-center my-5">
                <Link to='/menu' className="border-b-4 border-b-[#D99904] px-5 py-2.5 rounded-b-3xl font-semibold text-[#1F2937]">View Full Menu</Link>
            </div>
        </section>
    );
};

export default PopularMenu;