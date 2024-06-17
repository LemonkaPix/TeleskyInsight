import React from 'react'
import Sponsors from '../sponsors';
import logo from "../../assets/logos.png"

const Footer = () => {
    return (
        <footer className='w-full bg-[#181414]'>
            <Sponsors />

            <div className='max-w-screen-xl mx-auto flex justify-between items-center  border-t-2 border-white-200 mt-5 flex-col sm:flex-row'>
                <div className='flex justify-center items-center my-7 mx-[15px] sm:ml-[40px] xl:ml-[10px]'>
                    <img src={logo} alt="Telesky Insight" className='w-[100px]' />
                    <h2 className=''>Telesky Insight</h2>
                </div>
                <div className='mx-[15px] sm:mr-[40px] xl:mr-[10px] text-sm md:text-[16px] sm:mb-0 mb-5'>
                    <p>Wszystkie prawa zastrzeżone 2024 Telesky Insight</p>
                </div>
            </div>
        </footer>
    )
   
};

export default Footer;
