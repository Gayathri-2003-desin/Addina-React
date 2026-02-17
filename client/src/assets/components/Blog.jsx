import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";


const Blog = () => {
  return (
    <div className='bg-[#f5f1e6] flex flex-col gap-10'>
                 <div className='text-center pt-[100px]'>
  <span class="font-semibold uppercase bg-[rgba(177,139,94,0.15)] px-[15px] py-[4px] text-[18px] inline-block  text-[#b18b5e]">
  THIS WEEK
</span>
<h1 className='text-black text-[52px] font-bold '>Recent Blog</h1>
    </div>

    <div className='grid grid-cols-2 mx-[100px] gap-10 pb-[100px] '>


<div className='bg-white flex gap-6 p-[20px] items-center' >
    <div className='flex flex-col gap-6'>
  <span class="w-[130px] font-semibold uppercase bg-[rgba(177,139,94,0.15)] px-[15px] py-[4px] rounded-full text-[14px] inline-block  text-[#b18b5e] hover:text-black">
  Chair Design
</span>

<p className='text-font-bold text-gary-100'>By Alex Manie    07 Jan 2024</p>

<h2 className='text-black text-[24px] font-bold hover:text-[#b18b5e] '>Arrangement That's<br></br> Nearly Perfect</h2>

        <button
          
          className="p-4 w-[60px] bg-[rgba(177,139,94,0.15)] rounded-full hover:bg-yellow-600 text-[#b18b5e] hover:text-white transition"
        >
          <ChevronRight />
        </button>

</div>
<div>
    <img src="/images/blog-image1.jpg" alt="blog"></img>
</div>


</div>


<div className='bg-white flex gap-6 p-[20px] items-center' >
    <div className='flex flex-col gap-6 '>
  <span class="w-[130px] font-semibold uppercase bg-[rgba(177,139,94,0.15)] px-[15px] py-[4px] rounded-full text-[14px] inline-block  text-[#b18b5e] hover:text-black">
  Chair Design
</span>

<p className='text-font-bold text-gary-100'>By Alex Manie    07 Jan 2024</p>

<h2 className='text-black text-[24px] font-bold hover:text-[#b18b5e]'>Eworkstation <br></br>Arrangement That's </h2>

        <button
          
          className="p-4 w-[60px] bg-[rgba(177,139,94,0.15)] rounded-full hover:bg-yellow-600 text-[#b18b5e] hover:text-white transition"
        >
          <ChevronRight />
        </button>
</div>
<div>
    <img src="/images/blog-image2.jpg" alt="blog"></img>
</div>


</div>
</div>
    </div>
  )
}

export default Blog
