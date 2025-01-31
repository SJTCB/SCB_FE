import React, { useState } from 'react';
import MessageInput from './MessageInput'; // 메시지 입력 컴포넌트 추가
import MessageList from './MessageList'; // 메시지 리스트 컴포넌트 추가
import './Message.scss'; // 스타일을 위해 CSS 파일을 추가합니다.

const Message = () => {
    const [comments, setComments] = useState([]); // 댓글 상태 관리

    const handleNewMessage = (newMessage) => {
        if (newMessage.trim()) {
            const currentDate = new Date().toLocaleString(); // 현재 날짜와 시간을 포맷
            setComments([...comments, { content: newMessage, time: currentDate, author: "사용자" }]); // 새로운 댓글 추가
        }
    };

    return (
        <div className="Message-container">
            <h3 className="Message-title">코드 관련해서 질문하는 곳입니다!</h3>

            {/* 메시지 리스트 표시 */}
            <MessageList messages={comments} />

            {/* 메시지 입력창 추가 */}
            <MessageInput onSendMessage={handleNewMessage} />
        </div>
    );
};

export default Message;
