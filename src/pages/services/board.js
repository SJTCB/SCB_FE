import api from "./api";

export const fetchBoardList = async () => api.get("/api/board/boards/");
export const createBoard = async (data) => api.post("/api/board/boards/", data);
export const fetchBoardDetails = async (id) => api.get(`/api/board/boards/${id}/`);
export const updateBoard = async (id, data) => api.patch(`/api/board/boards/${id}/`, data);
export const deleteBoard = async (id) => api.delete(`/api/board/boards/${id}/`);