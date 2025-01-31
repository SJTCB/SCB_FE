import React from "react";
import MenuBar from "./MenuBar"; // 상단 메뉴 추가
import "./Mainlayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* 상단 메뉴바 */}
      <MenuBar />

      {/* 메인 콘텐츠 영역 */}
      <main className="main-content">
        {children} 
      </main>
    </div>
  );
};

export default MainLayout;
