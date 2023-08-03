import React from "react";
//import { FaWarehouse, FaBeer, FaRegBell } from "react-icons/fa";

const footerStyle = {
  height: "300px",
  background: "#111",
  clear: "both",
  position: "relative",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      {/* 
            <FaRegBell />
      <FaBeer style={{ color: "red" }} />
      <FaWarehouse style={{ color: "red" }} /> */}
      <div className="content">
        <p>㈜호텔옵소예, 제주특별자치도 제주시 애월읍 00 / +82-64-000-0000</p>
        <span>
          대표이사 정국화 / 사업자등록번호 000-00-00000 <br />/ 통신판매신고번호
          짱구0000호
        </span>
        <address> copy &copy; {new Date().getFullYear()} </address>
      </div>
    </footer>
  );
};

export default Footer;
