import React from 'react'
import './Styles/card.css';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

function Card(props) {
  return (
    <div className='w-[400px] bg-[#F8F8FA] py-[12px] px-[8px]'>
    <div className='mb-2'>
    <img src={props.image} alt='product-image' className='w-[384px] h-[340px] object-cover'/>
    </div>
    <div className='flex justify-between mb-2'>
        <p className=' text-sm'>5kg Dumbell</p>
        <p className='font-bold text-[16px]'>{props.price}</p>
    </div>
    <div className='flex justify-between text-sm mb-2'>
        <p>⭐⭐⭐⭐⭐ </p>
        <span className='flex text-[#BE0F24] items-center justify-center gap-1'>
        <FaPlusCircle />
        <p className='font-semibold'>0</p>
        <FaMinusCircle />
        </span>
    </div>
    <div className='flex justify-between text-sm mb-2'>
        <span 
        className='bg-[#BE0F24] w-[100px] rounded-xl p-2 text-white 
        text-s text-center'>
        {props.text}
        </span>
    </div>
    
    </div>
  )
}

export default Card