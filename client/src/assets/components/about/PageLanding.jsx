import React from 'react'

const PageLanding = ({ title, subtitle }) => {
  return (
    <div>
           <div className="w-full bg-[url('/images/about-bg.jpg')] bg-cover bg-center py-[100px] flex flex-col gap-4 items-center bg-no-repeat text-center">

        <h1 className='text-[64px] text-white font-bold'>{title}</h1>
        <p className='text-white text-[18px] font-bold'>{subtitle}</p>
      </div>
    </div>
  )
}

export default PageLanding;


