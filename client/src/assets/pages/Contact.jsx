import React from 'react'
import Navbar from '../Navbar'
import PageLanding from '../components/about/PageLanding'
import Footer from '../Footer'
import ContactInfo from '../components/contact/ContactInfo'
import MapSection from '../components/contact/MapSection'
import AppointmentForm from '../components/contact/AppointmentForm'


const Contact = () => {
  return (
    <div className='flex flex-col gap-8'>
        <div>
      <Navbar/>
</div>

<div>
    <PageLanding 
  title="Contact"
  subtitle="Home . Contact"
/>
</div>

<div>
    <ContactInfo/>
</div>


<div className='flex flex-col gap-[100px] '>
<div className='grid grid-cols-2 mx-[100px] gap-10 '>
    <div>
<MapSection/>
    </div>
    <div>
        <AppointmentForm/>
    </div>
</div>

<div>
<Footer/>
</div>
</div>
    </div>
  )
}

export default Contact
