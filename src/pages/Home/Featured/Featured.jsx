import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import featuredImg from '../../../../public/assets/home/featured.jpg'
import './featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitles subHeading="Check it out" heading="From Our Menu">

            </SectionTitles>
            <div className="md:flex justify-center bg-black bg-opacity-40 items-center pb-20 pt-12 px-36 gap-8">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2020</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam officiis, molestias illo officia sunt distinctio aperiam dolorum porro! Nobis aspernatur voluptates numquam, eveniet placeat amet voluptatum ipsa cum rem! Dicta praesentium vitae temporibus, sint dolor veniam magni pariatur voluptate animi aspernatur minima esse enim tempore commodi mollitia error. Voluptatem, provident.</p>
                    <button className="btn btn-outline border-black text-white border-0 border-b-4">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;