import React from "react";
import "./wrapper.css";

const Wrapper = props => (
   //<div className = "container">
     <div className="wrapper">
        {props.children}
    </div>
 // </div>
);

export default Wrapper;


