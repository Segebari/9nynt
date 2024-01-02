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

        <div className='flex mt-20  h-96'>

            <div className='w-1/2'>
                <h1 className='font-semibold text-5xl pt-14'>
                    Predictable Growth <br /> Starts Here.
                </h1>
                <p className='text-xxs pt-5'>We are dedicated to empowering entrepreneurs like you. Navigate your path <br /> to triumph with our effortless tools designed to fuel your business growth.</p>
                <div className="flex pt-5 gap-4">
                    <div className='flex bg-black w-28 h-8 rounded-md pl-2 py-1 items-center gap-2 justify-start'>
                        <img src={apple} alt="Google playstore Icon" className="h-4"/>
                        <p className='text-white text-xxxs leading-tight'>
                            Download on the <br /> Apple store
                        </p>
                    </div>
                    <div className='flex bg-black w-28 h-8 rounded-md pl-2 py-1 items-center gap-2 justify-start'>
                        <img src={google} alt="Apple Icon" className="h-4"/>
                        <p className='text-white text-xxxs leading-tight'>
                            Get it on <br /> Google Play
                        </p>
                    </div>
                </div>

                <div className='flex mt-5 gap-3'>
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
                            <p className='text-xxxs'>990 reviews</p>
                        </div>
                </div>
            </div>

            <div className='w-1/2 h-96'>
                <img src={img} alt="Iphone and people" className=" h-96 ml-auto" style={{ objectFit: 'cover' }} />
            </div>

        </div>
    </>
  )
}

export default Hero
