/* global kakao */
import React, { useEffect, useState } from "react";

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(33.4620455, 126.3292348),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(33.4620455, 126.3292348);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  const bg = {
    width: "100%",
    padding: "125px 0",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const bgH = {
    textAlign: "center",
    color: "#fff",
  };

  const kakaomapsty = {
    width: "90%",
    margin: "0 auto",
    padding: "90px 0",
    textAlign: "center",
  };

  return (
    <div className="kakaomap">
      <div style={bg} className="bg">
        <h1 style={bgH}>오시는 길</h1>
      </div>
      <div className="kakaomap_content" style={kakaomapsty}>
        <div id="map" style={{ width: "99%", height: "500px" }}></div>
      </div>
    </div>
  );
};

export default KakaoMap;
