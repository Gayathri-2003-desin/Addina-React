import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import PageLanding from '../components/about/PageLanding'
import LeftBlog from '../components/blog/LeftBlog'
import RightBlog from '../components/blog/RightBlog'

const MainBlog = () => {
  return (
    <div className='flex flex-col gap-6'>
<div>
  <Navbar/>
</div>


<div className='flex flex-col gap-[70px] '>


<div>
    <PageLanding 
  title="Blog Classic"
  subtitle="Home . Blog Classic"
/>
</div>

<div className='grid grid-cols-[2fr_1fr] px-[100px] gap-[80px] '>
  <div>
    <LeftBlog/>
  </div>


  <div>
<RightBlog/>
  </div>
</div>




      <div>
        <Footer/>
      </div>
</div>
    </div>
  )
}

export default MainBlog
