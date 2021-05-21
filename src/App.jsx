import React from "react";
import {Route , Switch}  from "react-router-dom";
import MainApp from "./MainApp.jsx";
import FreeResources from "./FreeResources.jsx";
import Payment from "./Payment/Payment.jsx";
import Login from "./login/Login.jsx";
import Course_Detail from "./course_detail/Course_Detail.jsx";

function App(){
    return <div>
              <Switch>
                <Route path="/" component={MainApp} exact />
                <Route path="/FreeResources" component={FreeResources} />
                <Route path="/payment" component={Payment}/>
                <Route path="/login" component={Login}/>
                <Route path="/course_detail" component={Course_Detail}/>
            </Switch>
    </div>
}



export default App;
