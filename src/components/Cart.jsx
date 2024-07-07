import React from 'react'
import './Styles/cart.css'
import Nav from '../sections/Nav'
import { CiSearch } from 'react-icons/ci';
import CartCard from '../sections/CartCard';
import CartTable from '../sections/CartTable';

function Cart() {
  return (
    <div className='mb-32'>
        <div className='cart__header h-[14rem]'>
            <Nav />
        </div>
        <div>
        <div className='w-[100%] h-[150px] mx-auto py-[12px] px-[16px] flex justify-between my-5 max-md:mx-0
        max-sm:flex-col max-sm:h-[90px]'>
        <div className='w-[15.6rem]'>
        <h3 className='font-semibold text-[1.5rem]'>Your shopping cart</h3>
        </div>
        <div className='relative w-1/2'>
          <CiSearch className='absolute left-2 top-[14px]'/>
          <input 
          type='text' 
          placeholder='Search' 
          className='w-[384px] h-[34px] bg-[#F8F8FA] px-[30px] py-[20px] text-sm rounded-2xl
          max-sm:w-[284px] max-sm:h-[14px]'/>
        </div>
        </div>
            
        </div>
        <div className='w-[80%]  mx-auto'>
        <CartCard 
            image={'assets/product-5.jpeg'} 
            name={'Dumbell'} price={`$75`} color={'Iron black'} size={`5kg`} />
            <hr className='my-4'/>
            </div>


        <div className='w-[80%]  mx-auto'>
        <CartCard 
            image={'assets/product-1.jpeg'} 
            name={'Dumbell'} price={`$75`} color={'Iron black'} size={`5kg`} />
             <hr className='my-4'/>
            </div>
        <div className='w-[80%]  mx-auto'>
        <CartCard 
            image={'assets/product-5.jpeg'} 
            name={'Dumbell'} price={`$75`} color={'Iron black'} size={`5kg`} />
            <hr className='my-4'/>
            </div>
        <div className='w-[80%]  mx-auto'>
        <CartCard 
            image={'assets/product-2.jpeg'} 
            name={'Dumbell'} price={`$75`} color={'Iron black'} size={`5kg`} />
            <hr className='my-4'/>
            </div>
            
        <div className='w-[80%]  mx-auto'>
        <CartCard 
            image={'assets/product-9.jpeg'} 
            name={'Dumbell'} price={`$75`} color={'Iron black'} size={`5kg`} />
            <hr className='my-4'/>
            </div>
        <div className='w-[50%] ml-[100px] mt-10'>
        <CartTable />
        </div>

    </div>
  )
}

export default Cart