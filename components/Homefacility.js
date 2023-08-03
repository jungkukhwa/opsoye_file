import React, { useState, useEffect } from "react";
import Facilitybtn from "./Facilitybtn.js";
import FacilityContent from "./FacilityContent.js";

const Homefacility = () => {
  const [Content, setContent] = useState("restaurant");

  // 렌더링시 배열 첫번째 버튼에 'active' 클래스가 되어있도록 작업
  useEffect(() => {
    const btn = document.querySelectorAll(".facility_nav button");
    console.log(btn);
    btn[0].classList.add("active");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  const hadleClickBtn = (e) => {
    e.preventDefault();
    const handle = e.target.value;
    setContent(handle);
    console.log(handle);
    console.log(e.target);
    const active = e.target;
    const BtnAll = document.querySelectorAll(".facility_nav button");
    console.log(BtnAll);

    // 버튼 클릭시 e.target은 'active' 클래스 추가 나머지는 'active' 클래스 삭제

    BtnAll.forEach(function (item) {
      item.classList.remove("active");
      active.classList.add("active");
    });
  };

  /*BtnAll.forEach(function (item) {
      item.addEventListener("click", function () {
        BtnAll.forEach(function (e) {
          e.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  };
*/

  const Facilitys = [
    {
      id: 0,
      facility: "레스토랑",
      value: "restaurant",
      content:
        "OPSOYE만의 제주 자연에서 얻은 신선한 재료로 만든 음식이 준비되어 있습니다. 최상의 음식으로 최고의 VIP를 모시겠습니다.",
    },
    {
      id: 1,
      facility: "키즈룸",
      value: "kidsroom",
      content:
        "여정마다 아이들과 즐거운 시간을 위해 세심하게 마련된 키즈 프로그램이 준비되어 있습니다.",
    },
    {
      id: 2,
      facility: "기프트숍",
      value: "giftshop",
      content:
        "계절마다의 향이 있듯이, OPSOYE만의 특별한 추억을 담을 수 있는 제품들이 준비되어 있습니다.",
    },
    {
      id: 3,
      facility: "피트니스",
      value: "fitness",
      content:
        "근손실을 걱정하는 헬스인을 위해 각종 운동 기구들이 준비되어 있습니다. OPSOYE에선 걱정하지 마세요.",
    },
    {
      id: 4,
      facility: "수영장",
      value: "pool",
      content:
        "이국적인 분위기로 천국에 와 있는 듯한 인피니트 풀부터 다양한 재미를 느낄 수 있는 수영장과 추억을 더욱 특별한 기억으로 남게 해드립니다. ",
    },
  ];

  // filter 함수를 이용
  const result = Facilitys.filter((item) => item.value === Content);
  console.log(result);
  console.log(result[0].facility);

  return (
    <div className="home_facility">
      <h1>
        싱그러운 자연과 함께하는 <b>OPSOYE</b>에서
        <br />
        여유로운 휴식을 느껴보세요
      </h1>
      <div className="facility_nav">
        {Facilitys.map((facility, key) => (
          <Facilitybtn
            key={key}
            onclick={hadleClickBtn}
            value={facility.value}
            facility={facility.facility}
          />
        ))}
      </div>
      {/* <span>{Content}</span> */}
      <div>
        <FacilityContent
          key={result[0].id}
          value={result[0].value}
          facility={result[0].facility}
          content={result[0].content}
        />
      </div>
    </div>
  );
};

export default Homefacility;
