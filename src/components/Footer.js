import React from 'react'
import logo from '../assets/logo_2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebookSquare, FaYoutubeSquare, FaTiktok, FaTelegram, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-gradient-to-r from-primary to-secondary'>
        <div className='flex pt-24'>
            <img src={logo} className='rounded-full w-16 h-16 ml-56 '/>
           <h1 className='font-bold text-gray-300 pl-5 text-xl pt-2 '>We raise players</h1> 
        </div>

    
    <div className='bg-gradient-to-r from-primary to-secondary  text-gray-400 pl-56 grid grid-cols-4 pt-16 pb-16'>
       
      
 
        <div>
            <h1 className='pb-5 text-white'>General</h1>
            <ul className='text-sm'>
                <li className='pb-2'>Programs</li>
                <li className='pb-2'>Apply</li>
                <li className='pb-2'>References</li>
                <li className='pb-2'>Gallery</li>
                <li className='pb-2'>Players</li>
                <li className='pb-2'>Contact</li>
            </ul>
        </div>
        <div>
            <h1 className='pb-5 text-white'>Connect with us</h1>
            <ul className='text-sm'>
            <li className='pb-2 flex'>
               <h1 className='text-lg pr-2'><FaFacebookSquare/></h1>Facebook</li>
<li className='pb-2 flex'>
    <h1 className='text-lg pr-2'><FaYoutubeSquare/></h1>YouTube</li>
    <a href='https://www.tiktok.com/@afrohoopers'>
    <li className='pb-2 flex'><h1 className='text-lg pr-2'><FaTiktok/></h1>Tik Tok</li>
    </a>

<li className='pb-2 flex'><h1 className='text-lg pr-2'><FaTelegram/></h1>Telegram</li>
<a href='https://www.instagram.com/afro_hoopers/'>
<li className='flex'><h1 className='text-lg pr-2'><FaInstagram/></h1>Instagram</li>
</a>



            </ul>
            
        </div>
        <div>
        <FontAwesomeIcon icon="fa-brands fa-youtube" />
            <h1 className='pb-5 text-white'>Contact details</h1>
            <ul className='pb-3 text-sm text-white'>
            <li className='pb-2'>Head Office</li>
            <li className='pb-2'>Europe Basketball Academy S.L.</li>
            <li className='pb-2'>Calle Major 6</li>
            <li className='pb-2'>Telephone</li>
            <li>Tel: +251-911-90-23-45</li>
            </ul>
            
        </div>
        
        <div></div>
        
    </div>
    <div className='pb-16 text-gray-400 pl-56 pr-56'>

   
    <hr/>
    <p className='text-gray-400 text-sm pt-5'>Copyright ©2022 www.europebasketballacademy.com | Europe Basketball Academy - All Rights Reserved</p>
    </div>

   
    
    </div>
  )
}

export default Footer