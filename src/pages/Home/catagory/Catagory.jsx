import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../../public/assets/home/slide1.jpg'
import slide2 from '../../../../public/assets/home/slide2.jpg'
import slide3 from '../../../../public/assets/home/slide3.jpg'
import slide4 from '../../../../public/assets/home/slide4.jpg'
import slide5 from '../../../../public/assets/home/slide5.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';

const Catagory = () => {
    return (
        <section>
            <SectionTitles
                subHeading={"From 10.00am to 10.00pm"}
                heading={"Order online"}
            >

            </SectionTitles>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide className=''><img src={slide1}

                    alt="" />
                    <h3 className='text-4xl font-semibold ps-20 pb-8 -mt-16 text-white'>Salads</h3></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /><h3 className='text-4xl font-semibold ps-20 pb-8 -mt-16 text-white'>Pizza</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h3 className='text-4xl font-semibold ps-20 pb-8 -mt-16 text-white'>Soup</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" />
                    <h3 className='text-4xl font-semibold ps-20 pb-8 -mt-16 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /><h3 className='text-4xl font-semibold -mt-16 ps-20 pb-8 text-white'>Salads</h3></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Catagory;