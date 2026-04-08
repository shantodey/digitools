import React from 'react';
import Cards from '../Cards/Cards';

const PDtools = ({getProductsData }) => {
    return (
        <div className='py-28'>
            <div className="container mx-auto">
                <div className="titel text-center">
                    <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                    <p className='pt-4'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>
                

                <Cards getProductsData ={getProductsData}/>
            </div>
        </div>
    );
};

export default PDtools;