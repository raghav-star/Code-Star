import React from 'react';

function BoxShadow(props){
   return <div className="boxShadow" style={{border:'5px solid #dc3545',borderRadius:'15px'}}>{props.text}</div>
}

export default BoxShadow;