import React, { useState } from 'react'
import logob from '../assets/9nynt-black.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className="flex w-full justify-between items-center pt-4">
        <Link to="/"> <img src={logob} alt="logo" className="h-10 w-32" /> </Link>

        <div
          className={`menu hidden md:text-black xs:text-white md:bg-transparent xs:bg-black  xs:absolute md:relative xs:w-screen md:w-auto xs:h-screen md:h-auto xs:top-0 md:top-auto xs:left-0 md:left-auto xs:right-0 md:right-auto md:block ${
            isOpen ? 'xs:block' : ''
          }`}
        >
          <ul className="flex xs:flex-col md:flex-row xs:pt-20 md:pt-0 items-center gap-4">
            <li className="text-md">
              <Link to="/">Home</Link>
            </li>

            <li className="text-md">
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <button className="px-3 py-1 bg-black rounded-md text-white text-md">
                Download
              </button>
            </li>
          </ul>
        </div>

        <div
          className={`md:hidden flex flex-col gap-[0.2rem] h-auto relative z-50`}
          onClick={toggleMenu}
        >
          <div
            className={`bg-black h-[0.1rem] w-6 ${isOpen ? 'bg-white' : ''}`}
          ></div>
          <div
            className={`bg-black h-[0.1rem] w-6 ${isOpen ? 'bg-white' : ''}`}
          ></div>
          <div
            className={`bg-black h-[0.1rem] w-6 ${isOpen ? 'bg-white' : ''}`}
          ></div>
        </div>
      </nav>
    </>
  )
}

export default Nav
