import React, { useEffect, useState, useMemo } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const headerStyle = {
  width: "100%",
  height: "90px",
  position: "fixed",
  top: "0",
  zIndex: "999",
};

const headerconStyle = {
  width: "90%",
  height: "90px",
  lineHeight: "90px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  position: "relative",
};

const h1Style = {
  margin: 0,
  padding: 0,
  textAlign: "center",
  lineHeight: "100px",
};

//scroll event
const Header = ({ menuItem }) => {
  const [scrollPosition, setscrollPosition] = useState(0);

  // const [isActive, setisActive] = useState("false");

  //scroll event
  const updateScroll = () => {
    setscrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    Listactive();
  }, []);

  // pc 헤더

  const Listactive = (e) => {
    const Pclists = document.querySelectorAll("header .lnb ul li");
    const Logo = document.querySelector("header .logo");

    // for (var i = 0; i < Pclists.length; i++) {
    //   Logo.addEventListener("click", function () {
    //     Pclists[i].classList.remove("active");
    //   });
    // }

    Pclists.forEach(function (btn, idx) {
      // 로고 누르면 pc헤더 부분 버튼들 선택색상 다 사라지도록
      Logo.addEventListener("click", function () {
        btn.classList.remove("active");
      });

      btn.addEventListener("click", function () {
        this.classList.add("active");

        // 한 아코디언이 켜지면 나머지 아코디언은 꺼지기
        Pclists.forEach(function (btn1, idx1) {
          if (idx !== idx1) {
            btn1.classList.remove("active");
          }
        });
      });
    });
  };

  // 모바일 헤더 버튼 클릭시 모달창 나오고 꺼지고
  const OpenClick = (e) => {
    // Subliclick();

    TabOpen();
    const CloseBtn = document.querySelector(".btn_nav .close");
    const AddOpen = document.querySelector("header .mo_modal");
    const BlackBg = document.querySelector("header .black_bg");
    const BtnAni = document.querySelector("header .btn_nav");
    console.log(e.target);
    e.target.style.display = "none";
    BlackBg.style.display = "block";
    CloseBtn.style.display = "block";
    AddOpen.classList.remove("close");
    AddOpen.classList.add("open");
    BtnAni.classList.remove("close");
    BtnAni.classList.add("open");

    //AddOpen.classList.toggle("open");
  };

  const CloseClick = (e) => {
    TabOpen();
    const OpenBtn = document.querySelector(".btn_nav .open");
    const AddOpen = document.querySelector("header .mo_modal");
    const BlackBg = document.querySelector("header .black_bg");
    const BtnAni = document.querySelector("header .btn_nav");
    const MainTab = document.querySelectorAll("header .main_tab");

    console.log(e.target);
    e.target.style.display = "none";
    BlackBg.style.display = "none";
    OpenBtn.style.display = "block";
    AddOpen.classList.remove("open");
    AddOpen.classList.add("close");
    BtnAni.classList.remove("open");
    BtnAni.classList.add("close");

    // close 버튼 누르면 아코디언 다 올라와 있도록
    for (var i = 0; i < MainTab.length; i++) {
      MainTab[i].classList.remove("active");
      MainTab[i].childNodes[1].classList.remove("active");
    }
  };

  // mo메뉴 아코디언
  function TabOpen() {
    const Chapters = document.querySelectorAll("header .main_tab button");
    console.log(Chapters);

    Chapters.forEach(function (btn, idx) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active");
        this.nextSibling.classList.toggle("active");
        this.parentNode.classList.toggle("active");

        // 한 아코디언이 켜지면 나머지 아코디언은 꺼지기
        Chapters.forEach(function (btn1, idx1) {
          if (idx !== idx1) {
            btn1.classList.remove("active");
            btn1.nextSibling.classList.remove("active");
            btn1.parentNode.classList.remove("active");
          }
        });
      });
    });
  }

  // 보류 중 모바일 header active 효과
  // const Subliclick = (e) => {
  //   //

  //   const Subtablist = document.querySelectorAll(
  //     ".mo_modal .nav .main_tab .sub_tab li"
  //   );
  //   console.log(Subtablist);

  //   Subtablist.forEach(function (btn, idx) {
  //     btn.addEventListener("click", function (e) {
  //       this.classList.add("active");

  //       // 한 아코디언이 켜지면 나머지 아코디언은 꺼지기
  //       Subtablist.forEach(function (btn1, idx1) {
  //         if (idx !== idx1) {
  //           btn1.classList.remove("active");
  //         }
  //       });
  //     });
  //   });
  // };

  return (
    //scroll event => 100 내리면 이벤트 발생
    <header
      className={scrollPosition > 100 ? "scroll-text" : "scrolled-text"}
      style={headerStyle}
    >
      <div style={headerconStyle}>
        <div className="logo">
          <Link to="/">
            <img src={require("../images/header/logo.png")} />
          </Link>
        </div>
        {/* <h1 style={h1Style}>{ title }</h1> */}
        <Nav menuItem={menuItem} />
        <div className="Mo_btn">
          <button>
            <span className="btn_nav">
              <span className="open" onClick={OpenClick}></span>
              <span className="close" onClick={CloseClick}></span>
            </span>
          </button>
        </div>
      </div>
      <div className="black_bg"></div>
      <div className="mo_modal">
        <ul className="nav">
          <li>
            <Link to="/Opsoye" title="Home">
              {" "}
              About
            </Link>
          </li>
          <li className="main_tab">
            <button>객실 안내</button>
            <ul className="sub_tab">
              <li>
                {" "}
                <Link to="/Cabin_01"> 한라봉 </Link>
              </li>
              <li>
                <Link to="/Cabin_02"> 감귤 </Link>
              </li>
              <li>
                <Link to="/Cabin_03"> 돌하르방 </Link>
              </li>
            </ul>
          </li>
          <li className="main_tab">
            <button>시설 안내</button>
            <ul className="sub_tab">
              <li>
                {" "}
                <Link to="/Facility#restaurant"> 레스토랑 </Link>
              </li>
              <li>
                <Link to="/Facility#kidsroom"> 키즈룸 </Link>
              </li>
              <li>
                <Link to="/Facility#giftshop"> 기프트숍 </Link>
              </li>
              <li>
                <Link to="/Facility#fitness"> 피트니스 </Link>
              </li>
              <li>
                <Link to="/Facility#pool"> 수영장 </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Opsoyefood"> OPSOYE 푸드 </Link>
          </li>
          <li>
            <Link to="/Map"> 오시는 길 </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
