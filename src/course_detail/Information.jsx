import React from 'react'
import Heading2 from '../Heading2.jsx'
import {Link} from 'react-router-dom'

function Information(props){
  return(
    <div className="container-fluid ">
    <div className="row">
    <div className="col-lg-3">
    <img src={props.src} style={{height:'200px' ,textAlign:'center'}}/>
    </div>
    <div className="col-lg-9 pt-5">

    <Heading2 text={props.courseName} moreClass="newWeight middle" />
    </div>
    </div>
    <div class="container" style={{fontSize:'1.5rem',color:'white'}}>

      {props.desc}

    </div>
    <Link to={{pathname: "/payment", state: {id: props.courseName}}}><div class="btn btn-lg btn-light mt-4 ml-3">
    Buy Now
    </div></Link>
    </div>
  );
}
export default Information;
