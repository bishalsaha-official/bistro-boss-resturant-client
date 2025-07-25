import Cover from "../../../Shared/Cover/Cover";
import banner from "../../../assets/menu/banner3.jpg"
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import saladImg from "../../../assets/menu/salad-bg.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import drinksImg from "../../../assets/menu/banner3.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import { Helmet } from "react-helmet";

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(items => items.category === 'offered')
    const salad = menu.filter(items => items.category === 'salad')
    const dessert = menu.filter(items => items.category === 'dessert')
    const drinks = menu.filter(items => items.category === 'drinks')
    const soup = menu.filter(items => items.category === 'soup')
    const pizza = menu.filter(items => items.category === 'pizza')

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div>
                <Cover bgImg={banner} title={"Our Menu"} description={"Would You like to Try this dish"}></Cover>
                <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"></SectionTitle>
                {/* Offered Items */}
                <MenuCategory items={offered}></MenuCategory>

                {/* Salad Items */}
                <MenuCategory
                    items={salad}
                    title="salad"
                    bgImg={saladImg}
                    description={"Fresh, vibrant, and packed with flavor — our salads are made with the finest ingredients and perfect for a light, healthy meal. From classic greens to creative mixes, there’s something for every taste."}
                ></MenuCategory>

                {/* Desert Items */}
                <MenuCategory
                    items={dessert}
                    title="dessert"
                    bgImg={dessertImg}
                    description={"Indulge in our delightful desserts, crafted to satisfy your sweet cravings. From creamy classics to rich, decadent treats — every bite is pure bliss."}
                ></MenuCategory>

                {/* Pizza Items */}
                <MenuCategory
                    items={pizza}
                    title="pizza"
                    bgImg={pizzaImg}
                    description={"Our pizzas are baked to perfection with a crispy crust, rich sauce, and premium toppings. A delicious slice of comfort in every bite!"}
                ></MenuCategory>

                {/* Soup Items */}
                <MenuCategory
                    items={soup}
                    title="soup"
                    bgImg={soupImg}
                    description={"Warm, comforting, and full of flavor — our soups are made from fresh ingredients and slow-cooked to perfection. The perfect start to any meal!"}
                ></MenuCategory>

                {/* Drinks Items */}
                <MenuCategory
                    items={drinks}
                    title="drinks"
                    bgImg={drinksImg}
                    description={"Refresh and recharge with our selection of drinks — from chilled juices to fizzy favorites, each sip is pure satisfaction. Perfect for any mood or meal!"}
                ></MenuCategory>
            </div>
        </>
    );
};

export default Menu;