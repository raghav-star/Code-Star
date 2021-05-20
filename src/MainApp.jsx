import React,{ useEffect } from "react";
import Header from "./Header.jsx";
import PageOne from "./PageOne.jsx";
import PageTwo from "./PageTwo.jsx";
import PageThree from "./PageThree.jsx";
import PageFour from "./PageFour.jsx";
import PageFive from "./PageFive.jsx";
import PageSix from "./PageSix.jsx";
import Footer from "./Footer.jsx";




function MainApp(){
 

    return <div>
      <Header  />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour  />
      <PageFive />
      <PageSix/>
      <Footer/>
    </div>
}


export default MainApp;
