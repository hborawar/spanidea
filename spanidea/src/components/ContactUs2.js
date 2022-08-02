import React from 'react';
import logo from "../assets/Images/edtech.jfif";
import logo2 from "../assets/Images/telecommunication.jfif";
import logo3 from "../assets/Images/auto.jfif";


export default function ContactUs2() {
  return (
    <section className="facilities">
        <h1>Our Facilities</h1>
        <div className="row">
            <div className="facilitycol">
                <img src={logo} alt="logo"/>
                <div className="layer1">
                    <h3>EDTECH</h3>

                </div>
            
            </div>

            <div className="facilitycol">
                <img src={logo2} alt="logo2"/>
                <div className="layer1">
                    <h3>TELECOMMUNICATION</h3>
                </div>
            
            </div>

            <div className="facilitycol">
                <img src={logo3} alt="logo3"/>
                <div className="layer1">
                    <h3>INDUSTRIAL AUTOMATION</h3>
                </div>
            
            </div>
        </div>


   </section>
  )
}
