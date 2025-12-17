import React from 'react'
import VideoImage from '../about/VideoImage';
import Carousel from './Carousel';
import Pagination from './Pagination';
import { User, Clock, MessageCircle } from "lucide-react";

const LeftBlog = () => {
  return (
    <div>
      <div className="bg-[#f6f6f6] p-8 flex flex-col gap-5">

<div className='flex flex-col gap-[20px] '>

        <div>
        <img src='/images/pillow.jpg' alt='sofa'></img>
        </div>


 <div className="flex items-center gap-6 text-gray-500 text-m">
      {/* Author */}
      <div className="flex items-center gap-2 text-gray-500 hover:text-[#b18b5e] ">
        <User size={16} />
        <span>By Alex Manie</span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2">
        <Clock size={16} />
        <span>January 22, 2022</span>
      </div>

      {/* Comments */}
      <div className="flex items-center gap-2">
        <MessageCircle size={16} />
        <span>35</span>
      </div>
    </div>

<div>
    <h1 className='text-[36px] font-bold text-black hover:text-[#b18b5e]  '>Colour ideas for kitchen and dining spaces</h1>
</div>
<div>
    <p className='text-[#555555] text-[18px] '>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum.</p>
</div>
<div>
<a
  href="#"
  class="inline-flex items-center self-center gap-2 text-[18px] font-medium uppercase text-gray-500 hover:text-black transition"
>
  EXPLORE NOW
  <span class="text-xl text-gray-500">→</span>
</a>
</div>
</div>


<div>
<VideoImage bgImage="/images/table.jpg" />
</div>

 <div className="flex items-center gap-6 text-gray-500 text-m">
      {/* Author */}
      <div className="flex items-center gap-2 text-gray-500 hover:text-[#b18b5e] ">
        <User size={16} />
        <span>By Alex Manie</span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2">
        <Clock size={16} />
        <span>January 22, 2022</span>
      </div>

      {/* Comments */}
      <div className="flex items-center gap-2">
        <MessageCircle size={16} />
        <span>35</span>
      </div>
    </div>

<div>
    <h1 className='text-[36px] font-bold text-black hover:text-[#b18b5e]  '>Stunning Furniture with Aesthetic Appeal</h1>
</div>

<div>
    <p className='text-[#555555] text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat […]</p>
</div>
<div>
<a
  href="#"
  class="inline-flex items-center self-center gap-2 text-[18px] font-medium uppercase text-gray-500 hover:text-black transition"
>
  EXPLORE NOW
  <span class="text-xl text-gray-500">→</span>
</a>
</div>

<div>
  <Carousel/>
</div>


 <div className="flex items-center gap-6 text-gray-500 text-m">
      {/* Author */}
      <div className="flex items-center gap-2 text-gray-500 hover:text-[#b18b5e] ">
        <User size={16} />
        <span>By Alex Manie</span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2">
        <Clock size={16} />
        <span>January 22, 2022</span>
      </div>

      {/* Comments */}
      <div className="flex items-center gap-2">
        <MessageCircle size={16} />
        <span>35</span>
      </div>
    </div>

<div>
    <h1 className='text-[36px] font-bold text-black hover:text-[#b18b5e]  '>How to Make your Home a Showplace</h1>
</div>
<div>
    <p className='text-[#555555] text-[18px] '>These are aimed at treating existing cancer by stimulating the immune system to target and destroy cancer cells. Several experimental therapeutic cancer vaccines have been developed for various types of cancer, including prostate cancer, melanoma, and lung cancer.</p>
</div>
<div>
<a
  href="#"
  class="inline-flex items-center self-center gap-2 text-[18px] font-medium uppercase text-gray-500 hover:text-black transition"
>
  EXPLORE NOW
  <span class="text-xl text-gray-500">→</span>
</a>
</div>

      <div className='flex justify-center align-center'>
      <Pagination/>
      </div>

      </div>

    </div>
  )
}

export default LeftBlog
