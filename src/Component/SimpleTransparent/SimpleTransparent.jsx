import React from 'react';
import { Check } from 'lucide-react';

const SimpleTransparent = () => {
    return (
        <section className="bg-base-200 py-16 md:py-24 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-14">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-base-content/60">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                    
                    {/* Starter Card */}
                    <div className="card bg-base-100 shadow-sm border border-base-200 rounded-2xl">
                        <div className="card-body p-6">
                            <h3 className="card-title text-2xl font-bold">Starter</h3>
                            <p className="text-sm text-base-content/60 flex-grow-0">Perfect for getting started</p>
                            
                            <div className="my-4 flex items-end gap-1">
                                <span className="text-5xl font-bold">$0</span>
                                <span className="text-base-content/60 mb-1">/Month</span>
                            </div>

                            <ul className="space-y-3 mb-6 flex-1">
                                {['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-success" />
                                        <span className="text-sm text-base-content/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="card-actions mt-auto">
                                <button className="btn btn-block rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none">
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Pro Card */}
                    <div className="card bg-gradient-to-br from-[#4F39F6] to-[#9514FA] shadow-md rounded-2xl relative text-white">
                        {/* Badge */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                            <span className="badge bg-[#f4d35e] text-base-content text-xs font-medium px-4 py-3 border-none">
                                Most Popular
                            </span>
                        </div>

                        <div className="card-body p-6 mt-2">
                            <h3 className="card-title text-2xl font-bold text-white">Pro</h3>
                            <p className="text-sm text-white/70 flex-grow-0">Best for professionals</p>
                            
                            <div className="my-4 flex items-end gap-1">
                                <span className="text-5xl font-bold text-white">$29</span>
                                <span className="text-white/70 mb-1">/Month</span>
                            </div>

                            <ul className="space-y-3 mb-6 flex-1">
                                {['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-white" />
                                        <span className="text-sm text-white/90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="card-actions mt-auto">
                                <button className="btn btn-block rounded-full bg-white text-[#6D28FF] hover:bg-base-200 border-none">
                                    Start Pro Trial
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Card */}
                    <div className="card bg-base-100 shadow-sm border border-base-200 rounded-2xl">
                        <div className="card-body p-6">
                            <h3 className="card-title text-2xl font-bold">Enterprise</h3>
                            <p className="text-sm text-base-content/60 flex-grow-0">For teams and businesses</p>
                            
                            <div className="my-4 flex items-end gap-1">
                                <span className="text-5xl font-bold">$99</span>
                                <span className="text-base-content/60 mb-1">/Month</span>
                            </div>

                            <ul className="space-y-3 mb-6 flex-1">
                                {['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-success" />
                                        <span className="text-sm text-base-content/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="card-actions mt-auto">
                                <button className="btn btn-block rounded-full text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SimpleTransparent;