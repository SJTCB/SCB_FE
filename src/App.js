import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar"; 
import PostList from "./pages/post";
import Community from "./pages/Community";
import CodeReview from "./pages/CodeReview";
import Ranking from "./pages/Ranking";
import Home from "./pages/Home"; // 홈 화면
import NotFound from "./pages/NotFound"; // 404 페이지

function App() {
  return (
    <BrowserRouter>
      {/* 상단 메뉴바 */}
      <MenuBar />

      {/* 페이지 라우팅 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PostList" element={<PostList />} />
        <Route path="/community" element={<Community />} />
        <Route path="/code-review" element={<CodeReview />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="*" element={<NotFound />} /> {/* 없는 경로 404 처리 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
