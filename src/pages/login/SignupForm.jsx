import React, { useState } from "react";
import { registerUser } from "../services/Register";
import { useNavigate } from "react-router-dom";
import "./SignupForm.scss"; // SCSS 스타일 적용

const SignupForm = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    email: "",
    password: "",
    password2: "",
    schoolId: "", // 🔹 school_id 추가
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // 🔹 입력값 변경 핸들러
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 학번 입력 시 숫자만 허용
  const handleStudentIdInput = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 입력 가능
    setFormData({ ...formData, studentId: e.target.value });
  };

  // 🔹 회원가입 요청
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    // 🔹 필수 필드 검증
    if (!formData.studentId || !formData.email || !formData.password || !formData.password2 || !formData.schoolId) {
      setErrors({ general: "모든 필드를 입력해주세요." });
      return;
    }

    // 🔹 비밀번호 검증 추가
    if (formData.password !== formData.password2) {
      setErrors({ password2: ["비밀번호가 일치하지 않습니다."] });
      return;
    }

    // 🔹 회원가입 요청
    const result = await registerUser(formData);
    if (result.success) {
      setSuccessMessage(result.message);
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setErrors(result.errors);
    }
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      {successMessage && <p className="success-text">{successMessage}</p>}
      {errors.general && <p className="error-text">{errors.general}</p>}

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>학번 (아이디)</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            onInput={handleStudentIdInput}
            required
          />
          {errors.username && <p className="error-text">{errors.username[0]}</p>}
        </div>

        <div className="form-group">
          <label>학교 ID</label> {/* 🔹 school_id 추가 */}
          <input
            type="text"
            name="schoolId"
            value={formData.schoolId}
            onChange={handleChange}
            required
          />
          {errors.schoolId && <p className="error-text">{errors.schoolId[0]}</p>}
        </div>

        <div className="form-group">
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-text">{errors.email[0]}</p>}
        </div>

        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-text">{errors.password[0]}</p>}
        </div>

        <div className="form-group">
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
          />
          {errors.password2 && <p className="error-text">{errors.password2[0]}</p>}
        </div>

        <button type="submit" className="signup-button">회원가입</button>
      </form>
    </div>
  );
};

export default SignupForm;