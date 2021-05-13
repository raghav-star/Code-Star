import React from 'react';
import Heading2 from "./Heading2.jsx";

function ListItem(props){
    return(
        <div style={{backgroundColor:props.background,padding:'20px',textAlign:'left',marginBottom:'10px'}}>
       <Heading2 text={props.heading}/>
       <div>{props.text}</div>
       </div>
    );
}

export default ListItem;