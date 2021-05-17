import React from "react";
import Heading from "../Heading.jsx";
import Cards from "./Cards.jsx";
import Algorithm from "./Algorithm.jsx";


function Middle(){
    return(
       <div className="container">
        <Heading text="Data Structure" moreClasses="pt-5 pb-3" size="30px" weight="500" />
        <Cards/>

        <Heading text="Algorithm" moreClasses="pt-5 pb-3" size="30px" weight="500" />
        <Algorithm/>
        
       </div>
    );
}

export default Middle;