import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeletePost = ({ boardId }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (isDeleting) return; // 중복 클릭 방지

        setIsDeleting(true);
        setError(null);

        try {
            const response = await fetch(`/api/board/boards/${boardId}`, {
                method: 'DELETE',
            });

            if (response.status === 204) {
                alert('게시판이 삭제되었습니다.');
                navigate('/'); // 삭제 후 메인 화면으로 리다이렉트
            } else if (response.status === 403) {
                setError('삭제 권한이 없습니다.');
            } else if (response.status === 404) {
                setError('게시판을 찾을 수 없습니다.');
            } else {
                setError('삭제 중 오류가 발생했습니다.');
            }
        } catch (err) {
            setError('네트워크 오류가 발생했습니다.');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div>
            <h2>게시판 삭제</h2>
            <button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? '삭제 중...' : '게시판 삭제'}
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default DeletePost;