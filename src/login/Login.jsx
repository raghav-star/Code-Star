import React, {useState} from "react";
import SignUp from "./SignUp.jsx";
import SignUp2 from "./SignUp2.jsx";


function Login(){

     const [login,changeMode]=React.useState(true);

     function toggle(){
         
         changeMode(!login);
     }

    //  var name="Signup";

     function Call(){
         console.log("here");
        return <h1>hello</h1>
        //  if(login){
        //      return <SignUp/>
        //  }else{
        //      return <h1>sorry</h1>
        //  }
     }

    return(
        <div style={{backgroundColor:'#f8f8f8',height: '100vh',paddingTop: '70px'}}>
               <div className="container" style={{width: '75%',background: '#fff', margin:' 0 auto',boxShadow:' 4px 4px 4px rgba(24, 18, 18, 0.2)',borderRadius: '5%',padding:'7%'}}>
                <div>{login?<SignUp/>:<SignUp2/>}</div>
                   
                   
                  <a className="ml-auto" href="#" onClick={toggle}>{login?"register to become member":"Already a Member"}</a>
               </div>

            
        </div>
    );
}
export default Login;