import React from "react";

function Heading2(props){
    return <div className={"heading2 topBottomMargin "+props.moreClass}>
        {props.text}
    </div>
}


export default Heading2;