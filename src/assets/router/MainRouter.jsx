import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About.jsx';
import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import Pages from '../pages/Pages.jsx';
import MainBlog from '../pages/MainBlog.jsx';
import Contact from '../pages/Contact.jsx';



const MainRouter = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blog" element={<MainBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   
  );
};

export default MainRouter;
