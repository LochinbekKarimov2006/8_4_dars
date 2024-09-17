import React from 'react';
import Navbar from '../components/Navbar';
import Menyu from '../components/Menyu';
import Account1 from '../pages/Account1';

const MainLayout = () => {
  return (
    <div >
      <Navbar />
      <div className='div-100'>
        <Menyu />
        <Account1/>
      </div>
    </div>
  );
};

export default MainLayout;
