 import React from "react";

function Header(){
    return <div>
    <nav className="navbar navbar-expand-lg  navbar navbar-light header" >
  <a className="navbar-brand" href="#"><img className="logo" src="./images/logo.png" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto" >
      <li className="nav-item active mr-5">
        <a className="nav-link" href="#">Courses <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link" href="#">Placment Program</a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link" href="#">Reviews</a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      <li className="nav-item mr-5">
        <a className="nav-link" href="#">Login</a>
      </li>
      
    </ul>
  </div>
</nav>


    </div>
}

export default Header;