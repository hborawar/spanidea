import React from 'react';
import logo from "../assets/Images/pddpic.png";
import logo2 from "../assets/Images/hsepic.png";
import FlatList from 'flatlist-react';
import logo3 from "../assets/Images/eepic.png";
import logo4 from "../assets/Images/masepic.png";
import logo5 from "../assets/Images/QApic.png";
import "../assets/css/products2.css";




const array=[
    {
        
        pdt_heading:"Product Design & Development",
        pdt_para:" Spanidea is a leading product engineering company and provides end-to-end product engineering with Ideation to field deployment and specializes in IoT, Automotive, Smart consumer devices, and industrial automation.",
        image_img:{logo}
    },
    // C:\Users\spani\Desktop\spanidea\spanidea\src\assets\Images\pddpic.png
    {  
        pdt_heading:"Hardware and Silicon Engineering",
        pdt_para:" Efficient hardware & system design is key for next-generation product success and Spanidea with 10+ years of proven design process & methodologies, is well-positioned to provide expertise towards PCB, Board Design, Board Bring up, ASIC Design & Verification, and Integration for embedded system product development.",
        image_img:{logo2},
        

    },
    {  
        pdt_heading:"Embedded Engineering",
        pdt_para:" SpanIdea with a strong and large engineering team has expertise in software development tools, microprocessors, processors system, different OS, and real-time operating systems.",
        image_img:{logo3}

    },
    {  
        pdt_heading:"Middleware & Application Software Engineering",
        pdt_para:"  SpanIdea team has expertise in developing middleware & Application software for a wide range of products used in the areas such as setup box, ADAS, infotainment, networking, wireless, and consumer electronics.",
        image_img:{logo4}
    },
    {  
        pdt_heading:"QA  Verification and Validation",
        pdt_para:" SpanIdea is providing verification and Validation engineering services for varied industry sectors to global companies for a wide range of software requirements. We are an experienced company with a highly motivated and experienced team of automation developers and testers who are capable of handling the toughest challenges and deliver the best results to meet your standards.",
        image_img:{logo5}

    }





   ]



export default function Products2() {

    const renderPerson = (person, idx) => {
        console.log("11111111111111111111111",person);
        return (
    <div>
            <section className="product">
                    <div className="pp">
                        <div className="pdt">
                            {console.log("-------------------" )}
                            <p>{person.pdt_heading}</p>
                            <p>{person.pdt_para}</p>
                          
                            {/* console.log("this data"+person) */}
                            <img src={person.image_img} className = "img1" alt="img1" />
                        </div>
                    </div>
                </section>
          </div>
        );
      }

  return (
    <div>

      {console.log(array)}  
          <FlatList
          list={array}
          renderItem={ renderPerson}
        />

    </div>    
    );
}
