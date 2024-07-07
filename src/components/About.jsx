import React from 'react'
import './Styles/about.css';

function About() {
  return (
    <div className='about bg-white w-screen max-md:w-[100%] max-sm:p-3'>
        <div className="w-[80%] h-[380px] mx-auto flex justify-center items-center gap-4 max-sm:gap-0
        max-sm:mx-0 max-sm:items-start max-sm:justify-start max-sm:h-fit ">
            <div className='w-1/2 h-[180px] max-sm:w-[100%]'>
            <span 
            className='bg-[#BE0F24] w-[78px] h-[30px] rounded-2xl p-1 text-white text-sm text-center'>
            What we do </span>
            <h2 className='about__header text-[36px] font-medium mb-4 mt-1 max-sm:text[20px]'>ABOUT US</h2>
            <p className='about__text1 max-sm:text-sm'>
            We partner with trusted brands and manufacturers to bring you equipment that is durable
            , effective, and tailored to enhance your workout experience.
            </p>
            </div>
            <div className='w-1/2 h-[180px] max-md:hidden'>
            <p className='about__text2 text-sm'>
            Sales of Dumbells, Kettlebells foam rollers, yoga mats, barbells, resistancebands and many more
            </p>
            </div>
        </div>
    </div>
  )
}

export default About