import React from 'react'

const Benefits = ({ num, title, description }) => {
  return (
    <div className="mt-10 py-10 bg-gray-100 xs:w-full lg:w-[27%] px-10 rounded-2xl">
      <p className="bg-black text-white w-7 grid justify-center rounded text-sm py-[0.2rem] mb-5">
        {num}
      </p>
      <h2 className="pb-5 font-bold text-xl">{title}</h2>
      <p className="pb-5">{description}</p>
    </div>
  )
}

export default Benefits
