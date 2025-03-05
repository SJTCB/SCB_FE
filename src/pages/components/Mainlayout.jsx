import React, { useRef } from "react";
import MenuBar from "./MenuBar"; // 상단 메뉴 추가
import Introduction from "../home/Introduction"; // 학과 소개
import GuestBook from "../home/GuestBook"; // 방명록
import Photo from "../home/Photo"; // 사진 섹션
import "../style/Main/Mainlayout.scss";
import makaoroma from"../../assets/makaoroma.png"
const MainLayout = () => {
  // 🔹 각 섹션에 대한 ref 생성
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const guestRef = useRef(null);
  const photoRef = useRef(null);

  // 🔹 스크롤 이동 핸들러
  const moveHandler = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-layout">
      <div className="main-container">
      <img src={makaoroma} alt="로고" className="main-image" />
      <h2> 상명대학교 스마트 코딩 배틀에 오신 걸 환영합니다.</h2>
      </div>
      {/* 🔹 MenuBar에 스크롤 이동 함수 전달 */}
      <MenuBar
        moveToHome={() => moveHandler(homeRef)}
        moveToIntro={() => moveHandler(introRef)}
        moveToGuest={() => moveHandler(guestRef)}
        moveToPhoto={() => moveHandler(photoRef)}
      />

      
      <Introduction ref={introRef} />
      <GuestBook ref={guestRef} />
      <Photo ref={photoRef} />
    </div>
  );
};

export default MainLayout;