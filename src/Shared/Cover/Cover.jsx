import { Parallax } from 'react-parallax';

const Cover = ({ bgImg, title, description }) => {
    return (
        <Parallax
            blur={{ min: -100, max: 100 }}
            bgImage={bgImg}
            bgImageAlt="Our Menu"
            strength={-200}
        >
            <div className="hero h-[600px]" style={{ backgroundImage: `url("${bgImg}")` }}>
                <div className="w-[50%] mx-auto bg-black/20 backdrop-blur-sm text-white text-center p-10">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{description}</p>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;