import React from 'react';
import HeroImg from "../../assets/banner.png"
const Hero = () => {
    return (
        <div className="hero pt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={HeroImg}
                    className=""
                />
                <div>
                    <div className='flex items-center gap-3 px-4 py-2 rounded-full w-fit bg-[#e1e7ff]'>
                        <div className='flex items-center justify-center'>
                            <span className='w-2.5 h-2.5 inline-block rounded-full animate-pulse absolute z-2 bg-custom-gradient '></span>
                        </div>
                        <p className='font-semibold bg-custom-gradient text-transparent bg-clip-text'>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className="text-[55px] md:text-6xl font-bold pt-4">Supercharge Your <br />Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <button className=" text-white p-4  font-semibold bg-custom-gradient  rounded-full overflow-hidden  w-fit cursor-pointer group hover:-translate-y-1 transition-all duration-200 hover:shadow   disabled:cursor-not-allowed">Explore Products</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;