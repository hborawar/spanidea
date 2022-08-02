import React from 'react';
import logo from "../assets/Images/Contact-Us.jpg";
import logo2 from '../assets/Images/Join-our-team.jpg';
import logo3 from '../assets/Images/Meet-our-team-1.jpg';
import  '../assets/css/Aboutus.css' ;


export default function Aboutus3() {
  return (
    <>
    <section className="abc">
    <div className="row">
        <div className="mot">
            <img src={logo} alt="Contact us"/>
            <div className="layer1">
                <h3>CONTACT US</h3>

            </div>
        
        </div>

        <div className="mot">
            <img src={logo2} alt="Join our team"/>
            <div className="layer1">
                <h3>JOIN OUR TEAM</h3>
            </div>
        
        </div>

        <div className="mot">
            <img src={logo3} alt="Meet our team"/>
            <div className="layer1">
                <h3>MEET OUR TEAM</h3>
            </div>
        
        </div>
    </div>


</section>

    
    
    </>
  )
}
