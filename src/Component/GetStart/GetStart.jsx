import React from 'react';
import User from '../../assets/user.png';
import Package from '../../assets/package.png';
import Rocket from '../../assets/rocket.png';
const GetStart = () => {
    return (
        <section className="bg-[#f8f9fc] py-16 md:py-24 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 md:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827]">
                        Get Started In 3 Steps
                    </h1>

                    <p className="mt-3 text-sm sm:text-base text-[#9ca3af]">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    <div className="relative bg-white border border-[#ececec] rounded-2xl px-6 py-10 flex flex-col items-center text-center min-h-[260px] shadow-sm">
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#6D28FF] text-white text-[11px] font-semibold flex items-center justify-center">
                            01
                        </div>

                        <div className="w-20 h-20 rounded-full bg-[#f4ebff] flex items-center justify-center mb-6">
                            <img
                                src={User}
                                alt="Create Account"
                                className="w-9 h-9 object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-[#111827] mb-3">
                            Create Account
                        </h3>

                        <p className="text-sm leading-6 text-[#9ca3af] max-w-[240px]">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    <div className="relative bg-white border border-[#ececec] rounded-2xl px-6 py-10 flex flex-col items-center text-center min-h-[260px] shadow-sm">
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#6D28FF] text-white text-[11px] font-semibold flex items-center justify-center">
                            02
                        </div>

                        <div className="w-20 h-20 rounded-full bg-[#f4ebff] flex items-center justify-center mb-6">
                            <img
                                src={Package}
                                alt="Choose Products"
                                className="w-9 h-9 object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-[#111827] mb-3">
                            Choose Products
                        </h3>

                        <p className="text-sm leading-6 text-[#9ca3af] max-w-[240px]">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    <div className="relative bg-white border border-[#ececec] rounded-2xl px-6 py-10 flex flex-col items-center text-center min-h-[260px] shadow-sm md:col-span-2 xl:col-span-1">
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#6D28FF] text-white text-[11px] font-semibold flex items-center justify-center">
                            03
                        </div>

                        <div className="w-20 h-20 rounded-full bg-[#f4ebff] flex items-center justify-center mb-6">
                            <img
                                src={Rocket}
                                alt="Start Creating"
                                className="w-9 h-9 object-contain"
                            />
                        </div>

                        <h3 className="text-xl font-semibold text-[#111827] mb-3">
                            Start Creating
                        </h3>

                        <p className="text-sm leading-6 text-[#9ca3af] max-w-[240px]">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GetStart;