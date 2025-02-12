import React, { useState, useEffect } from 'react'
import './QuestionForm.scss';
import Community from '../pages/components/Community';
import QuestionModal from "../pages/components/QuestionModal";
import { Link } from "react-router-dom";
import axios from "axios";
import "./QuestionForm.scss";

// 질문 등록하면 화면에 보이는 거 
// 1. 학습 질문 -> 학습 질문 폼 최신순 업로드
// 2. 학과 질문 -> 학과 질문 폼 최신순 업로드 
// 3. 소통해요 -> 소통해요 폼 최신순 업로드 
// 4. 폼 클릭 -> 해당 질문 페이지로 이동(url 변경 ex) major/1, study/1, talk/1)
const QuestionForm = ({ category, newQuestions }) => {
  const [questionList, setQuestionList] = useState([]);
  
   // 백엔드에서 질문 목록 불러오기
   const getQuestionList = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/question?category=${category}`);
      setQuestionList(response.data.reverse()); // 최신 질문이 위로 오도록 정렬
    } catch (error) {
      console.error("질문 목록 불러오기 실패:", error);
    }
  };

  useEffect(() => {
    getQuestionList(); // 페이지 로드 시 질문 목록 불러오기
  }, [category]);

    // 새로운 질문을 맨 위에 추가 (newQuestions가 undefined일 경우를 방지)
    useEffect(() => {
      if (newQuestions && newQuestions.length > 0) {
        setQuestionList((prev) => [...newQuestions, ...prev]);
      }
    }, [newQuestions]);

  return (
    <div className="question-form">
      <h1>{category === "study" ? "학습 질문" : category === "major" ? "학과 질문" : "소통해요"}</h1>
      <ul>
        {questionList.map((question) => (
          <li key={question.idx} className="question-item">
            <Link to={`/question/${question.idx}`}>
              <div className="question-title">{question.title}</div>
              <div className="question-info">
                <span className="user">{question.user}</span> · <span className="time">{question.time}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionForm
