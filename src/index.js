import React from 'react';
import ReactDOM from 'react-dom/client';  // ReactDOM을 사용하여 DOM에 렌더링
import MainLayout from './page/components/Mainlayout'; // MainLayout 컴포넌트를 가져옵니다.
import './index.css'; // 전역 스타일을 가져옵니다.

const root = ReactDOM.createRoot(document.getElementById('root')); // root DOM 요소 선택
root.render(
  <React.StrictMode>
    <MainLayout /> // MainLayout 컴포넌트를 렌더링합니다.
  </React.StrictMode>
);
