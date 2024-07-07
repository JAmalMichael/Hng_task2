import React, { useState } from 'react'
import './Styles/card.css';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Card(props) {
    const [quantity, setQuantity] = useState('0');

    const handleClickP = () => {
      setQuantity( prevQuantity => prevQuantity + 1 );
    }

   const handleClickM = () => {
    setQuantity( prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : prevQuantity) );}
  return (
    <div className='w-[400px] bg-[#F8F8FA] py-[12px] px-[8px] max-sm:w-[250px]'>
    <div className='mb-2'>
    <img src={props.image} alt='product-image' className='w-[384px] h-[340px] object-cover max-sm:w-[240px]'/>
    </div>
    <div className='flex justify-between mb-2'>
        <p className=' text-sm'>5kg Dumbell</p>
        <p className='font-bold text-[16px]'>{props.price}</p>
    </div>
    <div className='flex justify-between text-sm mb-2'>
        <p>⭐⭐⭐⭐⭐ </p>
        <span className='flex text-[#BE0F24] items-center justify-center gap-1'>
        <FaPlusCircle onClick={handleClickP} className=' cursor-pointer '/>
        <p className='font-semibold'>{quantity}</p>
        <FaMinusCircle onClick={handleClickM} className=' cursor-pointer '/>
        </span>
    </div>
    <div className='flex justify-between text-sm mb-2'>
    <Link to="/cart">
        <span 
        className='bg-[#BE0F24] w-[100px] rounded-xl p-2 text-white 
        text-s text-center mt-2'>
        {props.text}
        </span>
        </Link>
    </div>
    
    </div>
  )
}

export default Card