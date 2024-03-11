import React from 'react'
import checkicon from '../../assets/check.svg'

const Pricing = () => {
  return (
    <div className="h-auto flex flex-col items-center pt-10 py-20">
      <p className="py-5">Pricing Plans</p>
      <h3 className="text-4xl font-bold text-center">
        Flexible Solutions, Tailored for You
      </h3>
      <div className="flex xs:flex-col lg:flex-row w-full justify-between my-10 ">
        <div className="bg-price h-[35rem] lg:w-[30%] rounded-xl text-white p-5 xs:mb-10 lg:mb-0">
          <h4 className="text-2xl font-semibold pb-3">BASIC</h4>
          <p>
            Ideal for businesses with dynamic offerings or frequent promotions,
            with flexibility of managing your storefront and engaging customers
            on a weekly basis. Perfect for testing new products and keeping your
            inventory fresh.
          </p>
          <div></div>
          <h4 className="text-4xl font-semibold pt-5 pb-2">₦1900</h4>
          <p className="text-xs">Per member, Per Month</p>
          <div className="pb-3"></div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm">One Store & Analytics </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm">
              Manage Product, Order, Discounts & Customers
            </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Upload up to 15 Products </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Store link / Url </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Search Engine Optimization </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Access to 9nynt Wallet </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Bank Account </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> SMS Marketing </p>
          </div>

          <button className="bg-white text-black w-[100%] h-[2.5rem] my-5 rounded-lg font-bold text-xl">
            Start free 14-day Trial
          </button>
        </div>
        <div className="bg-price h-[35rem] lg:w-[30%] rounded-xl text-white p-5 xs:mb-10 lg:mb-0">
          <h4 className="text-2xl font-semibold pb-3">PROFESSIONAL</h4>
          <p>
            Benefit from advanced features, marketing tools, and an extended
            reach to attract a broader customer base. The monthly subscription
            ensures continuous business enhancement & assist.
          </p>
          <div></div>
          <h4 className="text-4xl font-semibold pt-5 pb-2">₦3900</h4>
          <p className="text-xs">Per member, Per Month</p>
          <div className="pb-3"></div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm">Everything in BASIC</p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm">Customizable Store Link / Url</p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Upload up to 150 Products </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Up to 20 Stores in one Account </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Up to 50 Store Managers & team </p>
          </div>

          <button className="bg-white text-black w-[100%] h-[2.5rem] my-5 rounded-lg font-bold text-xl">
            Start free 7-day Trial
          </button>
        </div>
        <div className="bg-price h-[35rem] lg:w-[30%] rounded-xl text-white p-5 lg:mb-0">
          <h4 className="text-2xl font-semibold pb-3">ADVANCED</h4>
          <p>
            Unlock the full potential of 9nynt Shop with a yearly subscription.
            Ideal for committed entrepreneurs seeking long-term success. Enjoy
            cost savings, exclusive features, and priority support. This plan
            offers stability and the tools you need for sustained business
            excellence.
          </p>
          <div></div>
          <h4 className="text-4xl font-semibold pt-5 pb-2">₦10,000</h4>
          <p className="text-xs">Per member, Per Month</p>
          <div className="pb-3"></div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm">Everything in BASIC</p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm">Everything in PROFESSIONAL</p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Upload Unlimited Products </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Unlimited Stores in one Account </p>
          </div>
          <div className="flex gap-2">
            <img src={checkicon} alt="check icon" className="" />
            <p className="text-sm"> Unlimited Store Managers & team </p>
          </div>

          <button className="bg-white text-black w-[100%] h-[2.5rem] my-5 rounded-lg font-bold text-xl">
            Start free 7-day Trial
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
