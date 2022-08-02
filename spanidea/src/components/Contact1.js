import React from 'react';
import "../assets/css/ContactUs.css"


export default function Contact1() {
  return (
     <section className="contact">
        <div className='content'>
            <h2>Contact Us</h2>
            <p>Thank you for your interest in SpanIdea. To get in touch with us kindly fill the form or find the contact information of our global offices listed below</p>
        </div>
        < div className='container'>
        <div className='contactInfo'>
            <div className='box'>
                <div className='icon'></div>
                <div className='text'>
                    <h3>Address</h3>
                    <p>STPI Software Technology Parks of India,<br/>
                        Unit # G3, F1, F2 <br/>
                        Plot No. CYB-I, Cyber Park,<br/>
                        RIICO Heavy Industrial Area, Near Saras Dairy,<br/>
                        Jodhpur-342003 Rajasthan<br/>
                    </p>
                </div>
                </div>
            <div className='box'>
                <div className='icon'></div>
                <div className='text'>
                    <h3>Phone</h3>
                    <p>080 79653493</p>
                 </div>
            </div>
            </div>


            <div className='contactForm'>
            <form>
                <h2>Send Message</h2>
                <div className='inputBox'>
                    <input type={Text} name="" required="required">

                    </input>
                    <span>Full Name</span>
                 </div>
                 <div className='inputBox'>
                    <input type={Text} name="" required="required">

                    </input>
                    <span>Email</span>
                 </div>
                 <div className='inputBox'>
                    <textarea required="required">

                    </textarea>
                    <span>Type Your Message here ....</span>
                 </div>
                 <div className='inputBox'>
                    <input type="submit" value="Send" required="required">

                    </input>
                   
                 </div>
            </form>

      
        </div>
     </div>
</section>
    
   
  )
}
