import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-slate-800 text-white px-4 py-2 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">My News App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><NavLink to="/"  className={({ isActive }) =>
    isActive ? 'text-green-400' : 'hover:text-gray-200'
  } >News</NavLink></li>
            <li><NavLink to="/weather" className={({ isActive }) =>
    isActive ? 'text-green-400' : 'hover:text-gray-200'
  }>Weather</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) =>
    isActive ? 'text-green-400' : 'hover:text-gray-200'
  }>Contact</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) =>
    isActive ? 'text-green-400' : 'hover:text-gray-200'
  }>About Us</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header