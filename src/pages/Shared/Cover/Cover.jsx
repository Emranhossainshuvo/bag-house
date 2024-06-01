// import img from './../../../../public/assets/menu/menu-bg.png'
import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -55, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[750px]" >
                <div className="bg-black w-3/5 h-2/5 bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5  text-white text-5xl font-bold uppercase">{title}</h1>
                        <p className=" text-white mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;