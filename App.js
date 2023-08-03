import React, { useRef } from "react";
//import React, {useState, useEffect} from 'react'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Opsoye from "./components/Opsoye.js";
import Cabin_01 from "./components/Cabin_01.js";
import Cabin_02 from "./components/Cabin_02.js";
import Cabin_03 from "./components/Cabin_03.js";
import Facility from "./components/Facility.js";
import Homeswiper from "./components/Homeswiper.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FacilityContent from "./components/FacilityContent.js";
import Opsoyefood from "./components/Opsoyefood.js";
import ScrollToTop from "./components/ScrollToTop.js";
import KakaoMap from "./components/KakaoMap.js";

const App = () => {
  const pointRef = useRef(null);

  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Opsoye" element={<Opsoye />} />
        <Route path="/Cabin_01" element={<Cabin_01 />} />
        <Route path="/Cabin_02" element={<Cabin_02 />} />
        <Route path="/Cabin_03" element={<Cabin_03 />} />
        <Route path="/Facility" element={<Facility />} />
        <Route path="/Opsoyefood" element={<Opsoyefood />} />
        <Route path="/Map" element={<KakaoMap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
