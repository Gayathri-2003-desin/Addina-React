import React from 'react'
import ProductCarousel from './Carousel'

const Sale = () => {
  return (
    <div className='mx-[100px] '>
      <div className='flex flex-col gap-7'>
        <div className='text-center'>
            <h5 className=' font-semibold uppercase bg-[rgba(177,139,94,0.15)] px-[16px] py-[6px] text-[16px] inline-block  text-[#b18b5e] '>TOP SALE</h5>
        </div>
        <div className='text-[52px] font-bold text-center'>
            <h1>Featured Product</h1>
        </div>

<div>
<ProductCarousel/>
</div>
      </div>
    </div>
  )
}

export default Sale
