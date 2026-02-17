import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from "react-router-dom";
import MainRouter from './assets/router/MainRouter.jsx';
import './App.css'
import Navbar from './assets/Navbar'
import Landing from './assets/components/Landing'
import Feature2 from './assets/components/Feature2'
import Sale from './assets/components/Sale'
import Dining from './assets/components/Dining'
import Collection from './assets/components/Collection'
import LimitOffer from './assets/components/LimitOffer'
import FeedBack from './assets/components/FeedBack'
import BestSeller from './assets/components/BestSeller'
import Blog from './assets/components/Blog'
import OfferSection from './assets/components/OfferSection'
import Brands from './assets/components/Brands'
import Footer from './assets/Footer'


function App() {

  return (
<>
   <BrowserRouter>
  
      <MainRouter/>
      </BrowserRouter>
    
</>
  )
}

export default App
