import React from 'react'
import Navbar from '../Navbar'
import PageLanding from '../components/about/PageLanding'
import ProductList from '../components/shop/ProductList'
import Footer from '../Footer'

const Shop = () => {
  return (
    <div className='flex flex-col gap-10'>

      <div>
<Navbar/>

      </div>
<div className='flex flex-col gap-[100px] '>
<div>
    <PageLanding 
  title="Product"
  subtitle="Home . Product"
/>
</div>
      
      <div>
      <ProductList/>
      </div>

<div>
    <Footer/>
</div>
</div>
    </div>
  )
}

export default Shop
