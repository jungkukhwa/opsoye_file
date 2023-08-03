import React from "react";
import Homeswiper from "./Homeswiper";
import HomeCon from "./HomeCon";
import Homecabin from "./Homecabin";
import Homefood from "./Homefood.js";
import Homefacility from "./Homefacility.js";
import KakaoMap from "./KakaoMap";

const Home = () => {
  return (
    <div>
      <Homeswiper />
      <HomeCon
        title1={[
          "바쁜 일상을 벗어나",
          <br />,
          "온전한 휴식과 힐링이 만나는 곳",
        ]}
        title2={[
          "OPSOYE 의 모든 순간은",
          <br />,
          "즐거움으로 가득 찬",
          <br />,
          "하나의 여정이 됩니다.",
        ]}
        content={["환상의 나라, 제주", <br />, "대자연 속으로 떠나는 여행"]}
        imageName1={"home_01"}
        imageName2={"home_03"}
      />
      <Homecabin title={["Locally Inspired Lifestyle Hotel"]} />
      <Homefood />
      <Homefacility />
    </div>
  );
};

export default Home;
