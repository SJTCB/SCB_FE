import React from 'react'
import { Link } from "react-router-dom";
import "./QuestionForm.scss";

const QuestionForm = ({ category, questions }) => {

  return (
    <div className="question-form">
      <ul>
        {questions.map((question) => (
            <li key={question.id} className="question-item">
              {category && question.id ? (
                <Link to={`/community/${category}/${question.id}`}>
                  {question.title}
                </Link>
              ) : (
                <span>{question.title}</span>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default QuestionForm


// 질문 등록하면 화면에 보이는 거 
// 1. 학습 질문 -> 학습 질문 폼 최신순 업로드
// 2. 학과 질문 -> 학과 질문 폼 최신순 업로드 
// 3. 소통해요 -> 소통해요 폼 최신순 업로드 
// 4. 폼 클릭 -> 해당 질문 페이지로 이동(url 변경 ex) major/1, study/1, talk/1)

