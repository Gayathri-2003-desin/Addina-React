import { useState } from 'react'

import Navbar from '../../Navbar'

import Landing from '../Landing'

import Feature2 from '../Feature2'

import Sale from '../Sale'

import Dining from '../Dining'

import Collection from '../Collection'

import LimitOffer from '../LimitOffer'

import FeedBack from '../FeedBack'

import BestSeller from '../BestSeller'

import Blog from '../Blog'

import OfferSection from '../OfferSection'

import Brands from '../Brands'

import Footer from '../../Footer'


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
