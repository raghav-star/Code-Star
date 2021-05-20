import React,{useEffect} from "react";
import BoxShadow from "./BoxShadow.jsx";
import Review from "./Review.jsx";
import Aos from "aos";
import 'aos/dist/aos.css';

function PageSix(){
  useEffect(() =>{
    Aos.init({duration:2000});
  },[]);


    return(
    <div data-aos="fade-left">
    <div className="container">
        <div className="row">
        <div className="col-md-4 mb-5">
                
                 <Review text="Notes for topics like Operating Systems, DBMS and System Design. Special Development Classes which are aimed at Development of Projects. I joined PepCoding in the June-July 2019 Batch and after dedicated efforts of the team, I was able to grab a Day 0 Internship Offer" src="https://www.pepcoding.com/data/placements/photo/archit_aggarwal.jpg" name="Archit Aggarwal" />
        </div>
          
               <div className="col-md-4 mb-5">
                 <Review text="The foundation batch has ~50 lectures, covering the very basics and also solidly consolidating topics like DP, Graphs, etc., which are feared by students - beginners and seniors alike.The interview prep batch also has nearly the same number of lectures and is extremely helpful" src="https://www.pepcoding.com/data/placements/photo/priyansh_verma.jpg" name="Priyanshu Verma" />

               </div>
               <div className="col-md-4 mb-5">
                 <Review text=" I remember so many days when Sumeet sir couldn’t even complete 2 questions in a 4 hour class because he was discussing every student’s approach for the first question itself. OMG SERIOUSLY? ANY TEACHER COULD DO THAT? I CAN’T BELIEVE BECAUSE I HAVEN’T MET" src="https://www.pepcoding.com/data/placements/photo/sanya_sareen.jpg" name="sanya sareen" />

               </div> 
        </div>
    </div></div>);
}

export default PageSix;

 