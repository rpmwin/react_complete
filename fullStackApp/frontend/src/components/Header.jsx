import React from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="w-screen bg-slate-900 min-h-14 text-2xl p-2 text-white flex flex-row justify-between">
      <div className="flex justify-around w-full">
        <Link to="/" className="flex items-center">
          YOUR LOGO
        </Link>
        <div className="flex gap-32">
          <div className="inline-block p-2">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `block pr-4 py-2  pl-3 duration-200  ${
                  isActive ? "text-orange-700" : "text-gray-300"
                }  hover:bg-gray-50 hover:rounded-xl hover:text-orange-700 `
              }
            >
              Home
            </NavLink>
          </div>
          <div className="inline-block p-2">
            <NavLink
              to={"/Events"}
              className={({ isActive }) =>
                `block pr-4 py-2  pl-3 duration-200  ${
                  isActive ? "text-orange-700" : "text-gray-300"
                }  hover:bg-gray-50 hover:rounded-xl hover:text-orange-700 `
              }
            >
              Events
            </NavLink>
          </div>
          <div className="inline-block p-2">
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                `block pr-4 py-2  pl-3 duration-200  ${
                  isActive ? "text-orange-700" : "text-gray-300"
                }  hover:bg-gray-50 hover:rounded-xl hover:text-orange-700 `
              }
            >
              contact us
            </NavLink>
          </div>
          <div className="inline-block p-2">
            <NavLink
              to={"/About"}
              className={({ isActive }) =>
              `block pr-4 py-2 pl-3 duration-200  ${
                isActive ? "text-orange-700" : "text-gray-300"
              }  hover:bg-gray-50 hover:rounded-xl hover:text-orange-700 `
            }
            >
              About
            </NavLink>
          </div>
          <div className="inline-block p-2">
            <NavLink
              to={"/Cart"}
              className={({ isActive }) =>
              `block pr-4 py-2 pl-3 duration-200  ${
                isActive ? "text-orange-700" : "text-gray-300"
              }  hover:bg-gray-50 hover:rounded-xl hover:text-orange-700 `
            }
            >
              Cart
            </NavLink>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
