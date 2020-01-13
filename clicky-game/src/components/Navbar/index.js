import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    
        <nav className="navbar">
            <ul>
                <li>
                    <a className="title" href="/">Clicky Game</a>
                </li>
                <li>{props.message}</li>
                <li>Score: {props.score} | TopScore: {props.topScore}</li>
            </ul>
        </nav>
    );
}

export default Navbar;
