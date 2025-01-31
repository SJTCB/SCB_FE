import React from "react";
import "./MessageListStyles.scss"; // 스타일 파일 연결

const MessageList = ({ messages }) => {
  return (
    <div className="MessageList-container">
      {messages.map((message, index) => (
        <div key={index} className="MessageList-item">
          <div className="MessageList-header">
            {/* 작성자 이름 표시 */}
            <span className="MessageList-author">{message.author}</span>
            {/* 메시지가 전송된 시간 표시 */}
            <span className="MessageList-time">{message.time}</span>
          </div>
          <div className="MessageList-content">
            {/* 메시지 본문 */}
            <p>{message.content}</p>
          </div>
          {message.comments && message.comments.length > 0 && (
            <div className="MessageList-comments">
              {/* 댓글 개수와 댓글 리스트 */}
              <span className="MessageList-comments-count">댓글 {message.comments.length}개</span>
              <ul>
                {message.comments.map((comment, commentIndex) => (
                  <li key={commentIndex} className="MessageList-comment-item">
                    <span className="MessageList-comment-author">{comment.author}:</span>
                    <span className="MessageList-comment-content">{comment.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
