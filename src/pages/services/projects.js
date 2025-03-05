import api from "../api/api";

export const fetchProjectsList = async () => api.get("/api/projects/");
export const createProject = async (projectData) => api.post("/api/projects/", projectData);
export const fetchProjectDetails = async (id) => api.get(`/api/projects/${id}/`);
export const updateProject = async (id, updatedData) => api.patch(`/api/projects/${id}/`, updatedData);
export const deleteProject = async (id) => api.delete(`/api/projects/${id}/`);