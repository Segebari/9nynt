import React from 'react'
import img from '../../assets/hero.svg' // Adjust the path accordingly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'
import Downloadbuttons from '../Downloadbuttons'

const Hero = () => {
  return (
    <>
      <div className="flex xs:flex-col lg:flex-row md:mt-20  lg:h-96 xs:gap-10 lg:gap-0">
        <div className="lg:w-1/2 xs:text-center lg:text-left">
          <h1 className="font-semibold xs:text-[1.7rem] lg:text-5xl pt-14">
            Predictable Growth <br /> Starts Here.
          </h1>
          <p className="m-w-1/2 text-xxs md:text-[1.2rem] pt-5">
            We are dedicated to empowering entrepreneurs like you. Navigate your
            path to triumph with our effortless tools designed to fuel your
            business growth.
          </p>
          <Downloadbuttons/>
          <div className="flex mt-5 gap-3 xs:justify-center md:justify-normal">
            <h3 className="font-black text-2xl">4.5</h3>

            <div className="rating">
              {/* Display 4 full stars */}
              <FontAwesomeIcon icon={faStar} className="text-customStar" />
              <FontAwesomeIcon icon={faStar} className="text-customStar" />
              <FontAwesomeIcon icon={faStar} className="text-customStar" />
              <FontAwesomeIcon icon={faStar} className="text-customStar" />
              {/* Display half-filled star */}
              <FontAwesomeIcon
                icon={faStarHalf}
                className="text-customStar fa-solid fa-star-half"
              />
              <p className="text-xs">990 reviews</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:h-96  lg:block">
          <img
            src={img}
            alt="Iphone and people"
            className=" min-w-[320px] h-96 md:w-full"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </>
  )
}

export default Hero
