import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { FcHome, FcCollaboration, FcFolder } from 'react-icons/fc'; // 아이콘 import
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';



const Menu = ({setCommunityView}) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // 페이지 이동
  };

  return (
    <div className="menu-container">
      <Row
        className="menu-item"
        onClick={() => handleNavigation('/')}
      > 
        <div className="menu-icon"><FcHome /></div>
        <div className="menu-text">Home</div>
      </Row>
      <Row
        className="menu-item"
        onClick={() => handleNavigation('/community')}
      >
        <div className="menu-icon"><FcCollaboration /></div>
        <NavDropdown 
          title="Community" 
          id="basic-nav-dropdown" 
          style={{ marginLeft: '10px', fontSize: '1.2rem' }}
        >
          <NavDropdown.Item onClick={() => setCommunityView('Question')}>#질문방</NavDropdown.Item>
          <NavDropdown.Item onClick={() => setCommunityView('Career')}>#진로고민방</NavDropdown.Item>
          <NavDropdown.Item onClick={() => setCommunityView('Talk')}>#수다방</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => setCommunityView('Unknown')}>#ㅁㅇㄹㅁㅇㄹ</NavDropdown.Item>
        </NavDropdown> 
      </Row>
      <Row
        className="menu-item"
        onClick={() => handleNavigation('/codereview')}
      >
        <div className="menu-icon"><FcFolder /></div>
        <div className="menu-text">Code Review</div>
      </Row>
    </div>
  );
};

export default Menu;
