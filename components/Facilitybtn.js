import React, { useState } from "react";

const Facilitybtn = (props) => {
  const facilitysty = {
    width: "100%",
    height: "60px",
    border: "0",
    borderColor: "#e4e4e4",
    background: "none",
    cursor: "pointer",
    position: "relative",
    textAlign: "left",
    fontSize: "22px",
    // color: "#878787",
    color: "#ffd494",
  };

  return (
    <button
      type="button"
      onClick={props.onclick}
      style={facilitysty}
      className="facilitybtn"
      value={props.value}
    >
      <span>{props.facility}</span>
    </button>
  );
};

export default Facilitybtn;
