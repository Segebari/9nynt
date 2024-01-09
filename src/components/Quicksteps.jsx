import React from 'react'
import img from '../assets/steps.svg'; // Adjust the path accordingly

const Quicksteps = () => {
  return (
    <>
      <div className='md:mt-40 xs:mt-[45rem] xs:mb-48 flex md:flex-row xs:flex-col pb-20'>
 
        <div className='md:w-1/2 h-96'>
            <img src={img} alt="x" className="h-96 md:w-auto" style={{ objectFit: 'contain' }} />
        </div>

        <div className='md:w-1/2 h-96 xs:pt-10'>
            <h3 className='font-bold text-3xl md:text-left  xs:text-center pb-5'>
                Quick Steps to Use 9nynt Shop
            </h3>

            <ul className='list-disc xs:pl-6'>
                <li>
                    <h4 className='font-bold text-lg'>
                        Download Apps
                    </h4>
                    <p className='text-xs pt-2'>
                        To use the 9nynt shop, download the app from our website or through the App store and Google play store.
                    </p>
                </li>

                <li>
                    <h4 className='font-bold text-lg'>
                        List Your Products
                    </h4>
                    <p className='text-xs pt-2'>
                        Unlock growth and visibility by showcasing your offerings with the 9nynt shop. Tap into a broader audience, attract new customers, and streamline transactions for accelerated success.
                    </p>
                </li>

                <li>
                    <h4 className='font-bold text-lg'>
                        Customers Pre-BookDownload Apps
                    </h4>
                    <p className='text-xs pt-2'>
                        Anticipate trends, exceed customers expectation and drive sales to new heights with our pre-booking feature. 
                    </p>
                </li>

                <li>
                    <h4 className='font-bold text-lg'>
                        Streamlined Orders and Payment
                    </h4>
                    <p className='text-xs pt-2'>
                        9nynt shop is design to ensure a smooth and streamlined process, allowing you to focus on what matters - growing your business.
                    </p>
                </li>

            </ul>
        </div>

      </div>
    </>
  )
}

export default Quicksteps
