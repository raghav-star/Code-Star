import React from 'react';

function Card(props){
    return( <div className="card" style={{marginTop:'20%'}} >
    <img className="card-img-top" src={props.src}  style={{height:'15rem'}} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.desc}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>);
}

export default Card;