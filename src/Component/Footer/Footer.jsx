import React from 'react';
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/Instagram.png'
import X from '../../assets/X.png'

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-[#071224] text-white px-10 md:px-20 py-14 border-t border-[#4F39F6]">

                <aside className="max-w-[260px]">
                    <h2 className="text-4xl font-bold mb-4">
                        DigiTools
                    </h2>

                    <p className="text-sm leading-7 text-[#9ca3af]">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title text-white opacity-100 text-base">
                        Product
                    </h6>

                    <a className="link link-hover text-[#9ca3af]">Features</a>
                    <a className="link link-hover text-[#9ca3af]">Pricing</a>
                    <a className="link link-hover text-[#9ca3af]">Templates</a>
                    <a className="link link-hover text-[#9ca3af]">Integrations</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-white opacity-100 text-base">
                        Company
                    </h6>

                    <a className="link link-hover text-[#9ca3af]">About</a>
                    <a className="link link-hover text-[#9ca3af]">Blog</a>
                    <a className="link link-hover text-[#9ca3af]">Careers</a>
                    <a className="link link-hover text-[#9ca3af]">Press</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-white opacity-100 text-base">
                        Resources
                    </h6>

                    <a className="link link-hover text-[#9ca3af]">Documentation</a>
                    <a className="link link-hover text-[#9ca3af]">Help Center</a>
                    <a className="link link-hover text-[#9ca3af]">Community</a>
                    <a className="link link-hover text-[#9ca3af]">Contact</a>
                </nav>

                <nav>
                    <h6 className="footer-title text-white opacity-100 text-base">
                        Social Links
                    </h6>

                    <div className="grid grid-flow-col gap-3">
                        <a className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                            {/* <Instagram size={16} /> */}
                            <img src={Facebook} className='size-4' alt="Facebook" />
                        </a>

                        <a className="w-9 h-9 rounded-full bg-white  flex items-center justify-center">
                            <img src={Instagram} className='size-4' alt="Instagram" />
                        </a>

                        <a className="w-9 h-9 rounded-full bg-white  flex items-center justify-center">
                            <img src={X} className='size-4' alt="X" />
                        </a>

                    </div>
                </nav>
            </footer>

            <footer className="footer bg-[#071224] border-t border-white/10 px-10 md:px-20 py-6 text-[#6b7280]">
                <aside>
                    <p className="text-sm">
                        © 2026 Digitools. All rights reserved.
                    </p>
                </aside>

                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-6 text-sm">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Cookies</a>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;