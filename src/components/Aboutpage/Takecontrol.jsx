import React from 'react'
import iphonea from '../../assets/iphonea.svg'
import Downloadbuttons from '../Downloadbuttons'
const Takecontrol = () => {
  return (
    <div className="bg-down flex justify-between h-96 w-full my-28 rounded-md relative pt-14 px-10 overflow-hidden">
      <div className="px-10">
        <h2 className="text-white text-4xl font-bold">
          Take Control with 9nynt Shop!
        </h2>
        <p className="text-white pt-5 text-lg">
          Download the App and Transform Your Business Today!
        </p>
        <Downloadbuttons />
      </div>
      <div className="w-[50%] h-auto relative grid justify-items-end">
        <img src={iphonea} alt="Iphone" className=" w-[80%]" />
      </div>
    </div>
  )
}

export default Takecontrol
