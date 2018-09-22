import React from "react";
import "./cards.css";

const Cards = props => (
     <div className="container">
    <div className = "cards">
        <div className = "image-container">
        <img id={props.id} alt={props.name} src={props.image} onClick= {() => props.handleClick(props.id)}/>
        </div>
    </div>
     </div>
);

export default Cards;


