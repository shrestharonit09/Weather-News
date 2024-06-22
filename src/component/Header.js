import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white px-4 py-2 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center w-[90vw]">
        <h1 className="text-md md:text-xl font-bold">My News App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "hover:text-gray-200"
                }
              >
                <h1 className="text-md md:text-xl">News</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/weather"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "hover:text-gray-200"
                }
              >
                <h1 className="text-md md:text-xl"> Weather</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "hover:text-gray-200"
                }
              >
                <h1 className="text-md md:text-xl">Contact</h1>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-green-400" : "hover:text-gray-200"
                }
              >
                <h1 className="text-md md:text-xl"> About Us</h1>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
