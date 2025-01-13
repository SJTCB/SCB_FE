import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProject } from '../services/projects';

const DeleteProjectButton = ({ projectId }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = window.confirm('정말 이 프로젝트를 삭제하시겠습니까?');
        if (!confirmDelete) return;

        try {
            await deleteProject(projectId);
            alert('프로젝트가 성공적으로 삭제되었습니다.');
            navigate('/'); // 삭제 후 메인 페이지로 이동
        } catch (err) {
            console.error('프로젝트 삭제 실패:', err);
            alert('프로젝트를 삭제하는 데 실패했습니다.');
        }
    };

    return (
        <button onClick={handleDelete} style={buttonStyle}>
            삭제
        </button>
    );
};

const buttonStyle = {
    backgroundColor: '#ff4d4f',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
};

export default DeleteProjectButton;
