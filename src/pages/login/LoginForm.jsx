import React, { useState } from "react";
import { loginUser } from "../services/Login";
import { useNavigate } from "react-router-dom";
import "./LoginForm.scss"; // SCSS 파일 불러오기

const LoginForm = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await loginUser(formData.studentId, formData.password);
    if (result.success) {
      alert("로그인 성공!");
      navigate("/");
    } else {
      setError(result.error);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>학번</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
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
        </div>

        <button type="submit" className="login-button">로그인</button>
        <button type="button" onClick={handleSignupClick} className="signup-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default LoginForm;