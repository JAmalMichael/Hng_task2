import React from 'react'
import './Styles/checkout.css'
import Nav from '../sections/Nav'
import { FaCircleDot } from 'react-icons/fa6'
import { IoRemoveOutline } from 'react-icons/io5'

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__header h-[14rem]'>
            <Nav />
        </div>
        <div className='checkout__body w-[80%] mx-auto mt-16 mb-3'>
          <div>
            <h1 className="text-2xl">Fill in your correct Shipping Details</h1>

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
          <form className='checkout__form w-[80%] my-[100px]'>
            <div className='w-[90%] flex gap-5 justify-between items-center mb-10'>
              <label className='w-[50%]'> <p className='font-bold'>First Name</p>
              <input type="text" placeholder='First Name' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]' />
              </label>

              <label className='w-[50%]'><p className='font-bold'>Last Name</p>
              <input type="text" placeholder='Last Name' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>
            </div>
            <div className='w-[90%] flex gap-5 justify-between items-center mb-10'>
              <label className='w-[50%]'><p className='font-bold'>Preferred Phone Number</p>
              <input type="text" placeholder='Phone Number' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>

              <label className='w-[50%]'><p className='font-bold'>Email Address</p>
              <input type="text" placeholder='Email Address' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>
            </div>
            <div className='w-[90%] flex gap-5 justify-between items-center mb-10'>
              <label className='w-[50%]'><p className='font-bold'>Street Address</p>
              <input type="text" placeholder='Street Address' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>

              <label className='w-[50%]'><p className='font-bold'>Direction (optional)</p>
              <input type="text" placeholder='Direction' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>
            </div>
            <div className='w-[90%] flex gap-5 justify-between items-center mb-10'>
              <label className='w-[50%]'><p className='font-bold'>Local Government</p>
              <input type="text" placeholder='Local Government' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>

              <label className='w-[50%]'><p className='font-bold'>State</p>
              <input type="text" placeholder='State' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>
            </div>
            <div className='w-[90%] flex  justify-between items-center mb-10'>
              <label className='w-[50%]'><p className='font-bold'>City</p>
              <input type="text" placeholder='City' className='p-3 bg-[#F8F8FA] w-[100%] rounded-xl h-[44px]'/>
              </label>

            
            </div>

            <button type='submit'
            className="bg-[#BE0F24] text-white text-lg w-[440px] h-[50px]
             flex mx-auto rounded-xl items-center justify-center">Continue</button>
          </form>
          </div>
        </div>
      </div>
  )
}

export default Checkout