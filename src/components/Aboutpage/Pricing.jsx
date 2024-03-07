import React from 'react'

const Pricing = () => {
  return (
    <div className="h-auto flex flex-col items-center pt-10 py-20">
      <p className="py-5">Pricing Plans</p>
      <h3 className="text-4xl font-bold">
        Flexible Solutions, Tailored for You
      </h3>
      <div className="flex w-full justify-between my-10 ">
        <div className="bg-price h-[35rem] w-[30%] rounded-xl"></div>
        <div className="bg-price h-[35rem] w-[30%] rounded-xl"></div>
        <div className="bg-price h-[35rem] w-[30%] rounded-xl"></div>
      </div>
    </div>
  )
}

export default Pricing
