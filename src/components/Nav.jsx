import React from 'react'
import logob from '../assets/9nynt-black.svg';

const Nav = () => {
  return (
    <>
     <nav className='flex w-full justify-between items-center pt-4'>
        <img src={logob} alt="logo" className="h-10 w-28" />

        <div>
            <ul className='flex items-center gap-4'>
                <li className='text-xs'>
                    Home
                </li>

                <li className='text-xs'>
                    About Us
                </li>

                <li>
                    <button className='px-3 py-1 bg-black rounded-md text-white text-xs'>
                        Download
                    </button>
                </li>
            </ul>
        </div>
    </nav> 
    </>
  )
}

export default Nav
