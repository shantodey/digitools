import React from 'react';
import ShoppingCard from './ShoppingCard/ShoppingCard';
import EmptyShoppincCard from './EmptyShoppincCard/EmptyShoppincCard';

const ShoppingCards = ({ cats, handleRemoveItem }) => {
    const totalPrice = cats.reduce((total, item) => total + (item.price || 0), 0);
    return (
        <div className="bg-base-100 rounded-2xl p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-base-content">Your Cart</h2>

            <div className="flex flex-col gap-4">
                {cats.length === 0 ? (
                    <EmptyShoppincCard />
                ) : (
                    <>
                        <div className="space-y-4">
                            {cats.map((item) => (
                                <ShoppingCard 
                                    handleRemoveItem={handleRemoveItem} 
                                    key={item.id} 
                                    items={item} 
                                />
                            ))}
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-sm text-base-content/50">Total:</span>
                                <span className="text-2xl font-bold text-base-content">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>

                            <button
                                className="btn border-none text-white w-full rounded-full"
                                style={{ background: "linear-gradient(to right, #4F39F6, #9514FA)" }}
                            >
                                Proceed To Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ShoppingCards;