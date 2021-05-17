import React from 'react';
function Card(props){
      return(
        <div className="card"
  data-mdb-ripple-color="light"  style={{width: '',borderRadius:'1px 20px 1px 20px',border:'3px solid green',padding:'20px',backgroundColor:'' }}>
  <img className="card-img-top" src={props.link} alt="Card image cap" />
  <div className=" container-fluid card-body " style={{paddingTop:'4px'}}>
    <div className=" card-text " style={{fontSize: '20px',textAlign:'center',fontWeight:'600',color:'green',textDecoration:'underline'}}>{props.text}
    </div>
  </div>
</div>);
  }

export default Card;