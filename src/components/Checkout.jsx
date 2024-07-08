import React from 'react'
import './Styles/checkout.css'
import Nav from '../sections/Nav'
import { FaCircleDot } from 'react-icons/fa6'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__header h-[14rem]'>
            <Nav className="checkout__header-nav"/>
        </div>
        <div className='checkout__body w-[80%] mx-auto mt-16 mb-3 max-sm:mt-4 max-sm:w-[100%] max-sm:px-4'>
          <div>
            <h1 className="text-2xl max-sm:text-[16px] max-sm:font-semibold">Fill in your correct Shipping Details</h1>

            <div className='flex text-[#BFBFBF] items-center mt-6'>
            <div className='text-[#BE0F24] '>
              <FaCircleDot className='mx-auto'/>
              <p className='text-sm '>Shipping</p>
            </div>
              <hr className="w-[80px] mb-4 "/>
            <div>
              <FaCircleDot className='mx-auto'/>
              <p className='text-sm '>Shipping</p>
            </div>
              <hr className="w-[80px] mb-4 "/>
            <div>
              <FaCircleDot className='mx-auto'/>
              <p className='text-sm '>Confirmation</p>
            </div>
            </div>
          </div>
          <div>
          <form className='checkout__form w-[80%] my-[100px] max-sm:my-[20px]'>
            <div 
            className='w-[90%] flex gap-5 justify-between items-center mb-10 max-sm:flex-col max-sm:gap-4 max-sm:mb-4'>
              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'> <p className='font-bold max-sm:font-semibold'>First Name</p>
              <input type="text" placeholder='First Name' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]' />
              </label>

              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'><p className='font-bold max-sm:font-semibold'>Last Name</p>
              <input type="text" placeholder='Last Name' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>
            </div>
            <div className='w-[90%] flex gap-5 justify-between items-center mb-10 max-sm:flex-col max-sm:gap-4 max-sm:mb-4'>
              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'><p className='font-bold max-sm:font-semibold'>Preferred Phone Number</p>
              <input type="text" placeholder='Phone Number' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>

              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'><p className='font-bold max-sm:font-semibold'>Email Address</p>
              <input type="text" placeholder='Email Address' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>
            </div>
            <div className='w-[90%] flex gap-5 justify-between items-center mb-10 max-sm:flex-col max-sm:gap-4 max-sm:mb-4'>
              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'><p className='font-bold max-sm:font-semibold'>Street Address</p>
              <input type="text" placeholder='Street Address' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>

              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'><p className='font-bold max-sm:font-semibold'>Direction (optional)</p>
              <input type="text" placeholder='Direction' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>
            </div>
            <div className='w-[90%] flex gap-5 justify-between items-center mb-10 max-sm:flex-col max-sm:gap-4 max-sm:mb-4'>
              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'><p className='font-bold max-sm:font-semibold'>Local Government</p>
              <input type="text" placeholder='Local Government' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>

              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'><p className='font-bold max-sm:font-semibold'>State</p>
              <input type="text" placeholder='State' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>
            </div>
            <div className='w-[90%] flex  justify-between items-center mb-10 max-sm:flex-col max-sm:gap-4 max-sm:mb-4'>
              <label className='w-[50%] max-[320px]:w-[100%] max-[420px]:w-[100%]'><p className='font-bold max-sm:font-semibold'>City</p>
              <input type="text" placeholder='City' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>

            </div>
            <div className='flex gap-4 justify-center'>
            <button type='submit'
            className="bg-[#BE0F24] text-white text-lg w-[220px] h-[50px]
             flex rounded-xl items-center justify-center max-sm:mx-0 max-sm:text-sm max-sm:w-[220px]">Continue</button>
            <button type='submit'
            className="border border-[#BE0F24] text-[#BE0F24] text-lg w-[220px] h-[50px]
             flex rounded-xl items-center justify-center max-sm:mx-0 max-sm:text-sm max-sm:w-[220px]">Cancel</button>
             </div>
             </form>
          </div>
        </div>
      </div>
  )
}

export default Checkout