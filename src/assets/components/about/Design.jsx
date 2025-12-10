import React from 'react'
import ProgressSection from './SkillBar'

const Design = () => {
  return (
    <div className='mx-[100px] '>


<div className='grid grid-cols-2 gap-10 self-center items-center'>

      <div className='flex flex-col gap-5'>
        <div>
        <h5 className='text-[#B18B5E] text-[18px] font-semibold'>WE DESIGN FURNITURE</h5>
        <h2 className='text-black text-[36px] font-bold'>Our Core Divisions</h2>
        </div>

<div className='flex flex-col gap-6'>

        <div>
        <p className='text-[#555555] text-[18px] '>Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac enim. Sed cursus turpis vitae tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id</p>
      </div>
      <div>
      <ProgressSection/>
      </div>

      <div className=''>
        <img src='/images/about-image2.jpg' alt='about'></img>
      </div>
</div>

    </div>

<div className='h-full self-center items-end flex'>
    <img src='/images/about-image1.jpg' alt='about'></img>
</div>

</div>

    </div>
  )
}

export default Design
