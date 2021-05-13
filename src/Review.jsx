import React from 'react';
import BoxShadow from "./BoxShadow.jsx";


function Review(props){
    return(
        <div style={{backgroundColor:props.bg}}>
             <BoxShadow text={props.text}/>
             <img src={props.src} className="rounded-circle" style={{width:'60px'}}/> <span>{props.name}</span>
        </div>
    )
}

export default Review;