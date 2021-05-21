import React from 'react';
import Header from "../free/Header.jsx";
import cardInfo from "../cardInfo.js"
import Information from "./Information.jsx";

function Course_Detail(props){
  return(<div style={{backgroundColor:'#132c33',height:'100vh'}} >
    <Header/>
    <div className="container-fluid pt-5" >
    <div className="row">
    <div className="col-md-8">
    <Information courseName={cardInfo[props.location.state.id].title} src={cardInfo[props.location.state.id].src} desc={cardInfo[props.location.state.id].desc} />
    </div>
    <div className="col-md-4 pb-5 mt-4">
    <iframe style={{borderRadius:'5%'}} width="450px" height="400px" src={cardInfo[props.location.state.id].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    </div>

</div>
  );
}
export default Course_Detail;
