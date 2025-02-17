import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./QuestionDetailPage.scss";

const QuestionDetailPage = () => {
  const { category, questionId } = useParams();
  
  // ✅ Redux에서 질문 목록을 가져오고, 배열이 아니면 빈 배열을 기본값으로 설정
  const questions = useSelector((state) => state.questions.questions[category]) || [];

  console.log(`현재 ${category} 질문 리스트:`, questions); // ✅ Redux 상태 확인

  // ✅ `questions`가 배열인지 확인 후 `.find()` 실행
  if (!Array.isArray(questions)) {
    console.error("❌ questions가 배열이 아닙니다:", questions);
    return <p>❌ 질문 데이터를 불러올 수 없습니다.</p>;
  }

  // ✅ `questionId`를 숫자로 변환하여 비교
  const question = questions.find((q) => q.id === Number(questionId));

  if (!question) {
    return <p>❌ 질문을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="question-detail">
      <h2>{question.title}</h2>
      <p>{question.content}</p>
      <p>카테고리: {question.category}</p>
      <p>학년: {question.selectedGrade}</p>
      <p>학기: {question.selectedSemester}</p>
    </div>
  );
};

export default QuestionDetailPage;
