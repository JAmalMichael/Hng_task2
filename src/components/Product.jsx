import React from 'react'
import './Styles/product.css';
import { GiSettingsKnobs } from 'react-icons/gi';
import { CiSearch } from 'react-icons/ci';
import { GoDotFill } from 'react-icons/go';
import { GoArrowUpRight } from 'react-icons/go';
import Card from '../sections/Card';

function Product() {
  return (
    <div className=' w-[1240px] bg-white'>
      <div className='w-[80%] h-[150px] mx-auto py-[12px] px[16px] flex justify-between'>
          <div className='w-[250px] h-[126px]'>
          <h3 className='font-semibold text-[26px]'>Our Products</h3>
          <div className='flex gap-4'>
            <span className='text-[#BE0F24] bg-[#F8F8FA] px-2 py-1'>
              <p 
              className='font-semibold'>All
               </p>
               <GoDotFill className='text-sm'/>
               </span>
              <p className='bg-[#F8F8FA] px-2 py-1'>Bestseller</p>
              <p className='bg-[#F8F8FA] px-2 py-1'>Latest</p>
          </div>
          </div>
          <div className='relative w-1/2'>
            <CiSearch className='absolute left-2 top-[14px]'/>
            <input 
            type='text' 
            placeholder='Search' 
            className='w-[484px] h-[34px] bg-[#F8F8FA] px-[30px] py-[20px] text-sm rounded-2xl'/>
            <GiSettingsKnobs className='absolute right-4 top-[14px] ' />
          </div>
      </div>
      <div className='w-[80%] mx-auto py-[12px] px[16px] mb-4'>
          <div className='w-[100%] flex justify-end mb-4'>
          <span 
          className='bg-[#BE0F24] w-[78px] h-[30px] rounded-2xl p-1 text-white 
          text-sm text-center flex'>
          View All <GoArrowUpRight className='text-lg'/>
          </span>
          </div>
          <div className='w-[100%]'>
            <div className='flex gap-2  mb-6'>
            <Card image={'assets/product-1.jpeg'} price={`$75`} text={'Add to cart'}/>
            <Card image={'assets/product-2.jpeg'} price={`$75`} text={'Add to cart'}/>
            <Card image={'assets/product-3.jpeg'} price={`$75`} text={'Add to cart'}/>
            </div>
            <div className='flex gap-2 mb-6'>
            <Card image={'assets/product-4.jpeg'} price={`$75`} text={'Add to cart'}/>
            <Card image={'assets/product-5.jpeg'} price={`$75`} text={'Add to cart'}/>
            <Card image={'assets/product-6.jpeg'} price={`$75`} text={'Add to cart'}/>
            </div>
            <div className='flex gap-2 mb-6'>
            <Card image={'assets/product-7.jpeg'} price={`$75`} text={'Add to cart'}/>
            <Card image={'assets/product-8.jpeg'} price={`$75`} text={'Add to cart'}/>
            <Card image={'assets/product-9.jpeg'} price={`$75`} text={'Add to cart'}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Product