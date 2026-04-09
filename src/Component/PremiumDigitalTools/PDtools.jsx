import React, { useState } from 'react';
import ProdectCards from './ProdectCards/ProdectCards'
import ShoppingCard from './ShoppingCard/ShoppingCard';

const PDtools = ({getProductsData,cats,setCats }) => {
    const [selectButton,selectedButton]=useState('Products')
    return (
        <div className='py-28'>
            <div className="container mx-auto">
                <div className="titel text-center">
                    <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                    <p className='pt-4'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>
                <div className="togolebutton pt-3.5 pb-5 text-center">
                    <button onClick={()=>selectedButton("Products")}  class="btn btn-outline">Products</button>
                    <button onClick={()=>selectedButton("Card")}  class="btn btn-outline">Card(2)</button>
                </div>
                {selectButton==="Products"?
                    <ProdectCards getProductsData ={getProductsData} setCats={setCats} cats={cats} />
                    :
                    <ShoppingCard  setCats={setCats} cats={cats}/>
                }
            </div>
        </div>
    );
};

export default PDtools;