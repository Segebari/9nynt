import React from 'react'
import icona from '../../assets/iii.svg'
import iconb from '../../assets/ii.svg'
import iconc from '../../assets/i.svg'

const Work = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center py-10">
      <h3 className="font-bold text-4xl pb-10">We Work With Founders Who;</h3>
      <div className="flex justify-center gap-10 h-96 bg-work w-full rounded-lg">
        <div className="w-[30%] flex flex-col items-center p-10 text-center justify-center">
          <img src={icona} alt="icon" className="h-8 w-8 mb-5" />
          <h4 className="text-white text-xl font-bold pb-5">
            Customer Engagement Champions
          </h4>
          <p className="text-white text-xl">
            Founders prioritizing customer engagement and satisfaction
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center p-10 text-center justify-center">
          <img src={iconb} alt="icon" className="h-8 w-8 mb-5" />
          <h4 className="text-white text-xl font-bold pb-5">
            Efficiency Enthusiasts Looking to Optimize Operations
          </h4>
          <p className="text-white text-xl">
            Founders focused on efficiency and operational optimization
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center p-10 text-center justify-center">
          <img src={iconc} alt="icon" className="h-8 w-8 mb-5" />
          <h4 className="text-white text-xl font-bold pb-5">
            Innovators Seeking Market Expansion
          </h4>
          <p className="text-white text-xl">
            Visionary founders eager to expand their market presence and reach a
            broader audience
          </p>
        </div>
      </div>
      <p className="text-xl text-center px-48 pt-10">
        Whether you're aiming for market expansion, increased efficiency, or
        enhanced customer engagement, 9nynt Shop collaborates with founders to
        achieve their unique business objectives.
      </p>
    </div>
  )
}

export default Work
