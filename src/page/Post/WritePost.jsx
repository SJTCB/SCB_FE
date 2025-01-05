// 게시글 컴포넌트 
//제목, 내용을 입력하고 onPostCreated를 누르면 새로운 Posts 데이터 전달
import React, { useState } from 'react';

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
                id: Date.now() 
            };
            onPostCreated(newPost);
            setTitle('');
            setContent('');
        }
    };

    return (
        <form onSubmit={addPost}>
            <input 
                type="text" 
                placeholder="제목" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}  //내용 업데이트 
            />
            <textarea 
                placeholder="내용" 
                value={content} 
                onChange={(e) => setContent(e.target.value)}  //내용 업데이트
            />
            <button type="submit">제출하기</button> {/*제출하기를 누르면 addPost 이벤트 실행 */}
        </form>
    );
};

export default WritePost;
