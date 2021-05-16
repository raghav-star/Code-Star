import React from 'react';
import Heading from './Heading.jsx';
import ListItem from "./ListItem.jsx";
import Carousel from "./Carousel.jsx";

function PageFour(){
    return(
       <div id="" className="container-fluid" style={{marginTop:'50px'}} > 
        <div className="pageTwoHeading pt-5">   
           <Heading text="Where our students work" size="40px" weight="500" moreClasses="middle"/>
         
           </div>
           <div className="row">
          
               <div className="col-md-6">
                  <ListItem heading="PLACED STUDENT" text="We have been successful in helping more than 500 students get placed in top product based companies with handsome packages." background="#e1f0fa"/>
                  <ListItem heading="PACKEAGE ABOVE 15 LPA" text="More than 250 of our students have been able to grab packages more than 15 LPA from companies all over India.." background="#e1f0fa"/>
                  <ListItem heading="AVERAGE PACKAGE" text="The Average Package of students placed from Pepcoding stands at 9 LPA at the moment." background="#e1f0fa"/>
               </div>
         <div className="col-md-6">
                <Carousel/>
         </div>
         </div>  
        
        </div> 
      
    );
}

export default PageFour;