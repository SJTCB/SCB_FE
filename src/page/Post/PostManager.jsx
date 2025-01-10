import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostList from './PostList';
import Post from './Post';
import WritePost from './WritePost';

const apiUrl = 'https://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/';

const PostManager = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    // 게시글 목록 가져오기
    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${apiUrl}api/board/boards/`);
            setPosts(response.data); // API에서 게시글 목록 받아오기
        } catch (error) {
            console.error('게시글을 불러오는 데 실패했습니다.', error);
        }
    };

    useEffect(() => {
        fetchPosts(); // 컴포넌트가 마운트되면 게시글 목록 가져오기
    }, []);

    // 새로운 포스트 생성
    const handlePostCreated = async (newPost) => {
        try {
            const response = await axios.post(`${apiUrl}api/board/boards/`, newPost);
            setPosts([...posts, response.data]); // 새로운 포스트 추가
            navigate('/'); // 글쓰기 후 메인 페이지로 이동
        } catch (error) {
            console.error('게시글 작성에 실패했습니다.', error);
        }
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