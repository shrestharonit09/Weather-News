import React from "react";

import Logo from "../Images/News.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-200 shadow-lg">
      <div className="flex justify-center">
        <div className="w-[90vw] flex justify-between px-4 py-5 ">
           <div>
          <img className="h-16 w-16" src={Logo} alt="logo" />
          </div>
          <div className="flex gap-5 py-4">
          
          <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/">Home</NavLink>
          <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/weather">Weather</NavLink>
              <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/Technology">Technology</NavLink>
              <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/Business">Business</NavLink>
              <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/General">General</NavLink>
              <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/Health">Health</NavLink>
              <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/Science">Science</NavLink>
              <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/Sports">Sports</NavLink>
              <NavLink className={({ isActive }) =>
                 isActive ? "text-blue-400" : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
              } to="/Entertainment">Entertainment</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
