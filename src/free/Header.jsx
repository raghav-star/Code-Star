import React from "react";
import {Link} from "react-router-dom";
function Header()
{
  return(
    <div className="conatainer-fluid">
    <nav className="navbar ">
    <Link to="/"><button className="btn  btn-danger"> {"<-"} GO BACK</button>  </Link>

  <a className="navbar-brand" href="" style={{margin:'0px auto'}}>
    <img src="./images/logo.png"  className="d-inline-block align-top logo" style={{height:'100px'}} alt="" />

  </a>

</nav>
    </div>
  );
}
export default Header;