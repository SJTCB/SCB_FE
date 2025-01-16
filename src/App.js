import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/login/LoginForm";
import SignupForm from "./pages/signup/SignupForm";
import Community from "./pages/components/Community"; // 경로 수정
import NotFound from "./pages/NotFound"; // 404 페이지 가져오기
import MainLayout from "./pages/components/Mainlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/community/:communityName" element={<Community />} /> {/* 커뮤니티 페이지 */}
        <Route path="/" element={<MainLayout />} />
        <Route path="*" element={<NotFound />} /> {/* 잘못된 경로에 대해 404 페이지 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
