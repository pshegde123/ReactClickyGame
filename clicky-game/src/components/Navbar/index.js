import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div className="title">
        <nav className="navbar">
            <ul>
                <li>
                    <a className="title" href="/">Clicky Game</a>
                </li>
                <li>Click an image to begin!</li>
                <li>Score: {props.score} | TopScore: {props.topscore}</li>
            </ul>
        </nav>
    </div>);
}

export default Navbar;
