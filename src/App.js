import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router"; // router.js에서 설정한 라우터 가져오기

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;