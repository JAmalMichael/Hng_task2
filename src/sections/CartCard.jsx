import React, { useState } from 'react'
import './Styles/cartcard.css'
import { IoMdCheckbox } from 'react-icons/io';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

function CartCard(props) {
  const [quantity, setQuantity] = useState(0);

  const handleClickP = () => {
    setQuantity( prevQuantity => prevQuantity + 1 );
  }

 const handleClickM = () => {
  setQuantity( prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : prevQuantity) );}
  return (
    <div className='flex justify-between max-md:flex-col'>
        <div 
        className="cartcard__icon text-[#060809] text-[48px] flex items-center justify-start max-sm:flex-col
        max-sm:items-start">
            <IoMdCheckbox />
            <div className='p-2 flex items-center max-sm:flex-col max-sm:items-start'>
            <img 
            src={props.image}
            alt='product-image'
            className='w-[318px] h-[200px] object-cover mx-2'
            />
                <div className='flex flex-col justify-around '>
                    <h3 className='text-[26px] font-[600] mb-2'>{props.name}</h3>
                    <div className='flex gap-2 mb-2'>
                    <p className='text-[#88888A] text-sm mr-2'>Size:
                    <span className='font-semibold text-black'> {props.size}</span></p>
                    <p className='text-[#88888A] text-sm '>Colour:
                    <span className='font-semibold text-black'> {props.color}</span></p>
                    </div>
                        
                    <div className='w-[151.3px] h-[40.8px] flex justify-between text-[18px] '>
                    <span className='flex text-[#BE0F24] items-center justify-center gap-1'>
                    <FaPlusCircle onClick={handleClickP} className=' cursor-pointer '/>
                    <p className='font-semibold'>{quantity}</p>
                    <FaMinusCircle onClick={handleClickM} className=' cursor-pointer '/>
                    </span>
                    </div>
                 </div>
            </div>
        </div>
                <div >
                <h2 className='font-semibold text-[36px] '>{props.price}.00</h2>
               </div>

              
    </div>
  )
}

export default CartCard