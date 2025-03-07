import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "../pages/components/Mainlayout";

const LoginForm = lazy(() => import("../pages/login/LoginForm"));
const SignupForm = lazy(() => import("../pages/login/SignupForm"));
const WriteBoard = lazy(() => import("../pages/components/WriteBoard"));
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
    path: "/writeboard",
    element: (
      <Suspense fallback={<Loading/>}>
      <WriteBoard/>
      </Suspense>
    ),
  },
  /*
  {
    path: "/code-review",
    element: (
      <Suspense fallback={<Loading />}>
        <CodeReview />
      </Suspense>
    ),
  },
  {
    path: "/community/:communityName", // 커뮤니티 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <Community />
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
  {
    path: "/PostList",
    element: (
      <Suspense fallback={<Loading />}>
        <PostList/>
      </Suspense>
    )
  }*/
]); 

export default router;
