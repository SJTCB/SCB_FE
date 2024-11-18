import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Menu from '../component/Menu';
import Profile from '../component/Profile';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Main from '../component/Main';
import Com from '../component/Com';
import Code from '../component/Code';

const Home = () => {
  const location = useLocation(); // 현재 URL 경로를 가져옴
  const [communityView, setCommunityView] = useState(''); // Community 뷰 상태

  const renderComponent = () => {
    switch (location.pathname) {
      case '/community':
        return <Com view={communityView} />; // 선택된 Community 옵션 전달
      case '/codereview':
        return <Code />;
      default:
        return <Main />;
    }
  };

  return (
    <div>
      <Navbar />
      <Container fluid className="p-0"> {/* 기본 패딩 제거 */}
        <Row className="g-0" style={{ height: '100vh' }}> {/* 그리드 간격 제거 및 높이 설정 */}
          <Col lg="auto" style={{ width: '70px', backgroundColor: 'gray' }}> {/* 회색 세로 컴포넌트 */}
            <Profile />
          </Col>
          <Col lg={2} style={{ backgroundColor: '#f8f9fa' }}> {/* 메뉴 영역 */}
            <Menu setCommunityView={setCommunityView} />
          </Col>
          <Col lg={9}>
            {renderComponent()} {/* 동적으로 컴포넌트 렌더링 */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
