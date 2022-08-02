import React from 'react';
import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import Footer from "./assets/js/Footer.js";
import NavBar from './assets/js/NavBar.js';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import Engineering from './pages/Engineering';
import Home from './components/Home';


function App() {
  return (
  <>
   <NavBar/>
    <Routes>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/ContactUs" element={<ContactUs />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/Engineering" element={<Engineering />}/>
    
    </Routes>
    <Home/>
    <Footer />
  

  </>
  
  );
  
}

export default App;   
