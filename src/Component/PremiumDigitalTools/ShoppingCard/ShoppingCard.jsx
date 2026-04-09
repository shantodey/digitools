import React from 'react';

const ShoppingCard = ({cats}) => {
    return (
        <div>
            {cats.map(i=><p key={i.id}> {i.price} </p>)}
            
        </div>
    );
};

export default ShoppingCard;