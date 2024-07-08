import React from 'react'
import './Styles/nav.css'
import { FiSearch } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom';

function Nav() {

  
  return (
    <div className='flex items-center justify-between absolute z-10 w-[100%] h-[76px] '>
    <div className="flex items-center justify-between w-[40%]  ml-[6.25rem] max-sm:ml-4">
          <h3 className='text-md font-bold text-red-700 max-md:text-2xl'>
          <a href='/'>IFit</a>
          </h3>
          <ul className='text-white flex gap-2 max-md:hidden'>
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
      <div className="nav__list2 flex items-center justify-between  pr-[100px] max-sm:pr-4">
          <ul className='text-white flex gap-2 max-md:hidden' >
             <li className='header__list'>
             <a href='/'><FiSearch /></a>
             </li>
             <li className='header__list hover:text-red-700'>
             <Link to="/cart"><FiShoppingCart /></Link>
             </li>
             <li className='header__list'>
             <a href='/'><FiUser /></a>
             </li>
              
          </ul>
          
          <GiHamburgerMenu className='hidden max-md:block text-white'/>
     </div>
    </div>
  )
}

export default Nav