import React from "react";
import Heading from "./Heading.jsx";
import BoxShadow from "./BoxShadow.jsx";
import Button from "./Button.jsx";

function PageThree(){
      
    return <div id="placementProgram" className="container" style={{marginTop:'50px'}}>
         <div className="pageTwoHeading container pt-5">   
           <Heading text="Placement Program" size="40px" weight="500" moreClasses="middle"/>
        </div>
        <div className="row">
             <div className="col-md-6">
                 <img className="largeImg" src="./images/coding.jpg" />
             </div>
             <div className="col-md-6">
                  <BoxShadow style={{margin:"5%"}} text="Gauranteed Placements with Minimum Gauranteed Package"/>    
                  <BoxShadow text="1200-hour intensive training on Data Structure and Algorithms"/>    
                  <BoxShadow text="Zero Upfront Fees and Pay only after Job"/>    
                  <BoxShadow text="Live Classes and Round the Clock Doubt Support"/>  
                  <Button buttonText="APPLY FOR THE COURSE"/> 
             </div>
        </div>
        
    </div>;
       
}

export default PageThree;