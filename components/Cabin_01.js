import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Cabin_detail from "./Cabin_detail";

const Cabin_01 = () => {
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

  const cabin = {
    width: "90%",
    margin: "0 auto",
    padding: "90px 0",
    textAlign: "center",
  };

  return (
    <div className="cabin">
      <div style={bg} className="bg">
        <h1 style={bgH}>객실 안내</h1>
      </div>
      <div style={cabin} className="cabin_content">
        <h1>한라봉</h1>
        <ul className="tab">
          <li>
            <a href="/Cabin_01" className="active">
              한라봉
            </a>
          </li>
          <li>
            <a href="/Cabin_02">감귤</a>
          </li>
          <li>
            <a href="/Cabin_03">돌하르방</a>
          </li>
        </ul>
        <Swiper
          className="cabin01"
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            parallax: true,
            watchSlidesProgress: true,
            type: "fraction",

            el: ".swiper_pagination",
            formatFractionCurrent: function (number) {
              return "0" + number;
            },
            formatFractionTotal: function (number) {
              return "0" + number;
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="bg bg1 "></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg4"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg5"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg bg6"></div>
          </SwiperSlide>
        </Swiper>

        <Cabin_detail cabin_name="한라봉" />
      </div>
    </div>
  );
};

export default Cabin_01;
