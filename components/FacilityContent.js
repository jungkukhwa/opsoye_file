import React from "react";
import Barbtn from "./Barbtn";

const FacilityContent = (props) => {
  return (
    <div className="facility_con" key={props.key}>
      <div className="img01">
        <img
          src={require(`../images/home/facility/${props.value}01.jpg`)}
          alt={props.facility}
        />
      </div>
      <div className="img02">
        <img
          src={require(`../images/home/facility/${props.value}02.jpg`)}
          alt={props.facility}
        />
        <p>{props.facility}</p>
        <span className="img02_txt">{props.content}</span>
        <Barbtn link={`/Facility#${props.value}`} />
      </div>
    </div>
  );
};

export default FacilityContent;
