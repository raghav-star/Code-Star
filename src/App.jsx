import React from "react";
import {Route , Switch}  from "react-router-dom";
import MainApp from "./MainApp.jsx";
import FreeResources from "./FreeResources.jsx";

function App(){
    return <div>
              <Switch>
                <Route path="/" component={MainApp} exact />
                <Route path="/FreeResources" component={FreeResources} />
            </Switch>
    </div>
}



export default App;
