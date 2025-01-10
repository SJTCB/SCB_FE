import React, { useState } from 'react';
import axios from 'axios';
import './Post.scss';

const apiUrl = 'https://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/';

const WritePost = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 새로운 게시글 추가하기
    const addPost = async (e) => {
        e.preventDefault();
        if (title && content) {
            const newPost = {
                title,
                content,
                date_created: new Date().toLocaleDateString(),
            };

            try {
                const response = await axios.post(`${apiUrl}api/board/boards/`, newPost);
                onPostCreated(response.data); // 새 포스트 데이터를 부모 컴포넌트에 전달
                setTitle('');
                setContent('');
            } catch (error) {
                console.error('게시글 작성에 실패했습니다.', error);
            }
        }
    };

    return (
        <form className='write-post-container' onSubmit={addPost}>
            <input
                type="text"
                className='write-input'
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)} // 제목 업데이트
            />
            <textarea
                className='write-textarea'
                placeholder="내용을 추가하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)} // 내용 업데이트
            />
            <button type="submit" className='write-button'>제출하기</button>
        </form>
    );
};

export default WritePost;