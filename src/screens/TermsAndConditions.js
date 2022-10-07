import React from 'react'
import logo from '../assets/logo_2.jpg'

const TermsAndConditions = () => {
  return (
    <div className='ml-72 mr-72 '>
        <div className='grid grid-cols-2 gap-1 pt-12 '>
        <img src={logo} className='w-36 h-36'></img>
        <h1 className='text-center font-bold text-md pt-10 '>AFRO HOOPERS SPORT CLUB 
        <br/>
        BASKETBALL TRAINING CONTRACT, TERMS AND CONDITIONS</h1>
    <div>

    </div>
        </div>
        <div>
            <p className='pt-5 pb-5 font-sarif'>
            Congratulations on your decision to take your game to the next level! Your goals are of great importance to me and based off of over a decade of post-high school basketball experience, we will achieve what you set out to accomplish most effectively if you can maintain one very important variable: consistency. Working hard in our sessions and absorbing the concepts, drills, and lessons are important, but then training yourself on what we work on outside of our sessions will be fundamentally key to your long-term success. Great players are not built in a few hours of work a week, they are built in a few hours of work every day.
            </p>
            <p className='pb-5'>
            Furthermore, taking ownership in your sleep, nutrition, and overall recovery habits will be things we -periodically talk about and that I’ll be checking in with you on. 
            </p>
            <p className='pb-2'>
            Finally, with any training regimen, there are risks, including increased heart stress and the chance of musculoskeletal injuries. In participating in this program, you agree to assume responsibility for these risks and waive any possibility for personal damage. You also agree that, to your knowledge, you have no limiting physical conditions or disability that would preclude an exercise program.
            </p>
            <h1 className='font-bold uppercase pt-5 pb-5'>
            SCHEDULING and CANCELATIONS
            </h1>
            
            <ol className='list-decimal pl-5'>
                <li>Scheduling and payment for the training month must follow what is outlined in program selection. Reschedules during the month can be negotiated as needed.</li>
                <li>Clients arriving late will receive the remaining scheduled session time, unless other arrangements have been previously made with the trainer.</li>           
            </ol>
            
            <h1 className='uppercase font-bold pb-5 pt-5'>EXPIRATION OF SESSIONS and REFUNDS</h1>
            <ol className='list-decimal pl-10 '>
                <li >No personal training refunds will be issued once paid for unless there are serious and extenuating circumstances, which will be determined by the trainer.</li>

            </ol>
           
           
        </div>
        <div>
            <a href='/register'>
            <button className='text-center rounded-full bg-primary text-white p-5 ml-72 mt-5 mb-10'>go back</button>
            </a>
           
        </div>


<div>

</div>

    </div>
  )
}

export default TermsAndConditions
