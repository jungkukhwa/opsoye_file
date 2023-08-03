import React, { useState } from "react";
import Barbtn from "./Barbtn";
import CabinBtn from "./Cabinbtn";
import "../css/master.css";

const Homecabin = (props) => {
  const Homecabinsty = {
    padding: "150px 0",
    overflow: "hidden",
  };

  const Cabinbtnlink = [
    {
      id: 1,
      cabin: "한라봉",
      link: "/Cabin_01",
    },
    {
      id: 2,
      cabin: "감귤",
      link: "/Cabin_02",
    },
    {
      id: 3,
      cabin: "돌하르방",
      link: "/Cabin_03",
    },
  ];

  return (
    <div style={Homecabinsty}>
      <div className="flex">
        <div className="cabin_con">
          <h1>{props.title}</h1>
          <Barbtn link="/Opsoye" />
          <div className="cabins">
            {Cabinbtnlink.map((cabin, key) => (
              <CabinBtn key={key} link={cabin.link} linktitle={cabin.cabin} />
            ))}
          </div>
        </div>
        <div className="cabin_img">
          <img src={require(`../images/home/cabin.jpg`)} alt="객실" />
        </div>
      </div>
    </div>
  );
};

export default Homecabin;
