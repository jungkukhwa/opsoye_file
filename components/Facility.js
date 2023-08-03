import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FacilityCon from "./FacilityCon.js";

const Facility = () => {
  // useLocation Hook으로 페이지 정보 확인하기
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  // 페이지의 hash 정보 가져오기
  useEffect(() => {
    const myHash = location.hash;
    console.log(myHash);
    // 페이지에 hash가 있다면 hash === id 위치로 스크롤 이동
    // 페이지에 hash가 없다면 "#restaurant" 스크롤 이동
    if (myHash) {
      const bb = document.querySelector(myHash);
      console.log(bb);
      bb.scrollIntoView({ behavior: "smooth" });
    } else {
      const first = document.querySelector(".faclity_content");
      first.scrollIntoView({ behavior: "smooth" });
    }

    // if (myHash === undefined) {
    //   first.scrollIntoView({ behavior: "smooth" });
    // } else {
    //   const bb = document.querySelector(myHash);
    //   console.log(bb);
    //   bb.scrollIntoView({ behavior: "smooth" });
    // }
  }, [location]);

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

  const facility = {
    width: "90%",
    margin: "0 auto",
    padding: "90px 0",
    textAlign: "center",
  };

  const facilityInfo = [
    {
      id: 1,
      value: "restaurant",
      name: "레스토랑",
      content:
        "OPSOYE만의 제주 자연에서 얻은 신선한 재료로 만든 음식이 준비되어 있습니다. 최상의 음식으로 최고의 VIP를 모시겠습니다.",
      txt: "JEJU FOOD",
    },
    {
      id: 2,
      value: "kidsroom",
      name: "키즈룸",
      content:
        "여정마다 아이들과 즐거운 시간을 위해 세심하게 마련된 키즈 프로그램이 준비되어 있습니다.",
      txt: "JEJU KIDS",
    },
    {
      id: 3,
      value: "giftshop",
      name: "기프트숍",
      content:
        "계절마다의 향이 있듯이, OPSOYE만의 특별한 추억을 담을 수 있는 제품들이 준비되어 있습니다.",
      txt: "JEJU SHOP",
    },
    {
      id: 4,
      value: "fitness",
      name: "피트니스",
      content:
        "근손실을 걱정하는 헬스인을 위해 각종 운동 기구들이 준비되어 있습니다. OPSOYE에선 걱정하지 마세요.",
      txt: "JEJU SPORTS",
    },
    {
      id: 5,
      value: "pool",
      name: "수영장",
      content:
        "이국적인 분위기로 천국에 와 있는 듯한 인피니트 풀부터 다양한 재미를 느낄 수 있는 수영장과 추억을 더욱 특별한 기억으로 남게 해드립니다. ",
      txt: "JEJU POOL",
    },
  ];

  return (
    <div className="facility">
      <div style={bg} className="bg">
        <h1 style={bgH}>시설 안내</h1>
      </div>
      <div className="faclity_content" style={facility}>
        <div className="title">
          <h1>시설 안내</h1>
          <span>
            OPSOYE 호텔은 호스피탈리티 산업의 본질 탐구와 혁신을 통해 세계적
            수준의 호텔 경험을 제공합니다. 아무런 준비 없이 찾아도 머무는 동안
            최적의 편안함과 최고의 즐거움을 느낄 수 있는 곳. 선제적이고 유연한
            서비스와 끊임없이 새로운 경험들로 잊지 못할 즐거운 여정을
            선사합니다.
          </span>
        </div>
        {facilityInfo.map((itm, key) => (
          <FacilityCon
            id={itm.value}
            key={key}
            title={itm.name}
            txt={itm.content}
            img={itm.value}
            eng={itm.txt}
          />
        ))}
      </div>
    </div>
  );
};

export default Facility;
