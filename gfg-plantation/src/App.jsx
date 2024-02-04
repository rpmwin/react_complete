import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Pages/components/Navbar';
import Landing from './Pages/Landing';
import Footer from './Pages/components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen bg-[#1c1c1c] text-white flex flex-col'>
      <div className=' '><Navbar /></div>
      <div className='flex-grow'><Outlet /></div>
      <div><Footer /></div>
    </div>
  );
}

export default App;
