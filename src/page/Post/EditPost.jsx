import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams(); // URL에서 게시글 ID 받아옴
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: '',
        content: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/board/boards/${id}/`);
                if (!response.ok) {
                    throw new Error('게시판을 찾을 수 없습니다.');
                }
                const data = await response.json();
                setPost({
                    title: data.title,
                    content: data.content
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/board/boards/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: post.title,
                    content: post.content
                })
            });

            if (!response.ok) {
                throw new Error('게시판 수정 실패');
            }

            // 수정 후 게시글 상세 페이지로 리디렉션
            navigate(`/post/${id}`);
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="edit-post">
            <h1>게시글 수정</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>내용</label>
                    <textarea
                        name="content"
                        value={post.content}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">수정 완료</button>
            </form>
        </div>
    );
};

export default EditPost;