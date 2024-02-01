import { useState } from 'react';

import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#1e1e20] min-h-screen w-full h-full text-white flex justify-center items-center">
      <Outlet className=" min-h-screen w-full h-full  " />
    </div>
  );
}

export default App;
