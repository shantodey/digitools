import React from 'react';

const Card = ({ prodectsData }) => {

    return (
        <div className="w-[380px] h-[422px] border border-blue-500 rounded-xl p-4 relative bg-white">
            <div className="absolute top-3 right-3 badge badge-warning badge-sm">
                {prodectsData.tag}
            </div>

            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-base-200 mb-4 text-xl">
                ✍️
            </div>

            <h2 className="text-2xl font-bold mb-2">{prodectsData.name}</h2>

            <p className="text-sm text-gray-500 mb-6">
                Generate high-quality content, blogs and marketing copy in seconds with advanced AI.
            </p>

            <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-400 text-sm">/Mo</span>
            </div>

            <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm">
                    <span>✅</span>
                    <span>Unlimited AI generations</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <span>✅</span>
                    <span>50+ writing templates</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <span>✅</span>
                    <span>Grammar checker</span>
                </div>
            </div>

            <button className="btn btn-primary w-full rounded-full">
                Buy Now
            </button>
        </div>


    );
};

export default Card;