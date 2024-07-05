import React from 'react'
import './Styles/nav.css'
import { FiSearch } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';

function Nav() {

  //TODO: CHANGE CONTACT TO CHECKOUT
  return (
    <div className='flex items-center justify-between absolute z-10 w-[100%] h-[76px] '>
    <div className="flex items-center justify-between w-[40%]  pl-[100px]">
          <h3 className='text-md font-bold text-red-700 '>
          <a href='/'>IFit</a>
          </h3>
          <ul className='text-white flex gap-2 '>
              <li className='header__list'>
                <a href='/'>Home</a>
              </li>
              <li className='header__list'>
                <a href='/'>Product</a>
              </li>
              <li className='header__list'>
                <a href='/'>Contact</a>
              </li>
          </ul>
    </div>
     <div className="flex items-center justify-between  pr-[100px]">
          <ul className='text-white flex gap-2' >
             <li className='header__list'>
             <a href='/'><FiSearch /></a>
             </li>
             <li className='header__list'>
             <a href='/'><FiShoppingCart /></a>
             </li>
             <li className='header__list'>
             <a href='/'><FiUser /></a>
             </li>
              
          </ul>
     </div>
    </div>
  )
}

export default Nav