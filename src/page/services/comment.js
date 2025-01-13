import api from '../Api/api';
import { updateBorad } from './board';

//전체 댓글 목록 조회
export const fetchAllComments = async () =>{
    const response = await api.get('/board/comments/');
    return response.data;
};

//댓글 생성 API
export const createComment = async (commentData) =>{
    const response = await api.post('/board/comments/', commentData);
    return response.data;
};

//댓글 상세 조회 Api
 export const fetchCommentsById = async (id) => {
    const response = await api.get(`/board/comments/${id}/`);
    return response.data;
 };
 
 //댓글 수정 Api
export const updateComment = async (id, updateData) =>{
    const response = await api.patch(`/board/comments/${id}/`, updateData);
    return response.data;
};
//댓글 삭제 Api
export const deleteComment = async (id) => {
    const response = await api.delete(`/board/comments/${id}/`);
    return response.status;
};