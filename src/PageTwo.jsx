import React,{useEffect} from 'react';
import Heading from "./Heading.jsx";
import Cards from "./Cards.jsx";
import Aos from "aos";
import 'aos/dist/aos.css';



function PageTwo(){
    useEffect(() =>{
        Aos.init({duration:2000});
      },[]);

    return(
     <div data-aos="fade-right" id="courses" className="pageTwoHeading container">
     <div className="container pt-5">   
         <Heading text="What are you looking for?" size="40px" weight="500" moreClasses="middle"/>
    </div>
    <div className="container">
        <Cards />
    </div>
    </div>

    );
    
}

export default PageTwo;