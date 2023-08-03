import React from "react";

const Opsoye = () => {
  const opsoye = {
    width: "90%",
    margin: "0 auto",
    padding: "90px 0",
    textAlign: "center",
  };

  const bg = {
    width: "100%",
    padding: "125px 0",
    // backgroundImage: `url('../images/home/alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const bgH = {
    textAlign: "center",
    color: "#fff",
  };

  return (
    <div className="opsoye">
      <div style={bg} className="bg">
        <h1 style={bgH}>OPSOYE</h1>
      </div>
      <div style={opsoye} className="opsoye_content">
        <div className="top_con">
          <h1 className="title">OPSOYE ABOUT US</h1>
          <span className="txt">
            OPSOYE는 문화창조자들과 밀레니얼 세대에게 새로운 경험과 영감을
            전달하기 위해 만들어진 라이프스타일 호텔입니다.
          </span>
        </div>
        <div>
          <img src={require("../images/about/about01.jpg")} />
        </div>

        <div className="opsoye_con01">
          <div className="title">
            <h1>
              청정한 자연의 섬,
              <br />
              제주에서 만나는 특별한 즐거움
            </h1>
          </div>
          <div className="txt">
            <span>
              여행은 낯선 곳으로의 여정 속에서 다양한 라이프스타일을 가진
              사람들과의 만남을 통해 새로운 경험과 발견을 하고, 끊임없이 창조와
              성장을 해가는 과정입니다. 라이프스타일 호텔 OPSOYE 그 여정에
              함께합니다.
            </span>
            <p>
              <b>2023.04.01</b>
              <br />
              개관일
            </p>
          </div>
        </div>
        <div className="opsoye_con02">
          <div className="bg"></div>
          <div className="con">
            <h1>OPSOYE TO DELIGHTFUL MOMENTS</h1>
            <p>OPSOYE 의 모든 순간은 즐거움으로 가득 찬 하나의 여정이 됩니다</p>
            <span>
              OPSOYE 호텔의 본질 탐구와 혁신을 통해 세계적 수준의 호텔 경험을
              제공합니다. 아무런 준비 없이 찾아도 머무는 동안 최적의 편안함과
              최고의 즐거움을 느낄 수 있는 곳. 선제적이고 유연한 서비스와
              끊임없이 새로운 경험들로 잊지 못할 즐거운 여정을 선사합니다.
            </span>
            <div className="img">
              <img src={require("../images/about/about02.jpg")} />
              <img src={require("../images/about/about03.jpg")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opsoye;
