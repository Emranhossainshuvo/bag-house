import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';

const Catagory = () => {
    return (
        <section>
            <SectionTitles
                subHeading={"All you need"}
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
                <SwiperSlide>
                    <img  className='h-[50vh]' src={`https://i.ibb.co/HnVyCK5/oriol-pascual-l5-VCmq-Qb-P-g-unsplash.jpg`}

                        alt="" />
                    <h3 className='text-4xl font-semibold ps-20 pb-8 -mt-16 text-white'>Travel bag</h3></SwiperSlide>
                <SwiperSlide>
                    <img  className='h-[50vh]' src={`https://i.ibb.co/txVjJpW/julian-christian-anderson-y0t-Tb95xe-Y-unsplash.jpg`} alt="" /><h3 className='text-4xl font-semibold ps-20 pb-8 -mt-16 text-white'>
                        Laptop bag
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img  className='h-[50vh]' src={`https://i.ibb.co/1XzYpTq/2148559643.jpg`} alt="" />
                    <h3 className='text-4xl font-semibold ps-20 pb-8 -mt-16 text-white'>
                        School bag
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img  className='h-[50vh]' src={`https://i.ibb.co/7Q1jfhg/jonny-caspari-5-Jx-w-Pt-Oq-JM-unsplash.jpg`} alt="" />
                    <h3 className='text-4xl font-semibold ps-20 pb-8 -mt-16 text-white'>
                        Sports bag
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img  className='h-[50vh]' src={`https://i.ibb.co/cgr9S5N/2148579581.jpg`} alt="" />
                    <h3 className='text-4xl font-semibold -mt-16 ps-20 pb-8 text-white'>
                        Everyday bag
                    </h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Catagory;