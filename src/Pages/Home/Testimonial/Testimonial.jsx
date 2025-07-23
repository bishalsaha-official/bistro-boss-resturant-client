import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="max-w-10/12 mx-auto my-10">
            <SectionTitle
                heading={"TESTIMONIALS"}
                subHeading={"What Our Clients Say"}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="max-w-5/6 mx-auto text-center px-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    className="mx-auto"
                                />
                                <FaQuoteLeft className="text-7xl mx-auto my-5"></FaQuoteLeft>
                                <p className="text-xl text-[#444444]">{review.details}</p>
                                <h3 className="text-2xl text-[#CD9003] my-4">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;