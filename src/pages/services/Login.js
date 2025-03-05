import api from "../api/api"; // api.js에서 가져오기

// 🔹 로그인 요청 함수
export const loginUser = async (studentId, password) => {
  try {
    const response = await api.post("/users/login/", {
      username: studentId, // 🔹 studentId를 서버가 요구하는 username으로 변환
      password,
    });

    // 성공적으로 로그인하면 토큰 반환
    if (response.status === 200 && response.data.token) {
      localStorage.setItem("token", response.data.token); // 토큰 저장 (선택 사항)
      return { success: true, token: response.data.token };
    } else {
      return { success: false, error: "로그인 실패: 서버 응답 오류" };
    }
  } catch (error) {
    // 400 에러: 잘못된 로그인 정보
    if (error.response && error.response.status === 400) {
      return { success: false, error: "학번 또는 비밀번호가 잘못되었습니다." };
    }
    // 기타 에러 처리
    return { success: false, error: "로그인 요청 중 오류가 발생했습니다." };
  }
};

// 🔹 로그인 상태 확인 (토큰이 있는지 확인)
export const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // 토큰이 있으면 로그인된 상태
};

// 🔹 로그아웃 함수 (토큰 제거)
export const logoutUser = () => {
  localStorage.removeItem("token");
};