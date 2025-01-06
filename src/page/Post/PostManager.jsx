// 포스트 컴포넌트들을 합친 컴포넌트
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';
import WritePost from './WritePost';

const PostManager = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate(); //useNavigate를 사용해서 페이지를 이동

    const handlePostCreated = (newPost) => { //새로운 포스트를 기존 포스트 목록에 추가를 한다.
        setPosts([...posts, newPost]);
        navigate('/'); //글쓰기 후 메인 페이지로 이동한다
    };

    return (
        <div>
            <h1>게시글</h1>
            <button className='manager-button-container' onClick={() => navigate('/write')}>글쓰기</button>
            <Routes>
                <Route path="/" element={<PostList posts={posts} />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/write" element={<WritePost onPostCreated={handlePostCreated} />} />
            </Routes>

        </div>
    );
};

export default PostManager;
