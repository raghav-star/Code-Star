import React from 'react';
import Card from "./Card.jsx";
import cardInfo from "./cardInfo.js";

function Cards(){
    return(<div className="container-fluid">
      <div className="row">

          <div className="col-lg-3 col-md-6 col-sm-12" >
              <Card id="0" src={cardInfo[0].src} title={cardInfo[0].title} desc={cardInfo[0].desc}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
              <Card id="1" src={cardInfo[1].src} title={cardInfo[1].title}  desc={cardInfo[1].desc}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
              <Card id="2" src={cardInfo[2].src} title={cardInfo[2].title}  desc={cardInfo[2].desc}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
              <Card id="3" src={cardInfo[3].src} title={cardInfo[3].title} desc={cardInfo[3].desc}/>
          </div>

    </div>


      <div className="row">

          <div className="col-lg-3 col-md-6 col-sm-12">
              <Card id="4" src={cardInfo[4].src} title={cardInfo[4].title} desc={cardInfo[4].desc}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
              <Card id="5" src={cardInfo[5].src} title={cardInfo[5].title} desc={cardInfo[5].desc}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
              <Card id="6" src={cardInfo[6].src} title={cardInfo[6].title} desc={cardInfo[6].desc}/>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
              <Card id="7" src={cardInfo[7].src} title={cardInfo[7].title} desc={cardInfo[7].desc}/>
          </div>

       </div>
    </div>)
}

export default Cards;
