import React from 'react'
import './Styles/carttable.css'
import { Link } from 'react-router-dom'

function CartTable() {
  return (
    <div className='w-[100%] flex flex-col justify-around text-2xl max-sm:text-sm'>
        <ul className='p-2 font-semibold '>
            <li className='flex items-center justify-between mb-6'>
                <p>Dumbell(5kg)</p>
                <p>$75.00</p>
            </li>
            <li className='flex items-center justify-between mb-6'>
                <p>Kettle Bell</p>
                <p>$95.00</p>
             </li>
            <li className='flex items-center justify-between mb-6'>
                <p>Foam roller</p>
                <p>$35.00</p>
            </li>
            <li className='flex items-center justify-between mb-6'>
                <p>Weight plates (3sets)</p>
                <p>$90.00</p>
             </li>
            <li className='flex items-center justify-between mb-6'>
                <p>Jump ropes</p>
                <p>$25.00</p>
        
            </li>      
            <hr className="my-2"/>
        </ul>

        <div className='font-semibold mb-3 flex flex-col  w-[100%]'>
        <div className='flex justify-between'>
        <p>Sales Tax</p>
        <p>$15.00</p>
        </div>
        <hr className="my-2"/>
        </div>

        <div className='font-bold mb-4 flex justify-between w-[100%]'>
            <p>Total</p>
            <p>$335.00</p>
            
        </div>

        <Link to="/checkout">
        <span 
        className='bg-[#BE0F24] w-[100%] rounded-xl 
        text-center text-white text-[14px] flex items-center justify-self-center py-2'>
        <p className='mx-auto'>Check Out</p>
        </span>
        </Link>
    </div>
  )
}

export default CartTable