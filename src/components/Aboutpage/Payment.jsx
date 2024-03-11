import React from 'react'
import visa from '../../assets/visa.svg'
import master from '../../assets/mastercard.svg'
import pay from '../../assets/9nynt-pay.svg'
import verve from '../../assets/verve.svg'

const Payment = () => {
  return (
    <div className="flex flex-col items-center xs:mb-10 lg:mb-0">
      <h3 className="text-4xl text-center">Payment Methods</h3>
      <div className="flex my-10 gap-3">
        <img src={visa} alt="logo" className="h-10 w-30 mb-2" />
        <img src={master} alt="logo" className="h-10 w-30 mb-2" />
        <img src={pay} alt="logo" className="h-10 w-30 mb-2" />
        <img src={verve} alt="logo" className="h-10 w-30 mb-2" />
      </div>
      <p className="text-2xl text-gray-500 text-center">
        We accept Visa, Mastercard and Verve
      </p>
    </div>
  )
}

export default Payment
