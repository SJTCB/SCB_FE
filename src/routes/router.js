import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from "../pages/components/Mainlayout";
import QuestionDetailPage from "../components/QuestionDetailPage";

const LoginForm = lazy(() => import("../pages/login/LoginForm"));
const SignupForm = lazy(() => import("../pages/signup/SignupForm"));
const CodeReview = lazy(() => import("../pages/codeReview/CodeReview"));
const Community = lazy(() => import("../pages/components/Community")); // 커뮤니티 컴포넌트 import
const CommentDetail = lazy(() => import("../pages/comments/CommentDetail")); // 댓글 상세 컴포넌트 import

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout /> {/* MainLayout을 홈으로 설정 */}
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginForm />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <SignupForm />
      </Suspense>
    ),
  },
  {
    path: "/code-review",
    element: (
      <Suspense fallback={<Loading />}>
        <CodeReview />
      </Suspense>
    ),
  },
  {
    path: "/community",
    element: <Navigate to="/community/study" replace />,  //기본 경로를 /community/study로 리다이렉트트
  },
  {
    path: "/community/:category", 
    element: (
      <Suspense fallback={<Loading />}>
        <Community />
      </Suspense>
    ),
  },
  {
    path: "/community/:category/:question", 
    element: (
      <Suspense fallback={<Loading />}>
        <QuestionDetailPage /> 
      </Suspense>
    ),
  },
  {
    path: "/comment/:id", // 댓글 ID에 대한 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <CommentDetail />
      </Suspense>
    ),
  },
]);

export default router;
