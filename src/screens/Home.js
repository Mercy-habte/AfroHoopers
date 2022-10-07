import React from 'react'
import NavBar from '../components/NavBar'
import BodyOfHome from '../components/BodyOfHome'
import Facts from '../components/Facts'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'
import intro from '../components/video/Intro_Video.mp4'
import News from '../components/News'
import { FaPlayCircle } from 'react-icons/fa'


const Home= () => {
  return (
    <div>
         <div className='w-100 h-128  text-white bg-cover' 
     
    >
        <NavBar/>
        <video autoPlay loop muted
        className=''
        
        style={{
          width:"100%" ,
          height:"100%", 
          position:"absolute", 
          left:"50%", 
          top:"35%", 
          objectFit:"cover", 
          zIndex:"-1", 
          transform:"translate(-50%,-50%)"
          }}>
           
       
          <source src={intro} type="video/mp4" ></source>
        </video>
        <h1 className='text-center text-7xl font-bold mt-48'>We Raise Players. </h1>
        <div className='flex justify-center'>
        <button className='text-sm mt-36 border  pr-10 pl-10 pt-5 pb-3  bg-gradient-to-r from-primary to-secondary '>see our program </button>
        
        </div>

     
      
    </div>
     <BodyOfHome/>
     <Facts/>
     <News/>
     <Highlights/>
     <Footer/>

    </div>
   
    
  )
}

export default Home