import React from "react";

function SignUp(){
    return(
        <div className="row">
 
         <div class="col-md-6 pt-4 ">
         <img  style={{textAlign:'center',margin:'0px auto'}} src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" alt=""/>
     </div>

     <div className="col-md-6">
          
          <h1 style={{textAlign:'center'}}> Log In</h1>
          <input style={{marginTop:"10%"}} className="w3-input" type="text" placeholder="Your Name"  /><br/>
          
            <input class="w3-input" type="text"   placeholder="Password"/><br/>
         
             <div class="btn btn-lg btn-primary">Submit</div>
     </div>

        </div>
    );
}

export default SignUp;