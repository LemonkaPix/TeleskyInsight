import React from 'react';
import MobileHeader from './MobileHeader';
import StandardHeader from './StandardHeader';

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <StandardHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
