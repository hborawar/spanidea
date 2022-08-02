import React from 'react';
import  '../assets/css/Aboutus.css' ;

import logo from "../assets/Images/Customer-focus.jpg";
import logo2 from '../assets/Images/Team-Work.jpg';
import logo3 from '../assets/Images/Digital.jpg';


export default function Aboutus1() {
  return (
    <>
    <div className='AboutUs'>
        <div className="abt">
        <h1>About us</h1>
        <p>SpanIdea is a leading product engineering company and provides end-to-end product engineering with Ideation to field deployment and specializes in IoT, Automotive,  Smart consumer devices, and industrial automation.</p>
        </div>
        <div className='row'>
            <div className='abt-col'>
            <h3 >Customer focus</h3>
            

            <img src={logo} alt= "photo1"/>
            
            
            <p>Last couple of years our team has worked hard to create a company that meets and exceeds our customer expectations as much as we can.
             </p>
            </div>

            <div className='abt-col'>
            <h3>Teamwork and Office Culture</h3>
            <img src={logo2} alt = "ph2">
            </img>
            <p>We believe in teamwork and encourage hard work and innovation in the workplace. Flexible working, collaboration, and career progression are part of our company culture.
             </p>
            </div>


            <div className='abt-col'>
            <h3>Embracing Digital</h3>
            <img src={logo3} alt = "ph3">
            </img>
            <p>Digital technologies are rapidly changing and we bring together the power of a domain, enterprise and digital to achieve our objectives and stay ahead of our competitors.
             </p>
            </div>
        </div>


        
    </div>
 
   
 </>




  )
}