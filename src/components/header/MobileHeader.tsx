import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: any) => {
    const yOffset = -80; // Adjust this value as needed
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
      toggleMenu(); // Closes the hamburger menu after clicking
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[80px] bg-[#181414] z-50 flex items-center justify-between">
      <div className="text-white font-bold text-xl pl-4 flex items-center justify-between w-[93.5%]">
        <Hamburger toggled={isOpen} toggle={toggleMenu} color="#ffffff" size={24} />
        <span className="ml-4">Telesky Insight</span>
      </div>

      <div className={`fixed top-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} h-full w-[70%] bg-[#181414] text-white p-4 sm:pr-[40px] transition-transform duration-300 ease-in-out z-40`}>
        <div className="flex justify-between items-center border-b border-gray-400 py-2">
          <h2 className="text-md font-bold ml-3">Telesky Insight</h2>
          <span className='mr-[-10px]'>
            <Hamburger toggled={isOpen} toggle={toggleMenu} color="#ffffff" size={24} />
          </span>
        </div>

        <div className='mt-[15%]'>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="block py-4 hover:bg-[#283593] px-4 border-b border-gray-700 w-full text-left">Strona główna</button>
          <button onClick={() => scrollToSection('aboutTelescopes')} className="block py-4 hover:bg-[#283593] px-4 border-b border-gray-700 w-full text-left">Teleskop</button>
          <button onClick={() => scrollToSection('charts')} className="block py-4 hover:bg-[#283593] px-4 border-b border-gray-700 w-full text-left">Odczyty</button>
          <button onClick={() => scrollToSection('project')} className="block py-4 hover:bg-[#283593] px-4 border-b border-gray-700 w-full text-left">O projekcie</button>
          <button onClick={() => scrollToSection('team')} className="block py-4 hover:bg-[#283593] px-4 border-b border-gray-700 w-full text-left">Członkowie</button>
          <button onClick={() => scrollToSection('footer')} className="block py-4 hover:bg-[#283593] px-4 border-b border-gray-700 w-full text-left">Sponsorzy</button>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
