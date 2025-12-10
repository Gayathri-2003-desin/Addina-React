import React from 'react'

import Navbar from '../Navbar'

import Footer from '../Footer'

import AboutLanding from '../components/about/AboutLanding'

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
      <div >
<AboutLanding/>
      </div>

<div>
  <Design/>
</div>


<div>
<VideoImage/>
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
