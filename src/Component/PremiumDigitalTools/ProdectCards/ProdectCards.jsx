import React, { use } from 'react';
import Card from '../ProdectCards/Card/Card'

const Cards = ({ getProductsData,cats,setCats  }) => {
    const receveData=use(getProductsData)
    return (
        <div className="grid grid-cols-3 gap-4">
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