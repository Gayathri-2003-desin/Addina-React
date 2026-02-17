import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import CheckoutSteps from '../components/ClipBoard'
import PaymentOption from '../components/PaymentMethod'

const PaymentPage = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
      <CheckoutSteps currentStep={3}/>
      </div>

<div>
  <PaymentOption
  onConfirm={(method) => {
    console.log("Selected payment method:", method);
  }}
/>
</div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default PaymentPage
