import React from "react";
import Heading from "./Heading.jsx";
import Heading2 from "./Heading2.jsx";

function PageFive(){
    return(
        <div className="" id="review" className="container">
            <div className="pageTwoHeading pt-5">
             <Heading text="Cracking the coding interview with PepCoder's" moreClasses="middle" size="40px" weight="500"/>
             </div>
             <Heading2 text="Prepare for a technical interview with tips and techniques and interviews questions from students who cracked the coding questions of companies like Google, Microsoft & SAP labs and shared their positive experience with PepCoding." moreClass="center"/>

             <div className="pageTwoHeading pt-5">
             <Heading text="Straight from the heart." moreClasses="middle" size="40px" weight="500"/>
             </div>
             <Heading2 text='Our persona is reflected by our students. They reflect this affection with reviews we just love to read again and again. Best institute for coding? Definitely a "YES" from these students perspective.' moreClass="center mb-4"/>

        </div>
    )
}

export default PageFive;