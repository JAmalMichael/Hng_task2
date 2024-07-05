import React from 'react'
import './Styles/header.css';
import Nav from '../sections/Nav';
import Hero from '../sections/Hero';

function Header() {
  return (
    <div className='home__header h-screen w-[100%] relative'>
        <Nav />
        <Hero />
    </div>  
  )
}

export default Header