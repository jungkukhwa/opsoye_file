import React, { useEffect } from "react";
import "../css/master.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeCon = (props) => {
  useEffect(() => {
    AOS.init();
  });

  const Homeconsty = {
    position: "relative",
    padding: "150px 0",
    overflow: "hidden",
  };

  return (
    <div style={Homeconsty}>
      <div className="bg_color" data-aos="fade-right" data-aos-duration="1500">
        <div className="bg_color2"></div>
      </div>
      <div className="flex">
        <div className="content1">
          <h1>{props.title1}</h1>
          <p>{props.content}</p>
          <div className="con_img">
            <img
              src={require(`../images/home/${props.imageName1}.jpg`)}
              alt={props.imageName1}
            />
          </div>
        </div>

        <div className="content2">
          <div className="con_img">
            <img
              src={require(`../images/home/${props.imageName2}.jpg`)}
              alt={props.imageName2}
            />
          </div>
          <h1>{props.title2}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeCon;
