import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  width: "80%",
};

const lnbStyle = {
  display: "flex",
  listStyle: "none",
  margin: "auto",
  justifyContent: "space-between",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
const Nav = () => {
  return (
    <nav className="lnb" style={navStyle}>
      <ul style={lnbStyle}>
        <li>
          <Link style={linkStyle} to="/Opsoye" title="Home">
            {" "}
            About
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/Cabin_01">
            {" "}
            객실 안내{" "}
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/Facility">
            {" "}
            시설 안내{" "}
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/Opsoyefood">
            {" "}
            OPSOYE 푸드{" "}
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/Map">
            {" "}
            오시는 길{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
