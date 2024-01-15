// Layout.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='flex flex-col overflow-x-hidden min-h-screen'>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-700'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
