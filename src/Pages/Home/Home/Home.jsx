import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import HomeContact from "../HomeContact/HomeContact";
import HomeCover from "../HomeCover/HomeCover";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <HomeCover></HomeCover>
            <PopularMenu></PopularMenu>
            <HomeContact></HomeContact>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;