import React from 'react';

const Counter = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-20'>
            <div className="container mx-auto">
                <div className="counter grid grid-cols-3 justify-center">
                    <div className='text-center border-r-2 border-white'>
                        <h1 className='text-6xl font-extrabold text-white'>50K+</h1>
                        <p className='text-2xl pt-3 font-light  text-white'>Active Users</p>
                    </div>
                    <div className='text-center border-r-2 border-white'>
                        <h1 className='text-6xl font-extrabold  text-white'>200+</h1>
                        <p  className='text-2xl pt-3 font-light  text-white'>Premium Tools</p>
                    </div>
                    <div className='text-center border-r-2 border-white'>
                        <h1 className='text-6xl font-extrabold  text-white'>4.9</h1>
                        <p  className='text-2xl pt-3 font-light  text-white'>Rating</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Counter;