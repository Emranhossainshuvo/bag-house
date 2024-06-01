import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import img from '../../../../public/assets/home/slide1.jpg'


const CheffRecommends = () => {
    return (
        <section>
            <SectionTitles
                subHeading="Should try"
                heading="Cheff Recommends"
            >

            </SectionTitles>

            {/* cards for cheff recommends foods */}
            <div>
                <div className="bg-[#f3f3f3]">
                    <img className="w-[300px] h-[300px]" src={img} alt="" />
                    <h3 className="text-3xl font-semibold">Caeser Salad</h3>
                    <p className="font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="uppercase bg-[#e8e8e8] shadow-[#c09123] btn text-[#c09123]">Add to cart</button>
                </div>
            </div>
        </section>
    );
};

export default CheffRecommends;