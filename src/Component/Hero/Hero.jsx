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
                    <h1 className="text-5xl font-bold">Supercharge Your <br />Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <button className="btn btn-primary">Explore Products</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;