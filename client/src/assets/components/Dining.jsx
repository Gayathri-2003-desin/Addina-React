import React from 'react'

const Dining = () => {
  return (
    <div>
      <div className='grid grid-cols-2'>
       <div className="flex justify-end bg-[#f5f1e6] h-full">
<div className='flex items-center self-center mr-[30px] bg-[#b18b5e] py-[25px] px-[25px]'>
   <div className="px-[60px] py-[50px] border-[2px] border-white flex flex-col gap-9">
    <div >
        <h5 className='text-white text-xl' >HOT DEAL FURNITURE</h5>
    </div>
    <div className='text-white text-[44px] font-bold'>
        <h2 className='text-white text-[44px]' >Live Furniture <br></br> Your Love</h2>
    </div>
    <div className=''>
        <button className='text-black font-bold text-xl bg-white p-3'>BUY NOW</button>
    </div>
</div>
</div>
        </div >
    

      <div className=''>
        <img src="/images/sofa.png" alt="Dinning" />
      </div>
        </div>
    </div>
  )
}

export default Dining
