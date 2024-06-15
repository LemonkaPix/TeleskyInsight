import React, { useState, useEffect } from 'react';
import logo from "../../assets/logos.png"; // Ustaw ścieżkę do logo

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#181414] text-white fixed top-0 left-1/2 transform -translate-x-1/2 w-[100%] xl:w-[85%] max-w-screen-xl z-50 rounded-bl-xl rounded-br-lg">
      <div className="flex justify-center items-center h-[80px] relative">
        <div className="w-full px-4 sm:px-6 md:px-3 xl:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center justify-start px-1">
              <button className="text-white md:hidden">
                <i className="fas fa-bars"></i>
              </button>
              <div className={` flex-col md:flex-row md:flex xl:space-x-10 space-x-3`}>
                <a href="#" className="bg-[#283593] text-white px-3 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                  Strona główna
                </a>
                <a href="#" className="bg-[#283593] text-white px-3 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                  Teleskop
                </a>
                <a href="#" className="bg-[#283593] text-white px-3 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                  Odczyty
                </a>
              </div>
            </div>

            <img src={logo} alt="Logo" className={`absolute transition-all duration-1000 cubic-bezier(0.25, 0.1, 0.25, 1) top-${isScrolled ? '[6px]' : '[15px]'} left-1/2 transform -translate-x-1/2 w-${isScrolled ? '[80px]' : '[120px]'} z-50 bg-[#181414] p-${isScrolled ? '0' : '3'} rounded-bl-xl rounded-br-xl`} />
            
            <div className="hidden md:flex items-center justify-end xl:space-x-10 space-x-3">
              <a href="#" className="bg-[#283593] text-white px-3 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                O projekcie
              </a>
              <a href="#" className="bg-[#283593] text-white px-3 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                Członkowie
              </a>
              <a href="#" className="bg-[#283593] text-white px-3 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                Sponsorzy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
