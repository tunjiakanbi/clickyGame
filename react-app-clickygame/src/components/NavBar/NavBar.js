import React from "react";
import "./navbar.css";

const NavBar = props => (
    <div className = "navbar navbar-default navbar-fixed-top">
        <section className = "container">
            <div className = "score">Current Score: {props.score} </div>
            <div className = "highscore">High Score: {props.highscore}</div>
        </section>
    </div>
);

export default NavBar;