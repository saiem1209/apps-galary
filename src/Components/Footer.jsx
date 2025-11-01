import React from 'react';
import logoImg from '../assets/logo.png'
import { Facebook, Linkedin, Twitter } from 'lucide-react';


const Footer = () => {
    return (
        <footer className=" bg-[#001931] text-neutral-content p-6">
            <div className='max-w-[1000px] flex justify-between mx-auto mb-0.5 border-b-[0.3px] border-[#E5E7EB] p-2'>

                <div className='flex justify-between items-center'>
                    <img className="h-[30px] w-[30px]" src={logoImg} alt="" />
                    <p className='font-semibold'>
                        Hero.io
                    </p>
                </div>

                <div>
                    <p className='font-semibold'>Social Links</p>
                    <div className='flex gap-0.5'>
                        <Facebook /> <Linkedin /> <Twitter />
                    </div>
                </div>

            </div>
            <aside>
                <p className='text-center'>Copyright © 2025 - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;