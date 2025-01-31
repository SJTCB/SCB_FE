import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsTypeBold, BsTypeItalic, BsTypeUnderline, BsCode } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import "./MessageInput.scss"; // 스타일 파일 연결

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const textAreaRef = useRef(null);

  // 메시지 전송 처리 함수
  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  // "Enter" 키 입력 시 메시지 전송 처리
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 메시지 입력 필드 높이 자동 조정
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [message]);

  return (
    <div className="MessageInput-container">
      {/* 포맷팅 버튼 */}
      <div className="MessageInput-formatting-buttons">
        <button className="MessageInput-formatting-button"><BsTypeBold /></button>
        <button className="MessageInput-formatting-button"><BsTypeItalic /></button>
        <button className="MessageInput-formatting-button"><BsTypeUnderline /></button>
        <button className="MessageInput-formatting-button"><FiLink /></button>
        <button className="MessageInput-formatting-button"><BsCode /></button>
      </div>

      {/* 메시지 입력 필드 */}
      <div className="MessageInput-box">
        <textarea
          ref={textAreaRef}
          className="MessageInput-textarea"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="MessageInput-send-button" onClick={handleSendMessage}>
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
