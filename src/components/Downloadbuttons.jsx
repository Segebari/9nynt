import React from 'react'
import google from '../assets/googleplay.svg'
import apple from '../assets/apple.svg'

const Downloadbuttons = () => {
  return (
    <div className="flex xs:flex-col md:flex-row xs:items-center pt-5 gap-4 xs:justify-center md:justify-start">
      <div className="flex bg-black w-32 h-10 rounded-md pl-2 py-1 items-center gap-2 justify-start">
        <img src={apple} alt="Google playstore Icon" className="h-6" />
        <p className="text-white text-[0.6rem] leading-tight">
          Download on the <br /> Apple store
        </p>
      </div>
      <div className="flex bg-black w-32 h-10 rounded-md pl-2 py-1 items-center gap-2 justify-start">
        <img src={google} alt="Apple Icon" className="h-6" />
        <p className="text-white text-[0.6rem] leading-tight">
          Get it on <br /> Google Play
        </p>
      </div>
    </div>
  )
}

export default Downloadbuttons
