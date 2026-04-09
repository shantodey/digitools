import { Check } from 'lucide-react';
import React from 'react';

const Card = ({ prodectsData, setCats, cats }) => {
    const existsCart = cats.find(i => i.id === prodectsData.id)
    const addTocart = (item) => {
        setCats(prev => [...prev, item])

    }

    return (
        <div className="w-[380px] h-[422px] border border-blue-500 rounded-xl p-4 relative bg-white">
            <div className="absolute top-3 right-3 badge badge-warning badge-sm">
                {prodectsData.tag}
            </div>

            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-base-200 mb-4 text-xl">
                {prodectsData.icon}
            </div>

            <h2 className="text-2xl font-bold mb-2">{prodectsData.name}</h2>

            <p className="text-sm text-gray-500 mb-6">
                {prodectsData.description}
            </p>

            <div className="mb-6">
                <span className="text-4xl font-bold">{prodectsData.price}</span>
                <span className="text-gray-400 text-sm">/Mo</span>
            </div>

            <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm">
                    <span><Check color="#2fc685"/></span>
                    <span>{prodectsData.features[1]}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <span><Check color="#2fc685"/></span>
                    <span>{prodectsData.features[2]}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <span><Check color="#2fc685" /></span>
                    <span>{prodectsData.features[3]}</span>
                </div>
            </div>

            <button disabled={existsCart} onClick={() => addTocart(prodectsData)} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full rounded-full">
                {existsCart ? "Bought" : "Buy Now" }
            </button>
        </div>


    );
};

export default Card;