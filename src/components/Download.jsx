import React from 'react'
import img from '../assets/dimg.svg'; 
import google from '../assets/googleplay.svg';
import apple from '../assets/apple.svg';
import logoa from '../assets/9nynt-white.svg';

const Download = () => {
  return (
    <>
      <div className='bg-down h-96 w-full my-28 rounded-md relative'>
        <img src={img} alt="Iphone and people" className="dn-phone  absolute" style={{ objectFit: 'cover' }} />

        <div className='flex pt-32 pl-20'>

             <div className='w-1/2'>

             </div>

             <div className=' text-white w-1/2'>
                <h3 className='text-white text-4xl font-bold pb-2'>
                    Download 
                </h3>
                <img src={logoa} alt="logo" className="h-10 w-30 mb-2" />

                <h3 className='text-white text-4xl font-bold'> 
                Now !
                </h3>
                <p className='text-xs pt-3'>
                    Our platform is created to make shop-management <br />
                    straightforward, facilitate smooth transactions, and  <br />
                    contribute to the growth of community networks.
                </p>

                <div className="flex pt-5 gap-4">
                    <div className='flex bg-black w-28 h-8 rounded-md pl-2 py-1 items-center gap-2 justify-start border border-white border-solid'>
                        <img src={apple} alt="Google playstore Icon" className="h-4"/>
                        <p className='text-white text-xxxs leading-tight'>
                            Download on the <br /> Apple store
                        </p>
                    </div>

                    <div className='flex bg-black w-28 h-8 rounded-md pl-2 py-1 items-center gap-2 justify-start border border-white border-solid'>
                        <img src={google} alt="Apple Icon" className="h-4"/>
                        <p className='text-white text-xxxs leading-tight'>
                            Get it on <br /> Google Play
                        </p>
                    </div>
                </div>


            </div>
        </div>
        
      </div>
    </>
  )
}

export default Download
