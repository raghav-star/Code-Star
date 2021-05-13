import React from 'react';
import Heading from "./Heading.jsx";
import Heading2 from "./Heading2.jsx";
import Button from "./Button.jsx";
import RotatingImg from "./RotatingImg";

function PageOne(){

    return (<div>
     <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 allHeading">
        
        <Heading text="Perfect platform for your coding career." size="50px" weight="700" /> 
         <Heading2 text="A JOURNEY TOWARDS PURSUIT OF EXCELLENCE AND PEACE" />
         <Button buttonText="Free Resoures"/>
        </div> 
        
        <div className="col-lg-6 col-md-6 pt-5">
             <RotatingImg   link="https://images.squarespace-cdn.com/content/v1/570ebc54e32140a560e3d6d4/1610738838099-F36MYQU07CGHTKXFP941/ke17ZwdGBToddI8pDm48kM_MblD50G5EufVO6dT0s2xZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx5ND83OZqKVWyX6l_HgwjIND_A11yFncxq78nwRR8lYJnTxPSJ3TWSqWMFU710T24/codieclear.png" />    
        </div>

     </div>
     </div>
     </div>);
}

export default PageOne;