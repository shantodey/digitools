import React from 'react';
import { ShoppingCart } from 'lucide-react';
const EmptyShoppincCard = () => {
    return (
        <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-base-200/40 rounded-[2rem] py-20 px-6 flex flex-col items-center justify-center text-center">
                <div className="bg-base-200 p-4 rounded-full mb-6 flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-base-content/50" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-base-content mb-4">
                    Your cart is empty
                </h2>
                <p className="text-base-content/60 max-w-md text-sm sm:text-base leading-relaxed">
                    Looks like you haven't added anything yet. Start exploring our tools and add your favorites to the cart.
                </p>

            </div>
        </div>
    );
};

export default EmptyShoppincCard;