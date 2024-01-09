import React from 'react'

const Features = () => {
  return (
    <>

      <div className='container bg-black text-white h-fh w-full my-20 bg-ft md:px-14 xs:px-3 pt-5 rounded-md '>
            <h2 className='md:text-4xl xs:text-xl xs:text-center md:text-left font-bold'>
                9nynt put your business <br /> at your fingertips.
            </h2>

            <div className="md:flex gap-5">
                <div className='bg-white basis-1/3 md:w-80  md:h-96 xs:h-80 rounded-md mt-5 drop-shadow p-5 ft1'>

                    <h3 className='text-black font-bold inter-font text-lg'>
                        Easy Analytics Interface <br /> & It's Powerful Tools
                    </h3>
                    <p className='text-xs text-black pt-1'>
                    Access user-friendly analytics on 9nynt shop with a simple interface and powerful tools for effortless monitoring and decision-making.
                    </p>

                </div>
                <div className='bg-white basis-1/3 md:w-80  md:h-96 xs:h-80 rounded-md mt-5 drop-shadow p-5 ft2'>

                    <h3 className='text-black font-bold inter-font text-lg'>
                        Seamless Experience
                    </h3>
                    <p className='text-xs text-black pt-1'>
                        Enjoy a seamless experience at 9nynt shop with convenient payment options, including pay-as-you-go and instalment features for added flexibility.
                    </p>

                </div>
                <div className='bg-white basis-1/3 md:w-80 xs:min-h-96 md:h-96 xs:h-80 rounded-md mt-5 drop-shadow p-5 ft3 md:pt-[16.5rem] xs:pt-48'>

                    <h3 className='text-black font-bold inter-font text-lg'>
                        Elevate Sales and shopping intelligence with 9nynt shop
                    </h3>
                    <p className='text-xs  text-black pt-1'>
                        Streamlines the ordering process for businesses, reducing customer wait times and assisting vendors in managing their operations more efficiently.
                    </p>

                </div>
            </div>
      </div>
    </>
  )
}

export default Features
