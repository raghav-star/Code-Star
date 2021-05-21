import React from "react"
import {Link} from "react-router-dom";

function Button(props){
    return(<Link to="/FreeResources"><div className="btn btn-danger btn-lg " >{props.buttonText}</div> </Link>);


}

export default Button;
