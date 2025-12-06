import React from 'react'
import Testimonials from './Testimonials'
const FeedBack = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 justify-center items-center self-center h-[800px] bg-[url('/images/review.jpg')]">

        <div className='text-center'>
                  <div className='text-center '>
            <h5 className=' font-bold uppercase bg-[rgba(177,139,94,0.15)] px-[16px] py-[6px] text-[18px] inline-block  text-white '>
                TESTIMONIALS</h5>
        </div>
            <h1 className='text-white text-[52px] font-bold'>Client Feedback</h1>
        </div>

         <div>
<Testimonials/>
         </div>

      </div>
    </div>
  )
}

export default FeedBack
