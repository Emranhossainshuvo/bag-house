import Banner from '../Banner/Banner';
import Featured from '../Featured/Featured';
import PopularManu from '../PopularManu/PopularManu';
import Testimonials from '../Testimonials/Testimonials';
import Catagory from '../catagory/Catagory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularManu></PopularManu>
            {/* <CheffRecommends></CheffRecommends> */}
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;