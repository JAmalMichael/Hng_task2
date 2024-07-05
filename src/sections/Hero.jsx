import React from 'react'
import './Styles/hero.css';

function Hero() {
  return (
    <div 
    className=' absolute top-[280px] z-20 left-10'>
    <div className='text-white items-center flex-col w-[1150px] h-[408px]'>
        <h1 className='hero_header text-center'>Unleash your potential with our top quality gym equipments</h1>
        <p 
        className='hero__text font-medium text-[18px] text-center w-[75%] mx-auto mb-4'>Elevate your workouts with our premium fitness gear. Shop now and transform your home gym!</p>
        <span 
        className='bg-[#BE0F24] w-[150px] h-[60px] p-2 rounded-xl ml-[510px] text-center'>Start shopping !</span>
        </div>
    </div>
  )
}

export default Hero