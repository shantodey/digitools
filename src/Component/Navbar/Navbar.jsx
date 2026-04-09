import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({ cats }) => {
    return (
        <>
            <div className='shadow-sm sticky top-0 z-50 bg-base-100'>
                <div className="container mx-auto ">
                    <div className="navbar   py-7">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li><a>Products</a></li>
                                    <li><a>Features</a></li>
                                    <li><a>Pricing</a></li>
                                    <li><a>Testimonials</a></li>
                                    <li><a>FAQ</a></li>
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-5xl text-[#6D28FF]">DigiTols</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a className='font-medium text-base'>Products</a></li>
                                <li><a className='font-medium text-base'>Features</a></li>
                                <li><a className='font-medium text-base'>Pricing</a></li>
                                <li><a className='font-medium text-base'>Testimonials</a></li>
                                <li><a className='font-medium text-base'>FAQ</a></li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a className="relative">
                                <ShoppingCart />
                                <span className="absolute -top-4 -right-2 text-xs w-5 h-5 rounded-full flex items-center justify-center">{cats.length===0 ? '':cats.length }</span>
                            </a>
                            <p className='px-4 font-medium text-base'>login</p>
                            <button className="btn className='font-medium text-base' bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;