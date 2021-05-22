import React from 'react'
import Heading2 from '../Heading2.jsx'
import {Link} from 'react-router-dom'

function Information(props){
  return(
    <div className="container-fluid " style={{color:'white'}}>
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
    <div className="pt-3">
    <div className="gradient" style={{backgroundColor:'orange',width:'80px',textAlign:'center',padding:'8px',borderRadius:'10%',float:'left',marginTop:'10px',fontWeight:'500',marginRight:'8px'}}>Beginner</div>
     
     <div className="t-align-sm-l t-align-c" style={{float:'left'}}>
     <div class="font-2">Course Language</div>
     <div class="font-4 bold mt-1">English, Hindi</div>
     </div>
    
    <Link to={{pathname: "/payment", state: {id: props.courseName}}}>
    <div style={{float:'right'}} class="btn btn-lg btn-primary  ml-auto pl-3 pr-3">
    Buy Now
    </div></Link>

    </div>

    </div>
  );
}
export default Information;

