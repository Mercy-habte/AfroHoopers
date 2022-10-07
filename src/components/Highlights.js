import React from 'react'

const Highlights = () => {
  return (
<div>
       
       <div class="grid grid-cols-7 gap-y-0 ">
  <div class="col-span-2  text-white pl-16 bg-gradient-to-r from-secondary to-primary  "><h1 className=' font-bold text-xl pt-16 pb-10 pl-16'>Highlights</h1> Most recent events at Europe <br/>Basketball Academy caught through the eye of the camera.</div>
  <div class="col-span-5">
  <div class="grid grid-rows-2 grid-flow-col ">
  <div>
    <div className='grid grid-cols-3'>
      <div className='col-spna-1 h-100 w-100 relative '>
        <img  src='https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80' 
        className="bg-gradient-to-r from-cyan-500 to-blue-500"
        style={{"height":"200px" , "width":"350px", zIndex:"1" }}/>
        <p className='absolute bottom-8 left-5 text-sm text-white'>This is an image of a basketball</p>
      </div>
      <div className='col-spna-1 w-100 h-100 relative'>
      <img src='https://images.unsplash.com/photo-1505666287802-931dc83948e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0YmFsbCUyMHBsYXllcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' style={{"height":"200px" , "width":"350px" }}/>
      <p className='absolute bottom-8 left-5 text-sm text-white'>This is an image of a basketball</p>
      </div>
      <div className='col-spna-1 relative'>
      <img src='https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFza2V0YmFsbCUyMHBsYXllcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60' style={{"height":"200px" , "width":"350px" }}/>
      <p className='absolute bottom-8 left-5 text-sm text-white'>This is an image of a basketball</p>
      </div>
    </div>
  </div>
  
  
  <div>
  <div className='grid grid-cols-3'>
      <div className='col-spna-1 relative'>
      <img src='https://images.unsplash.com/photo-1484634749340-ada5df46442b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhc2tldGJhbGwlMjBwbGF5ZXJzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60' style={{"height":"200px" , "width":"350px" }}/>
      <p className='absolute bottom-8 left-5 text-sm text-white'>This is an image of a basketball</p>
      </div>
      <div className='col-spna-1 relative'>
      <img src='https://images.unsplash.com/flagged/photo-1565106305412-e8cab493e15e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJhc2tldGJhbGwlMjBwbGF5ZXJzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60' style={{"height":"200px" , "width":"350px" }}/>
      <p className='absolute bottom-8 left-5 text-sm text-white'>This is an image of a basketball</p>
      </div>
      <div className='col-spna-1 relative'>
      <img src='https://images.unsplash.com/photo-1574142233428-93b8c48af5ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhc2tldGJhbGwlMjBwbGF5ZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60' style={{"height":"200px" , "width":"350px" }}/>
      <p className='absolute bottom-8 left-5 text-sm text-white'>This is an image of a basketball</p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
<div className='pt-16 pb-16 '>
  <h1 className='text-center text-3xl text-primary'>Reserve Your Spot At The Academy Now!</h1>
    <div className='flex items-center justify-center mt-5'>
      <a href='/register'>
      <button className='pl-16 pr-16 pt-3 pb-3  border border-primary hover:bg-gradient-to-r from-secondary to-secondary hover:text-white text-sm'>Apply</button>
      </a>
    
    </div>
    
</div>
   
   </div>
  )
}

export default Highlights