import React, { useState } from 'react';
import { createProject } from '../services/projects';

const CreateProjectForm = () => {
    const [teamName, setTeamName] = useState('');
    const [teamMembers, setTeamMembers] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const projectData = {
            team_name: teamName,
            team_members: teamMembers,
            description: description,
        };

        try {
            await createProject(projectData);
            setSuccessMessage('프로젝트가 성공적으로 생성되었습니다!');
            setErrorMessage('');
            setTeamName('');
            setTeamMembers('');
            setDescription('');
        } catch (err) {
            console.error('프로젝트 생성 실패:', err);
            setErrorMessage('프로젝트 생성에 실패했습니다.');
        }
    };

    return (
        <div className="create-project-form">
            <h2>새 프로젝트 생성</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="teamName">팀 이름:</label>
                    <input
                        type="text"
                        id="teamName"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="teamMembers">팀원:</label>
                    <input
                        type="text"
                        id="teamMembers"
                        value={teamMembers}
                        onChange={(e) => setTeamMembers(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">설명:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">프로젝트 생성</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default CreateProjectForm;
