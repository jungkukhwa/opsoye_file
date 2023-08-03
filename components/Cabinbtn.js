import React from "react";
import { Link } from "react-router-dom";
import "../css/master.css";

const Cabinbtn = (props) => {
  const cabinsty = {
    width: "50%",
    height: "60px",
    borderWidth: "0 0 1px 0",
    borderColor: "#e4e4e4",
    background: "none",
    cursor: "pointer",
    position: "relative",
    textAlign: "left",
  };

  return (
    <div>
      <Link to={props.link}>
        <button style={cabinsty} className="cabinbtn">
          <span>{props.linktitle}</span>
        </button>
      </Link>
    </div>
  );
};

export default Cabinbtn;
