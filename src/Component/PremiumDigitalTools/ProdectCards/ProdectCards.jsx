import React, { use } from 'react';
import Card from '../ProdectCards/Card/Card'

const Cards = ({ getProductsData,cats,setCats  }) => {
    const receveData=use(getProductsData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {receveData.map((prodectsData) => (
                <Card 
                    key={prodectsData.id}
                    prodectsData={prodectsData}
                    setCats={setCats}
                    cats={cats}
                />
            ))}
        </div>
    );
};

export default Cards;