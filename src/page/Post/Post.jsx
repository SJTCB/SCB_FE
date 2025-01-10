import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const apiUrl = 'https://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/';

const Post = () => {
    const { id } = useParams(); // URL 파라미터로 게시글 ID를 가져옴
    const [post, setPost] = useState(null);

    // 게시글 상세 조회
    const fetchPostDetails = async () => {
        try {
            const response = await axios.get(`${apiUrl}api/board/boards/${id}`);
            setPost(response.data); // 게시글 데이터 받아오기
        } catch (error) {
            console.error('게시글을 불러오는 데 실패했습니다.', error);
        }
    };

    useEffect(() => {
        fetchPostDetails(); // 컴포넌트가 마운트되면 게시글 상세 정보 가져오기
    }, [id]);

    if (!post) return <div>게시글을 불러오는 중입니다...</div>;

    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.date_created}</p>
            <div>{post.content}</div>
        </div>
    );
};

export default Post;