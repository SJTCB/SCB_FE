import api from "../api/api"; // API 요청용 axios 인스턴스

// 🔹 회원가입 요청 함수
export const registerUser = async (userData) => {
  try {
    // 🔹 필드명 변경 (studentId → username)
    const formattedData = {
      username: userData.studentId, // 학번을 username으로 변환
      email: userData.email,
      password: userData.password,
      password2: userData.password2,
    };

    const response = await api.post("/users/register/", formattedData);

    if (response.status === 201) {
      return { success: true, message: "회원가입이 성공적으로 완료되었습니다." };
    }
  } catch (error) {
    // 서버 응답 에러 메시지 출력
    if (error.response && error.response.status === 400) {
      return { success: false, errors: error.response.data };
    }
    return { success: false, errors: { general: "회원가입 요청 중 오류가 발생했습니다." } };
  }
};