import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/">
        <img src="https://github.com/hnayoung/scb_image/blob/main/%EC%83%81%EB%AA%85%EB%8C%80%ED%95%99%EA%B5%90_%EC%8A%A4%EC%A0%95%ED%86%B5%EB%A7%88%ED%81%AC.png?raw=true"  alt="상명대학교 스마트정보통신공학과" />
      </Link>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/board">게시판</Link></li>
        <li><Link to="/community">커뮤니티</Link></li>
        <li><Link to="/codereview">코드 분석</Link></li>
        <li><Link to="/ranking">랭킹</Link></li>
        <li><Link to="/settings" className="stjt">스정통</Link></li>
        <button className='login'></button>
      </ul>
    </nav>
  );
};

export default Navbar;
