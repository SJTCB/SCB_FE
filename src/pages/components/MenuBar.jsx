import React from "react";
import { Link } from "react-router-dom"; 
import "./MenuBar.scss";

const MenuBar = () => {
  return (
    <header className="menu-bar">
      <div className="menu-contents">
        <div className="menu-title">
          <Link to="/">스마트정보통신공학과</Link> {/* 홈으로 이동 */}
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <Link to="/PostList">게시판</Link>
          </div>
          <div className="menu-item">
            <Link to="/community">커뮤니티</Link>
          </div>
          <div className="menu-item">
            <Link to="/code-review">코드 분석</Link>
          </div>
          <div className="menu-item">
            <Link to="/ranking">랭킹</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
