import React from 'react'
import './Styles/about.css';

function About() {
  return (
    <div className='about bg-white w-[1240px]'>
        <div className="w-[80%] h-[380px] mx-auto flex justify-center items-center gap-4">
            <div className='w-1/2 h-[180px]'>
            <span 
            className='bg-[#BE0F24] w-[78px] h-[30px] rounded-2xl p-1 text-white text-sm text-center'>
            What we do </span>
            <h2 className='about__header text-[36px] font-medium mb-4 mt-1'>ABOUT US</h2>
            <p className='about__text1'>
            We partner with trusted brands and manufacturers to bring you equipment that is durable
            , effective, and tailored to enhance your workout experience.
            </p>
            </div>
            <div className='w-1/2 h-[180px]'>
            <p className='about__text2 text-sm'>
            Sales of Dumbells, Kettlebells foam rollers, yoga mats, barbells, resistancebands and many more
            </p>
            </div>
        </div>
    </div>
  )
}

export default About