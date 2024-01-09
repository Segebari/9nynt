import React from 'react'
import logob from '../assets/9nynt-black.svg';


const Footer = () => {
  return (
    <>
      <div className='flex xs:flex-col xs:gap-5 md:flex-row w-full md:h-48 justify-between'>

        <div className='md:mb-0 xs:mb-5'>
            <img src={logob} alt="logo" className="h-10 w-34" />
            <p className='text-[.9rem] pt-5'>
                Our platform is designed to simplify shop management, <br />
                streamline transactions, and foster community growth.
            </p>
        </div>

        <div>
            <h4 className='font-bold text-[1rem]'>
                About Us
            </h4>

            <ul>
                <li className='text-[.9rem] py-2'>
                    Project
                </li>
                <li className='text-[.9rem] py-2'>
                    Pricing
                </li>
                <li className='text-[.9rem] py-2'>
                    Services
                </li>
            </ul>

        </div>

        <div>

            <h4 className='font-bold'>
                    Media
            </h4>

            <ul>

                <li className='text-[.9rem] py-2'>
                    Privacy policy
                </li>

                <li className='text-[.9rem] py-2'>
                    Terms & services
                </li>

            </ul>

        </div>

        <div>

            <h4 className='font-bold'>
                Contact
            </h4>

                <ul>
                    <li className='text-[.9rem] py-2'>
                        9nyntshop@gmail.com
                    </li>
                    <li className='text-[.9rem] py-2'>
                        +2349049861561
                    </li>
                    <li className='flex icons'>
                        

                    </li>

                </ul>

        </div>


      </div>

      <div className='md:text-center xs:text-left text-xs pb-3 xs:mt-10 md:mt-0'>
            Copyright @ 2023 9nynt. All rights reserved.
      </div>
    </>
  )
}

export default Footer
