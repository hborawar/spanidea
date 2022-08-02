import React from 'react';
import  "../css/Footer.css";
import logo from "../Images/spanidea-logo-white.png";

export default function Footer() {
  return (
    <>
    <footer class="footer">
    <img src={logo} alt="Spanidea"/>
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="#" value="About Us">
                        About Us</a>
                    </li>
                    <li><a href="#" value="Certifications">
                        Certifications</a>
                    </li>
                    <li><a href="#" value="Career">Careers</a></li>
                    <li><a href="#">Awards</a></li>
                    
                </ul>
            </div>
            <div class="footer-col">
                <h4>Services</h4>
                <ul>
                    <li><a href="#">
                        Product Engineering</a>
                    </li>
                    <li><a href="#">
                        Digital Engineering</a>
                    </li>
                   
                    <li><a href="#">Technology Consulting</a></li>
                    
                </ul>
            </div>
            <div class="footer-col">
                <h4>Latest News</h4>
                <ul>
                    <li><a href="#">
                        Spanidea Systems joins Telcom Infra Project (TIP)</a>
                    </li>
                    
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i>fb</a>
                    <a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i>twitter</a>
                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>insta</a>
                    <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i>linkdin</a>
                </div>

            </div>
        </div>

    </div>
</footer>
    </>
  )
}
