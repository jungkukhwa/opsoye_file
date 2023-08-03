import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FacilityCon = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="faclity_info" id={props.id}>
      <div
        className="bg"
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      ></div>
      <div className="cont">
        <div className="txt">
          <h1>{props.title}</h1>
          <span>{props.txt}</span>
        </div>
        <div className="img">
          <img
            src={require(`../images/home/facility/${props.img}01.jpg`)}
            alt="객실"
          />
          <span>{props.eng}</span>
        </div>
      </div>
    </div>
  );
};

export default FacilityCon;
