import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../../../public/assets/home/01.jpg'
import image2 from '../../../../public/assets/home/02.jpg'
import image3 from '../../../../public/assets/home/03.png'
import image4 from '../../../../public/assets/home/04.jpg'
import image5 from '../../../../public/assets/home/05.png'
import image6 from '../../../../public/assets/home/06.png'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={image1} />
            </div>
            <div>
                <img src={image2} />
                
            </div>
            <div>
                <img src={image3} />
            </div>
            <div>
                <img src={image4} />
            </div>
            <div>
                <img src={image5} />
            </div>
            <div>
                <img src={image6} />

            </div>
        </Carousel>
    );
};

export default Banner;