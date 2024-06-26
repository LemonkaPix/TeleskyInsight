import { useState, useEffect } from 'react';
import logo from "../../assets/logo.png"; 

const StandardHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 0) {
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

  const logoTopPosition = isScrolled ? 'top-[11px]' : 'top-[20px]';

  const scrollToSection = (id: any) => {
    const yOffset = -200; 
    const element: any = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

  return (
    <div className="bg-[#181414] text-white fixed top-0 left-1/2 transform -translate-x-1/2 w-[100%] xl:w-[85%] max-w-screen-xl z-50 rounded-bl-xl rounded-br-lg">
      <div className="flex justify-center items-center h-[80px] relative">
        <div className="w-full px-4 sm:px-6 md:px-3 xl:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center justify-start px-1">
              <button className="text-white md:hidden">
                <i className="fas fa-bars"></i>
              </button>
              <div className="flex-col md:flex-row md:flex xl:space-x-10 space-x-3">
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-[#283593] text-white px-2 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                  Strona główna
                </button>
                <button onClick={() => scrollToSection('aboutTelescopes')} className="bg-[#283593] text-white px-2 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                  Teleskop
                </button>
                <button onClick={() => scrollToSection('charts')} className="bg-[#283593] text-white px-2 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                  Odczyty
                </button>
              </div>
            </div>

            <img src={logo} alt="Logo" className={`absolute transition-all duration-1000 cubic-bezier(0.25, 0.1, 0.25, 1) ${logoTopPosition} pb-[5px] pr-[5px] left-1/2 transform -translate-x-1/2 ${isScrolled ? 'lg:w-[80px] w-[75px]' : 'lg:w-[120px] w-[105px]'} z-50 bg-[#181414] ${isScrolled ? 'p-0' : 'p-1'} rounded-bl-xl rounded-br-xl`} />
            
            <div className="hidden md:flex items-center justify-end xl:space-x-10 space-x-3">
              <button onClick={() => scrollToSection('project')} className="bg-[#283593] text-white px-2 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                O projekcie
              </button>
              <button onClick={() => scrollToSection('team')} className="bg-[#283593] text-white px-2 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                Członkowie
              </button>
              <button onClick={() => scrollToSection('footer')} className="bg-[#283593] text-white px-2 lg:px-4 py-2 rounded-xl hover:bg-blue-700 text-[14px] md:text-[16px]">
                Sponsorzy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandardHeader
