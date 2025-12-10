import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About.jsx';
import Home from '../pages/Home.jsx';


const MainRouter = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
   
  );
};

export default MainRouter;
