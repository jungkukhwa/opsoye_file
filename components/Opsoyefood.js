import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/effect-fade";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";

const Opsoyefood = () => {
  useEffect(() => {
    AOS.init();
  });

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
  return (
    <div className="opsoyefood">
      <div style={bg} className="bg">
        <h1 style={bgH}>OPSOYE 푸드</h1>
      </div>
      <div className="opsoyefood_content">
        <div className="food_top_con">
          <h1>OPSOYE FOOD</h1>
          <span>
            여행 후 지친 기력과 입맛을 보충할 수 있도록 옵소예푸드에서는 천혜의
            자연 속 농장에서 직접 재배한 신선한 재료들로 계절에 맞는 건강한
            식단을 구성하고 있습니다.
          </span>
          <img src={require("../images/food/top_img.jpg")} />
        </div>
        <div className="food_farm">
          <div className="title">
            <p>OPSOYE FARM</p>
            <h1>자연을 담은 건강한 식재료</h1>
            <span>
              청정 자연 제주에서 정성을 다해 재배한 우리 농산물을 만나보세요.
            </span>
          </div>
          <div className="farm_con">
            <div>
              <img src={require("../images/food/food01.jpg")} />
              <h1>블루베리(6월)</h1>
              <span>미국 타임지에서 선정한 10대 슈퍼 푸드</span>
            </div>
            <div>
              <img src={require("../images/food/food02.jpg")} />
              <h1>찰옥수수(7월)</h1>
              <span>풋옥수수의 한 종류로 차진 맛이 특징</span>
            </div>
            <div>
              <img src={require("../images/food/food03.jpg")} />
              <h1>적색 밤 고구마(7월)</h1>
              <span>식이섬유소가 많아 말랑하고 달짝지근한 밤 맛이 특징</span>
            </div>
            <div>
              <img src={require("../images/food/food04.jpg")} />
              <h1>수미감자(6월)</h1>
              <span>전분이 많아 고소한 맛이 특징</span>
            </div>
          </div>
          <div className="farm_mo">
            <Swiper
              className="opsoyefood"
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
              slidesPerView={1.5}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div>
                  <img src={require("../images/food/food01.jpg")} />
                  <h1>블루베리(6월)</h1>
                  <span>미국 타임지에서 선정한 10대 슈퍼 푸드</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={require("../images/food/food02.jpg")} />
                  <h1>찰옥수수(7월)</h1>
                  <span>풋옥수수의 한 종류로 차진 맛이 특징</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={require("../images/food/food03.jpg")} />
                  <h1>적색 밤 고구마(7월)</h1>
                  <span>
                    식이섬유소가 많아 말랑하고 달짝지근한 밤 맛이 특징
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={require("../images/food/food04.jpg")} />
                  <h1>수미감자(6월)</h1>
                  <span>전분이 많아 고소한 맛이 특징</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="food_farm foods">
          <div
            className="bg_color"
            data-aos="fade-right"
            data-aos-duration="1500"
          ></div>
          <div className="flex">
            <div className="title">
              <p>OPSOYE FARM</p>
              <h1>자연을 담은 건강한 먹거리</h1>
              <span>OPSOYE가 정성껏 준비한 음식들을 만나보세요.</span>
            </div>

            <div className="farm_mo">
              <Swiper
                className="opsoyefood"
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
                slidesPerView={1.5}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div>
                    <img src={require("../images/food/cake.jpg")} />
                    <h1>팬케이크</h1>
                    <span>신선한 제철 과일을 얹은 팬케이크입니다.</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={require("../images/food/burger.jpg")} />
                    <h1>흑돼지버거</h1>
                    <span>제주의 흑돼지 패티로 만든 햄버거입니다.</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={require("../images/food/taco.jpg")} />
                    <h1>JEJU's 타코</h1>
                    <span>제주의 흑돼지와 각종 야채들로 만든 타코입니다.</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={require("../images/food/steak.jpg")} />
                    <h1>한우 스테이크</h1>
                    <span>1등급 한우를 구워 준비했습니다.</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={require("../images/food/meet.jpg")} />
                    <h1>감귤 치킨 스테이크</h1>
                    <span>제주의 감귤 소스를 얹은 치킨 스테이크입니다.</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opsoyefood;
