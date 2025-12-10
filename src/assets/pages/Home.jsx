import { useState } from 'react'


import Navbar from '../Navbar'


import Landing from '../components/Landing'


import Feature2 from '../components/Feature2'


import Sale from '../components/Sale'


import Dining from '../components/Dining'


import Collection from '../components/Collection'


import LimitOffer from '../components/LimitOffer'


import FeedBack from '../components/FeedBack'


import BestSeller from '../components/BestSeller'


import Blog from '../components/Blog'


import OfferSection from '../components/OfferSection'


import Brands from '../components/Brands'


import Footer from '../Footer'


function Home() {

  return (
<>
<div className='flex flex-col gap-6'>
  <div>
<Navbar/>
</div>
<div className='flex flex-col gap-[120px]'>
<div>
<Landing/>
</div>


<div className='flex flex-col gap-6'>
<div>
  <Feature2/>
</div>
</div>

<div>
  <Sale/>
</div>
<div>
  <Dining/>
</div>
<div>

<Collection/>

</div>

<div>
  <LimitOffer/>
</div>

<div>


<FeedBack/>


</div>

<div>
<BestSeller/>
</div>

<div>
  <Blog/>
</div>

<div>
<OfferSection/>
</div>

<div>
  <Brands/>
</div>

<div>
  <Footer/>
</div>


</div>
</div>
</>
  )
}

export default Home
