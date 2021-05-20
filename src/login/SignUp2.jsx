import React from "react";

function SignUp2(){
    return(
        <div className="row">
              <div className="col-md-6">
          
          <h1 style={{textAlign:'center'}}> Sign up</h1>
          <input style={{marginTop:"10%"}} className="w3-input" type="text" placeholder="Your Name"  /><br/>
           <input class="w3-input" type="text"  placeholder="Email"/><br/>
            <input class="w3-input" type="text"   placeholder="Password"/><br/>
             <input class="w3-input" type="text"  placeholder="Confirm Password"/><br/>
             <div class="btn btn-lg btn-primary">Submit</div>
     </div>
         <div class="col-md-6 pt-4 ">
         <img  style={{textAlign:'center',margin:'0px auto'}} src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt=""/>
     </div>
        </div>
    );
}

export default SignUp2;