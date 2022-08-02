import React from 'react';

import logo from "../Images/spn.jpg";
import  '../css/NavBar.css' ;
import { Link } from 'react-router-dom';


 
export default function NavBar() {
  return (
    <section className="header">
        <nav>
            <a href=""><img src={logo} alt="bg" width="150px" height="100px" /></a>
             <div className="nav-links">
                <div className ="nav-links" id="navLinks">
                    <i className="fa fa-window-close" onclick="hideMenu()"></i>
                <ul>            
                                    
                <li><a href="">HOME</a></li>
                <li><Link to ="./AboutUs">ABOUT US</Link></li>
                <li><Link to='/Products'>PRODUCTS</Link></li>
                <li><Link to="/Engineering">ENGINEERING</Link></li>
                <li><Link to='/ContactUs'>CONTACT US</Link></li>
                 </ul>
            </div>
            </div>
            
            <i className="fa fa-bars" onclick="showMenu()" ></i>
        </nav>
        <div className="Aboutus"></div>
    </section>
  )
}
