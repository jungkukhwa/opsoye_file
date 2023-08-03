import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/master.css";
import Barbtn from "./Barbtn";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "../css/master.css";
// import 'swiper/css/pagination';
// import "swiper/css/navigation";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";

const Homefood = () => {
  useEffect(() => {
    AOS.init();
  });

  const Homefood = {
    padding: "150px 0px",
    overflow: "hidden",
    position: "relative",
  };
  const Homefoodflex = {
    flexDirection: "row-reverse",
  };
  return (
    <div className="homefood" style={Homefood}>
      <div className="bg" data-aos="fade-left" data-aos-duration="1500"></div>
      <div className="flex" style={Homefoodflex}>
        <div className="food_con">
          <p>OPSOYE FOOD</p>
          <h1>청정 자연을 품고 제주를 담다</h1>
          <span className="food_con_span">
            직접 재배한 제주시 농산물과 국내산 재료로 만든 OPSOYE만의 신선한
            조식을 만나보세요.
          </span>
          <Barbtn link="/Opsoyefood" />
        </div>
        <div className="food_imgs">
          {/*<div className='food_img1'></div>
                <div className='food_img2'></div>*/}

          {/* <img class="food_img1" alt="food" title="opsoyefood"></img>
                <img class="food_img2" alt="food" title="opsoyefood"></img> */}
          <Swiper
            className="Home_swiper02"
            effect={"fade"}
            direction={"vertical"}
            //    touchRatio= {0}
            allowTouchMove={false}
            loop={true}
            autoHeight={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="food_img_wrap">
                <div className="img_back">
                  <img src={require("../images/home/food01.jpg")} />
                </div>
                <div className="img_front">
                  <img src={require("../images/home/food04.jpg")} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="food_img_wrap">
                <div className="img_back">
                  <img src={require("../images/home/food02.jpg")} />
                </div>
                <div className="img_front">
                  <img src={require("../images/home/food03.jpg")} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="food_img_wrap">
                <div className="img_back">
                  <img src={require("../images/home/food05.jpg")} />
                </div>
                <div className="img_front">
                  <img src={require("../images/home/food06.jpg")} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Homefood;
