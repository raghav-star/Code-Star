import React from "react";

function Heading(props){
    return <h1 className="heading " className={props.moreClasses}   style={{fontSize:props.size,fontWeight:props.weight,color: '#484848'}}> {props.text}</h1>;
}

export default Heading;