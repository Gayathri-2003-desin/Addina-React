import React from 'react'
import ImageSlider from './ImageSlider'

const Landing = () => {
  return (
<div className="bg-[url('images/white.jpg')] bg-cover bg-center h-164 w-full grid grid-cols-2 gap-7 justify-center items-center">

<div className='flex flex-col gap-6 justify-around ml-[100px]'>
    <div className=''>
  <span class="font-semibold uppercase bg-[rgba(177,139,94,0.15)] px-[15px] py-[4px] text-[14px] inline-block  text-[#b18b5e]">
  NEW ARRIVAL
</span>
    </div>
    <div className=''>
        <h1 class="text-[80px] font-bold not-italic leading-[1.1] mb-0">
Elevate your Home Aesthetics</h1>
    </div>
    <div className=''>
        <p className='  text-gray-600 text-xl leading-[26px]'>
        A furniture e-commerce company operates in the digital space, offering a wide range
                                    of furniture products for sale
                                    through an online platform.
    </p>
    </div>
    <div className='flex gap-6'>
      <div className=''>
        <button 
  className="bg-[#b18b5e] border border-[#b18b5e]-500 uppercase border px-4 py-2 text-[16px] font-medium text-white h-[60px] inline-flex items-center justify-center px-[30px] relative z-[1] overflow-hidden transition-all duration-500 uppercase gap-[5px]"
>
BUY NOW
</button>
      </div>
      <div className=''>
<button
  className="inline-flex items-center justify-center border px-4 py-2 h-[60px] uppercase font-medium border border-[rgba(177,139,94,0.15)]-200 " 
>
  VIEW DETAILS
</button>
      </div>
    </div>
</div>

<div className=''>
<ImageSlider/>
</div>
</div>
  )
}

export default Landing
