import React from "react";
import "./style.css";

const FriendCard = props=> (
  
    <div className="card col-md-3 bg-secondary" onClick={()=>props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  
)

export default FriendCard;
