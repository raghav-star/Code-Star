import React from 'react';
import Header from "../free/Header.jsx";
import cardInfo from "../cardInfo.js"
import Information from "./Information.jsx";

function Course_Detail(props){
  return(<div style={{backgroundColor:'#132c33',height:'110%',backgroundAttachment:'fixed',color:'white'}} >
    <Header/>
    <div className="container-fluid pt-2" >
    <div className="row">
    <div className="col-md-8">
    <Information courseName={cardInfo[props.location.state.id].title} src={cardInfo[props.location.state.id].src} desc={cardInfo[props.location.state.id].desc} />
    </div>
    <div className="col-md-4 pb-5 mt-4">
    <iframe style={{borderRadius:'5%'}} width="450px" height="300px" src={cardInfo[props.location.state.id].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    </div>
    <div className="mt-4 ml-4 pb-3" >
    <div className="bold" style={{fontSize:'1.3rem'}}>Also get</div>
    <ul class="list-style-gradient-bullet " style={{fontSize:'1.1rem'}}>
    <li class="mb-2">Placement and Internship assistance through Hiring Blocks</li>
    <li class="mb-2">Resume building tips</li>
    <li class="mb-2">Interview preparation</li>
    <li class="mb-2">Free access to Online Course</li>
    <li class="mb-2">Skill enhancement classes</li>
    <li class="mb-2">Start with online platforms like Leetcode, Codeforces etc.</li></ul>
    </div>

</div>
  );
}
export default Course_Detail;
