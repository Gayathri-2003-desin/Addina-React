import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About.jsx';
import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import Pages from '../pages/Pages.jsx';
import MainBlog from '../pages/MainBlog.jsx';
import Contact from '../pages/Contact.jsx';
import Wishlist from '../pages/Wishlist.jsx';
import ShopCart from '../pages/ShopCart.jsx';
import IntroPage from '../pages/IntroPage.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import Profile from '../pages/Profile.jsx';
import AddressPage from '../pages/AddressPage.jsx';
import OrderSummary from '../pages/OrderSummary.jsx';
import PaymentPage from '../pages/PaymentPage.jsx';
import OrderConfirmation from '../pages/orderConfirmation.jsx';
import OnlinePayment from '../pages/OnlinePayment.jsx';
import ProductOnePage from '../pages/productOnePage.jsx';




const MainRouter = () => {
  return (

    <Routes>
      <Route path="/" element={<IntroPage />} />
     
      <Route path="/home" element={
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>
        } />
      
      <Route path="/about" element={
        <ProtectedRoute>
        <About />
        </ProtectedRoute>
        } />
      <Route path="/shop" element={
       <ProtectedRoute>
        <Shop />
       </ProtectedRoute>
        } />
      <Route path="/pages" element={
        <ProtectedRoute>
        <Pages />
        </ProtectedRoute>  
        } />
      <Route path="/blog" element={
        <ProtectedRoute>
        <MainBlog />
        </ProtectedRoute>
        } />
      <Route path="/contact" element={
        <ProtectedRoute>
        <Contact />
        </ProtectedRoute>
        } />
      <Route path="/wishlist" element={
        <ProtectedRoute>
        <Wishlist />
        </ProtectedRoute>
        } />
      <Route path="/shopcart" element={
        <ProtectedRoute>
        <ShopCart />
        </ProtectedRoute>
        } />

         <Route path="/profile" element={
        <ProtectedRoute>
        <Profile />
        </ProtectedRoute>
        } />

   <Route path="/address" element={
        <ProtectedRoute>
        <AddressPage />
        </ProtectedRoute>
        } />

  <Route path="/summary" element={
        <ProtectedRoute>
        <OrderSummary />
        </ProtectedRoute>
        } />

         <Route path="/payment" element={
        <ProtectedRoute>
        <PaymentPage />
        </ProtectedRoute>
        } />

           <Route path="/confirmation" element={
        <ProtectedRoute>
        <OrderConfirmation />
        </ProtectedRoute>
        } />

        <Route path="/online-payment" element={
          <ProtectedRoute>
          <OnlinePayment />
          </ProtectedRoute>
          } />

     <Route
  path="/item-one/:productId"
  element={
    <ProtectedRoute>
      <ProductOnePage />
    </ProtectedRoute>
  }
/>


    </Routes>
  );
};

export default MainRouter;
