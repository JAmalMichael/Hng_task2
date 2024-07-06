import React from 'react'
import './Styles/footersection.css';

function FooterSection() {
  return (
    <div className='footer__section w-[100%] relative h-[544px] mx-auto'>
        <div className='footer__section-text z-20 absolute text-white w-[392px] top-[154px] left-[100px]'>
            <h2 className='font-bold text-lg mb-2'>Having an issue with your purchase?</h2>
            <p className='mb-4'>Are you having issues with a previous or a recent order.
             Contact us now and we will respond immediately</p>
             <span 
            className='bg-[#BE0F24] w-[78px] rounded-xl p-2 text-white text-sm font-semibold'>
            Contact Us 
            </span>
        </div>
    </div>
  )
}

export default FooterSection