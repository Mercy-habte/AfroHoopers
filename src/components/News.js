import React from 'react'
import { FaArrowAltCircleRight, FaRegArrowAltCircleRight } from 'react-icons/fa'

const News = () => {
  return (
    <div>
        <h1 className='ml-56 font-bold text-xl mt-10 mb-5 text-primary flex gap-2'>News <FaArrowAltCircleRight/> </h1>
        <div className='columns-2 ml-56 gap-10 mb-48'>
            <div className='grids grids-rows-2'>
              <div>
              <div className='flex justify-between'>
                  <img src='https://images.unsplash.com/photo-1636100859420-bb158ea0fec7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhc2tldGJhbGwlMjBjb2FjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
                  style={{
                      width:"200px",
                      height:"120px"
                  }}/>
                  <p className='ml-5'>
  Joan Plaza Euroleague coach at Europe Basketball Academy
  <br/>
  Wednesday, June 15, 2022
  </p>

              </div>
              <p className='text-sm'>One of the most legendary Spanish coaches, Joan Plaza, 
                visited Europe Basketball Academy. Joan Plaza is a Spanish
                professional basketball coach who most recently worked for
                Real Betis of the Liga ACB. He trained Real Madrid for three years, winning one Liga ACB championship and EuroCup title. During his basketball career he was also head […]
                </p>   
                <hr/>
                
              </div>
              
              
            </div>  
            <div className='grids grids-rows-2 bg-gray-100 ml-8 mr-24'>
            <p className='text-sm mt-10 p-5'>One of the most legendary Spanish coaches, Joan Plaza, 
                visited Europe Basketball Academy. Joan Plaza is a Spanish
                professional basketball coach who most recently worked for
                Real Betis of the Liga ACB. He trained Real Madrid for three years, winning one Liga ACB championship and EuroCup title. During his basketball career he was also head […]
                </p>    
              <div className='flex justify-between pb-5'>
              <p className='pl-5'>
  Joan Plaza Euroleague coach at Europe Basketball Academy
  Wednesday, June 15, 2022
  </p>
                  <img src='https://cdn.vox-cdn.com/thumbor/uiR7m8GEEC0mGUncjAGcS4vpczU=/0x0:3167x2111/1200x800/filters:focal(1253x174:1759x680)/cdn.vox-cdn.com/uploads/chorus_image/image/70537415/1130853596.0.jpg'
                  style={{
                      width:"120px",
                      height:"80px",
                      marginRight:"20px"
                  }}/>
                 

              </div>
              
            </div>  
            
            
        </div>
    </div>
  )
}

export default News