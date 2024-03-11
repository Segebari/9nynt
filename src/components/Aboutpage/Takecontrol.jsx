import React from 'react'
import iphonea from '../../assets/iphonea.svg'
import Downloadbuttons from '../Downloadbuttons'
const Takecontrol = () => {
  return (
    <div className="bg-down flex justify-between h-96 w-full my-28 rounded-md relative pt-14 px-10 overflow-hidden xs:text-center lg:text-left">
      <div className="xs:px-auto lg:px-10">
        <h2 className="text-white xs:text-4xl lg:text-5xl font-bold">
          Take Control with 9nynt Shop!
        </h2>
        <p className="text-white pt-5 text-xl">
          Download the App and Transform Your Business Today!
        </p>
        <Downloadbuttons />
      </div>
      <div className="w-[50%] h-auto relative grid justify-items-end xs:hidden lg:block">
        <img src={iphonea} alt="Iphone" className=" w-[100%]" />
      </div>
    </div>
  )
}

export default Takecontrol
