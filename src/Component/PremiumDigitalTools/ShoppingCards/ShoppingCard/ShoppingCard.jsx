import React from 'react';

const ShoppingCard = ({ items, handleRemoveItem }) => {
    return (
        <div className="flex items-center justify-between bg-[#f9fafc] rounded-2xl px-5 py-4">
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-4 text-xl">✍️</div>
                <div>
                    <p className="font-semibold text-2xl">{items.name}</p>
                    <p className="text-sm text-base-content/50">${items.price}</p>
                </div>
            </div>
            <button 
                onClick={() => handleRemoveItem(items.id)}
                className="text-pink-500 font-medium text-sm"
            >
                Remove
            </button>
        </div>
    );
};

export default ShoppingCard;