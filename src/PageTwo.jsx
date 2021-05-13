import React from 'react';
import Heading from "./Heading.jsx";
import Cards from "./Cards.jsx";


function PageTwo(){
   
    return(
     <div className="pageTwoHeading container">
     <div className="container pt-5">   
         <Heading text="What are you looking for?" size="40px" weight="500" moreClasses="middle"/>
    </div>
    <div className="container">
        <Cards />
    </div>
    </div>

    );
    
}

export default PageTwo;