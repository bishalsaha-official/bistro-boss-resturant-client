import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-10/12 mx-auto my-10'>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full object-cover' src={slide1} alt={slide1} />
                    <h3 className='font-semibold text-center -mt-16 pb-10 text-3xl text-white uppercase'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover' src={slide2} alt={slide2} />
                    <h3 className='font-semibold text-center -mt-16 pb-10 text-3xl text-white uppercase'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover' src={slide3} alt={slide3} />
                    <h3 className='font-semibold text-center -mt-16 pb-10 text-3xl text-white uppercase'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover' src={slide4} alt={slide4} />
                    <h3 className='font-semibold text-center -mt-16 pb-10 text-3xl text-white uppercase'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full object-cover' src={slide5} alt={slide5} />
                    <h3 className='font-semibold text-center -mt-16 pb-10 text-3xl text-white uppercase'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;