import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="  bg-slate-300   py-1 ">
        <div className="flex px-2 justify-between items-center text-center  ">
          <div className=" flex  py-2 px-4 mexcellent text-7xl text-black ">
            GFG - PLANTATION
            <div className="bg-black   w-[2px] mx-2 ml-6 rounded-lg"></div>
          </div>
          <div className=" flex justify-around box-content m-3 mr-28 gap-24 relative gilroy ">
            <Link to="/">
              <div className=" custombuttons bg-slate-500 p-4 rounded-2xl border-[2px] border-gray-700 relative ease-in-out duration-300 overflow-hidden  ">
                <p className="relative z-10">Home</p>
              </div>
            </Link>
            <Link to="/addPlant">
              <div className=" custombuttons bg-slate-500 p-4 rounded-2xl border-[2px] border-gray-700 relative ease-in-out duration-300 overflow-hidden  ">
                <p className="relative z-10">Add-Plant</p>
              </div>
            </Link>
            <Link to="/myPlants">
              <div className=" custombuttons bg-slate-500 p-4 rounded-2xl border-[2px] border-gray-700 relative ease-in-out duration-300 overflow-hidden  ">
                <p className="relative z-10">My Plants</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-black m-1 h-[2px] w-[95%] mx-auto rounded-lg"></div>
      </div>
    </div>
  );
}

export default Navbar;
