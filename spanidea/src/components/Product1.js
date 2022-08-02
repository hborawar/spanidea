import React from 'react';
import '../assets/css/Products.css';
import logo from "../assets/Images/product-design.jpg"

export default function Product1() {
  return (
    <>
   <section className="pdt">
    
    <p className='pdt-para'>SpanIdea is a leading product engineering company and provides end-to-end product engineering with Ideation to field deployment and specializes in IoT, Automotive,  Smart consumer devices, and industrial automation.</p>
    <img  className="pdt-img" src={logo} alt="product design"/>
    <div>
        <h2 className='pdt-heading'>Our Offerings towards new products includes</h2>
        <p className='pdt-para'>Spanidea is a leading product engineering company and provides end to end product engineering with Ideation to field deployment and specializes towards IOT, Automotive,  Smart consumer devices and industrial automation.</p>
        <ul>
            <li>Ideation, Market Study, fitment, re-engineering</li>
            <li>New Product Design, Development, Deployment, MVP </li>
            <li> Post deployment product management, feature addition/release and sustenance.</li>
            
        </ul>
   
   
     </div>
      </section>

    </>
  )
}
