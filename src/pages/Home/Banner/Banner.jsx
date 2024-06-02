import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (

        <Swiper
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div>
                    <img src={`https://i.ibb.co/BHk0x86/josiah-weiss-8sj-Bz-L1-Iy-Mo-unsplash-1.jpg`} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={`https://i.ibb.co/4P4ydcW/lina-verovaya-GQQ6-BRJxys-U-unsplash-1.jpg`} />

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={`https://i.ibb.co/VwtJRcj/omar-roque-z5ncx9p6-Av-M-unsplash.jpg`} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={`https://i.ibb.co/rsWVCr3/safar-safarov-0-NGnnp-FVzt-U-unsplash.jpg`} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={`https://i.ibb.co/2vskcH9/ross-sneddon-io-TLGAz-Arg0-unsplash.jpg`} />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={`https://i.ibb.co/0ht0FVb/rich-smith-Mvmpjc-YC8dw-unsplash.jpg`} />

                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;