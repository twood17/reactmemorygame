import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="container wrapper-background">{props.children}</div>;
}

export default Wrapper;