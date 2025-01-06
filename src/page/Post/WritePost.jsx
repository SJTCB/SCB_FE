// 게시글 컴포넌트 
//제목, 내용을 입력하고 onPostCreated를 누르면 새로운 Posts 데이터 전달
import React, { useState } from 'react';
import './Post.scss';

const WritePost = ({ onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const addPost = (e) => {
        e.preventDefault();
        if (title && content) {
            const newPost = { 
                title, 
                content, 
                date: new Date().toLocaleDateString(), 
                id: Date.now()  //고유 Id 생성
            };
            onPostCreated(newPost);
            setTitle('');
            setContent('');
        }
    };

    return (
        <form className='write-post-container' onSubmit={addPost}>
            <input 
                type="text" 
                className='write-input'
                placeholder="제목을 입력하세요" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}  //내용 업데이트 
            />
            <textarea 
                className='write-textarea'
                placeholder="내용을 추가하세요" 
                value={content} 
                onChange={(e) => setContent(e.target.value)}  //내용 업데이트
            />
            <button type="submit" className='write-button'>제출하기</button> {/*제출하기를 누르면 addPost 이벤트 실행 */}
        </form>
    );
};

export default WritePost;
