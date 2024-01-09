import React from 'react'
import img from '../assets/hero.svg'; // Adjust the path accordingly
import google from '../assets/googleplay.svg';
import apple from '../assets/apple.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {faStarHalf} from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <>

        <div className='flex xs:flex-col md:flex-row md:mt-20  md:h-96 xs:gap-10'>

            <div className='md:w-1/2 xs:text-center md:text-left'>
                <h1 className='font-semibold xs:text-[1.7rem] md:text-5xl pt-14'>
                    Predictable Growth <br /> Starts Here.
                </h1>
                <p className='m-w-1/2 text-xxs md:text-[1.2rem] pt-5'>We are dedicated to empowering entrepreneurs like you. Navigate your path to triumph with our effortless tools designed to fuel your business growth.</p>
                <div className="flex xs:flex-col md:flex-row xs:items-center pt-5 gap-4 xs:justify-center md:justify-start">
                    <div className='flex bg-black w-32 h-10 rounded-md pl-2 py-1 items-center gap-2 justify-start'>
                        <img src={apple} alt="Google playstore Icon" className="h-6"/>
                        <p className='text-white text-[0.6rem] leading-tight'>
                            Download on the <br /> Apple store
                        </p>
                    </div>
                    <div className='flex bg-black w-32 h-10 rounded-md pl-2 py-1 items-center gap-2 justify-start'>
                        <img src={google} alt="Apple Icon" className="h-6"/>
                        <p className='text-white text-[0.6rem] leading-tight'>
                            Get it on <br /> Google Play
                        </p>
                    </div>
                </div>

                <div className='flex mt-5 gap-3 xs:justify-center md:justify-normal'>
                        <h3 className='font-black text-2xl'>
                            4.5
                        </h3>
                    
                        <div className="rating">
                            {/* Display 4 full stars */}
                            <FontAwesomeIcon icon={faStar} className="text-customStar" />
                            <FontAwesomeIcon icon={faStar} className="text-customStar" />
                            <FontAwesomeIcon icon={faStar} className="text-customStar" />
                            <FontAwesomeIcon icon={faStar} className="text-customStar" />
                            {/* Display half-filled star */}
                            <FontAwesomeIcon icon={faStarHalf} className="text-customStar fa-solid fa-star-half" />
                            <p className='text-xs'>990 reviews</p>
                        </div>
                </div>
            </div>

            <div className='md:w-1/2 md:h-96  md:block'>
                <img src={img} alt="Iphone and people" className=" min-w-[320px] h-96 md:ml-auto" style={{ objectFit: 'contain' }} />
            </div>

        </div>
    </>
  )
}

export default Hero
