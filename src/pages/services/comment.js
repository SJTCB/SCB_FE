import api from "../api/api";

// 전체 댓글 목록 조회
export const fetchAllComments = async () => api.get("/api/board/comments/");
export const createComment = async (commentData) => api.post("/api/board/comments/", commentData);
export const fetchCommentById = async (id) => api.get(`/api/board/comments/${id}/`);
export const updateComment = async (id, updateData) => api.patch(`/api/board/comments/${id}/`, updateData);
export const deleteComment = async (id) => api.delete(`/api/board/comments/${id}/`);