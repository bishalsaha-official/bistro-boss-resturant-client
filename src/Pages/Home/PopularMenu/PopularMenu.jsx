import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import PopularItem from "../../../Shared/PopularItem/PopularItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])

    return (
        <section className='max-w-10/12 mx-auto my-10'>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    menu.map(item => <PopularItem item={item} key={item._id}></PopularItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;