import React, { useState } from 'react';
import ProdectCards from './ProdectCards/ProdectCards'
import ShoppingCards from './ShoppingCards/ShoppingCards';

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
                    <button onClick={()=>selectedButton("Products")}  className={`btn 
                        ${selectButton === "Products" ? "flex-1  rounded-full  font-semibold py-2 bg-custom-gradient text-white cursor-pointer" :
                         "flex-1  rounded-full  font-semibold py-2 bg-transparent text-[#25065D] cursor-pointer"} `}>Products</button>
                    <button onClick={()=>selectedButton("Card")}  className={`btn 
                        ${selectButton === "Card" ? "flex-1  rounded-full  font-semibold py-2 bg-custom-gradient text-white cursor-pointer" :
                         "flex-1  rounded-full  font-semibold py-2 bg-transparent text-[#25065D] cursor-pointer"} `}>Card{cats.length===0 ? '':cats.length }</button>
                </div>
                {selectButton==="Products"?
                    <ProdectCards getProductsData ={getProductsData} setCats={setCats} cats={cats} />
                    :
                    <ShoppingCards setCats={setCats} cats={cats}/>
                }
            </div>
        </div>
    );
};

export default PDtools;