import React from 'react'
import './Styles/header.css';
import Nav from '../sections/Nav';

function Header() {
  return (
    <div className='home__header h-screen w-[100%] relative'>
        <Nav />
    </div>  
  )
}

export default Header