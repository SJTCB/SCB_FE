import api from '../Api/api';

// 프로젝트 목록 조회 API
export const fetchProjectsList = async () => {
    const response = await api.get('/projects/');
    return response.data;
};
// 프로젝트 생성 API
export const createProject = async (projectData) => {
    const response = await api.post('/projects/', projectData);
    return response.data;
};
// 특정 프로젝트 조회 API
export const fetchProjectDetails = async (id) => {
    const response = await api.get(`/projects/${id}/`);
    return response.data;
};
// 특정 프로젝트 수정 API
export const updateProject = async (id, updatedData) => {
    const response = await api.patch(`/projects/${id}/`, updatedData);
    return response.data;
};
// 특정 프로젝트 삭제 API
export const deleteProject = async (id) => {
    const response = await api.delete(`/projects/${id}/`);
    return response.data;
};