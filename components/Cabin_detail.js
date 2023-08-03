import React from "react";

const Cabin_detail = (props) => {
  return (
    <div className="cabin_detail">
      <h1>{props.cabin_name}</h1>
      <span className="datail_txt">
        나무를 소재로 한 고급스러운 인테리어가 안정감을 주는 객실입니다.
        <br />
        스튜디오 타입의 객실에서 창 너머 울창한 숲을 감상하며 몸과 마음의 쉼을
        온전히 느낄 수 있습니다.
      </span>
      <div className="cabin_bb"></div>
      <div className="cabin_info">
        <dl>
          <dt>
            <h3>기본 정보</h3>
          </dt>
          <dd>
            <span className="info_tit">위치</span>
            <span className="info_cont">OPSOYE 풀빌라동</span>
          </dd>
          <dd>
            <span className="info_tit">특징</span>
            <span className="info_cont">
              제주 감성을 느낄 수 있는 인테리어의 프라이버시를 보장하는 공간
            </span>
          </dd>
          <dd>
            <span className="info_tit">입실 시간</span>
            <span className="info_cont">15:00</span>
          </dd>
          <dd>
            <span className="info_tit">정원</span>
            <span className="info_cont">
              기준 인원 6인 (최대 8인, 추가금 1인당 20,000원)
            </span>
          </dd>
          <dd>
            <span className="info_tit">퇴실 시간</span>
            <span className="info_cont">12:00</span>
          </dd>
          <dd>
            <span className="info_tit">구조</span>
            <span className="info_cont">
              1층 - 거실 1, 침실 2, 욕실 1, 욕조 1, 주방
              <br />
              2층 - 거실1, 침실1, 욕실 1
            </span>
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>이용 안내</h3>
          </dt>
          <dd>
            <span className="info_tit">유아 및 아동 침구류 </span>
            <span className="info_cont">
              숙박 가능한 투숙객 최소 나이 : 없음
            </span>
          </dd>
          <dd>
            <span className="info_tit">미성년자 입실안내</span>
            <span className="info_cont">
              청소년 보호법에 의거하여 미성년자의 경우 보호자의 동의 또는 동행
              시에만 숙박이 가능합니다.
            </span>
          </dd>
          <dd>
            <span className="info_tit">입실/퇴실 시간변경</span>
            <span className="info_cont">
              조기 입실 및 지연 퇴실 시 추가 요금을 청구하게 됩니다.
            </span>
          </dd>
          <dd>
            <span className="info_tit">적정 인원</span>
            <span className="info_cont">
              실제 투숙객 인원이 예약된 투숙객 인원보다 많은 경우 추가 요금을
              지불해야 합니다.
            </span>
          </dd>
          <dd>
            <span className="info_tit">전 객실 금연</span>
            <span className="info_cont">
              국민건강증진법 개정에 따른 금연 정책을 시행 중입니다.
            </span>
          </dd>
          <dd>
            <span className="info_tit">퇴실 전 객실 정리</span>
            <span className="info_cont">
              분리수거 미시행시 추가요금을 청구 할 수 있습니다.
            </span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Cabin_detail;
