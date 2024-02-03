import React, { useState } from 'react';
import { RiMenu5Fill } from 'react-icons/ri';

function Welcome() {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`min-h-screen min-w-screen h-full w-full text-white flex justify-center items-center overflow-hidden relative ${
        menu ? 'animate-slideRight bg-slate-500' : 'animate-slideLeft'
      }`}
    >
      <div
        className={`min-h-screen flex items-center w-1/5 text-left text-2xl relative z-10 transition-all duration-300 `}
      >
        <button
          className={`p-20 `}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <RiMenu5Fill />
        </button>
      </div>
      <div
        className={`min-h-screen flex justify-center items-center w-4/5 text-left text-7xl font-bold transition-opacity duration-500 relative z-20 `}
      >
        {menu ? (
          <div
            className={`absolute top-0 left-0 w-full h-full bg-slate-500 animate-slideRight transition-all duration-500 flex cursor-default  justify-center flex-col gap-9 text-left text-7xl font-bold `}
          >
            <p
              className={`text-white cursor-pointer duration-500  w-max p-6 pb-0 animate-textSlideRight `}
            >
              Home
            </p>
            <p
              className={`text-white opacity-50 hover:opacity-90 hover:text-black cursor-pointer hover:font-light hover:tracking-wider duration-900  w-max p-6 pb-0 pt-0 animate-textSlideRight `}
            >
              LOG - IN
            </p>
            <p
              className={`text-white opacity-50 hover:opacity-90 hover:text-black cursor-pointer hover:font-light hover:tracking-wider duration-900  w-max p-6 pb-0 pt-0 animate-textSlideRight `}
            >
              SIGN - UP
            </p>
          </div>
        ) : (
          <p className="animate-slideLeft">FARMERS - CONNECT</p>
        )}
      </div>
    </div>
  );
}

export default Welcome;

// <div className="h-full  gap-4">
//   this is welcome page....
//   <div className="flex mt-8 items-center lg:order-2">
//     <Link
//       to="/login"
//       className="text-gray-800 bg-green-300  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
//     >
//       Log in
//     </Link>
//     <Link
//       to="signup"
//       className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-300"
//     >
//       Get started
//     </Link>
//   </div>
// </div>
