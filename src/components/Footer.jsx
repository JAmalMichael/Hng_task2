import React from 'react'
import './Styles/footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div className='h-[365px] bg-[#060809] text-white relative max-sm:w-screen'>
        <div 
        className=' flex items-center mx-auto p-2 gap-20
        w-[80%] absolute left-[100px] top-[112px] mb-4 max-sm:mx-0 max-sm:w-[100%] max-sm:left-0'>
        <div className=' text-white w-[293px] h-[146px] '>
        <h2 className='font-bold text-[35px] mb-2 max-sm:text-[20px]'>Ifit</h2>
        <p className='mb-4 text-[1rem] max-sm:hidden'>The advantage of hiring a workspace with 
            us is that givees you comfortable service and all-around 
            facilities.</p>
        
    </div>
            <div  className='footer__list'>
                <ul>
                    <li className='mb-4 text-[17px]'>Follow Us</li>
                    <li className='text-[13px] flex items-center gap-1 mb-1'><FaFacebookF/> Facebook</li>
                    <li className='text-[13px] flex items-center gap-1 mb-1'><FaTwitter /> Twitter</li>
                    <li className='text-[13px] flex items-center gap-1 mb-1'><FaInstagram /> Instagram</li>
                </ul>
            </div> 
        </div>
        <div className='absolute flex justify-between w-[80%] left-[100px] text-[11px] bottom-0 
        max-sm:w-100% max-sm:left-2 max-sm:justify-evenly max-sm:text-[10px]'>
            <div>
                <p>Copyright &copy; MICHAEL IGBAENSI 2024</p>
            </div>
            <div className='flex gap-8 max-sm:gap-1'>
                <p>Terms and Condition</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer