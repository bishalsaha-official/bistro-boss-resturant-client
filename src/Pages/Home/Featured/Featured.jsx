import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${featuredImg})` }} className="my-10 bg-cover bg-center bg-no-repeat">
            <div className="bg-black/20 backdrop-blur-sm py-10">
                <SectionTitle
                    heading={"FROM OUR MENU"}
                    subHeading={"Check it out"}
                ></SectionTitle>
                <div className="max-w-10/12 mx-auto md:flex items-center gap-5 text-white ">
                    <img className="min-w-sm" src={featuredImg} alt="" />
                    <div>
                        <p >March 20, 2023</p>
                        <h3 className="text-xl my-2">WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="featured-btn font-bold">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;