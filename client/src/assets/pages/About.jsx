import React from 'react'

import Navbar from '../Navbar'

import Footer from '../Footer'

import PageLanding from '../components/about/PageLanding'

import Design from '../components/about/Design'

import VideoImage from '../components/about/VideoImage'

import OfferSection from '../components/OfferSection'


const About = () => {
  return (
    <div className='flex flex-col gap-10'>
      
      <div>
      <Navbar/>
      </div>

<div className='flex flex-col gap-[120px] '>
  
<PageLanding 
  title="About Us"
  subtitle="Home . About Us"
/>

<div>
  <Design/>
</div>


<div>
<VideoImage bgImage="/images/about-video-image.jpg" />
</div>

<div>
  <OfferSection/>
</div>
     
      <div>
        <Footer/>
        </div>
 </div>



    </div>
  )
}

export default About
