import React from 'react'
import './Styles/hero.css';

function Hero() {
  return (
    <div 
    className=' absolute top-[280px] z-20 max-sm:top-[200px] max-sm:left-0'>
    <div className='text-white items-center flex-col w-[100%]'>
        <h1 className='hero_header text-center max-md:text-2xl max-sm:text-xl
        '>Unleash your potential with our top quality gym equipments</h1>
        <p 
        className='hero__text font-medium text-[18px] text-center w-[75%] mx-auto mb-4 max-sm:text-[12px]'>
        Elevate your workouts with our premium fitness gear. Shop now and transform your home gym!</p>
        <span 
        className='bg-[#BE0F24] w-[150px] p-2 rounded-xl flex mx-auto items-center 
        justify-center max-sm:text-lg'>Start shopping !</span>
        </div>
    </div>
  )
}

export default Hero