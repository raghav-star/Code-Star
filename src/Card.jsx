import React from 'react';
import {Link} from "react-router-dom";

function Card(props){
    return( <div className="card" style={{marginTop:'20%'}} >
    <img className="card-img-top" src={props.src}  style={{height:'15rem'}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.desc}</p>
      <Link to={{pathname: "/payment", state: {id: props.title}}}><div class="btn btn-primary">BUY NOW</div></Link>
    </div>
    </div>);
}

export default Card;