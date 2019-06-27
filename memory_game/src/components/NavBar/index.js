import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <>
      <nav className="navbar sticky-top">
        <div className="container-fluid">
            <ul className="nav navbar-nav">

                <li className="navbar-brand">
                    <a href="/">Memory Game</a>
                </li>
                 <li className="instructions">
                    May the Force be with you!
                </li>
                <li className="score">
                    Score: {props.score} | Top Score: {props.topscore}
                </li>
            </ul>
        </div>
      </nav>

    
    </>
  );
}

export default Navbar;