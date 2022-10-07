import React from 'react'
import logo from '../assets/logo_2.jpg'

const NavBar = () => {
  return (
    <div>
        <nav className='h-16 bg-primary bg-opacity-95 sticky top-0 text-white' style={{position:"fixed", zIndex:"1", width:"100%" }}>
            <div className='flex justify-between pt-5 '>
                <a href='/' className='pl-5 pr-5 flex'>
                <img src={logo} class="w-14 h-14 absolute top-2 rounded-full " alt=""/>
                <h1 className='text-xs  pl-3 pt-2 font-bold absolute left-16 top-1 font-mono'>AFRO <br/> HOOPERS <br/> ACADEMY</h1>
                </a>
            <ul className='flex text-sm'>
                <li>
                   <a href='#' className='pl-5 hover:text-blue-900 '>Academy overview</a> 
                    
                </li>
                <li>
                <a href='#' className='pl-5 hover:text-blue-900'>Programs</a> 
                </li>
                <li>
                <a href='/register' className='pl-5 hover:text-blue-900'>Apply</a> 
                </li>
                <li>
                <a href='#' className='pl-5 hover:text-blue-900'>References</a> 
                </li>
                <li>
                <a href='#' className='pl-5 hover:text-blue-900'>Gallery</a> 
                </li>
                <li>
                <a href='#' className='pl-5 hover:text-blue-900'>Players</a> 
                </li>
                <li>
                <a href='#' className='pl-5 hover:text-blue-900'>News</a> 
                </li>
                <li>
                <a href='#' className='pl-5 pr-5 hover:text-blue-900'>Contact</a> 
                </li>
            </ul>
            </div>
          
        </nav>
    </div>
    
  )
}

export default NavBar