import React, { use } from 'react';
import Card from '../Card/Card';

const Cards = ({ getProductsData  }) => {
    const receveData=use(getProductsData)
    return (
        <div className="grid grid-cols-3 gap-4">
            {receveData.map((prodectsData) => (
                <Card
                    key={prodectsData.id}
                    prodectsData={prodectsData}
                />
            ))}
        </div>
    );
};

export default Cards;