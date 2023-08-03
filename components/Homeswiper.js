import { React, useState } from "react";
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

const Homeswiper = () => {
  const bar = document.querySelector(".swiper_pagination .bar span");

  return (
    <div className="homeswiper">
      <Swiper
        className="Home_swiper01"
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
          // type: 'bullets',
          type: "fraction",
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + (menu[index]) + '</span>';
          // },
          el: ".swiper_pagination",
          formatFractionCurrent: function (number) {
            return "0" + number;
          },
          formatFractionTotal: function (number) {
            return "0" + number;
          },
          renderFraction: function (current, total) {
            return (
              '<span class="swiper-pagination-current">' +
              current +
              "</span>" +
              '<div class="bar"> <span></span> </div> <span class="swiper-pagination-total">' +
              total +
              "</span>"
            );
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
          <div className="bg bg1 ">
            <div className="black"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg bg2">
            <div className="black"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg bg3">
            <div className="black"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg bg4">
            <div className="black"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper_area">
        <div className="title">
          <h1>대자연과 조화를 이루는 최적의 명품 코스</h1>
          <span>청명한 하늘과 푸른 들판이 함께하는 공간</span>
        </div>
        <div className="swiper_flex">
          <div className="swiper_pagination"></div>
          <div className="swiper_navigation">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeswiper;
