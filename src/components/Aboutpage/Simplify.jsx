import React from 'react'

const Simplify = () => {
  return (
    <div className="xs:min-h-96 xs:mb-20 lg:mb-0 lg:h-96 text-center flex flex-col items-center">
      <h3 className="font-bold text-4xl pb-5">
        Simplify Your Business Journey
      </h3>
      <p className="font-semibold pb-5 text-xl">
        Our Seamless Process for Ultimate Convenience
      </p>
      <ul className="text-xl list-disc text-left">
        <li className="pb-3">
          <span className="font-bold">List Your Products:</span> Easily showcase
          your offerings on our platform.
        </li>
        <li className="pb-3">
          <span className="font-bold">Receive Orders:</span> Efficiently process
          orders with our user-friendly system.
        </li>
        <li className="pb-3">
          <span className="font-bold">Fulfillment Coordination:</span>{' '}
          Seamlessly hand off orders for swift and accurate delivery
        </li>
      </ul>
    </div>
  )
}

export default Simplify
