import { data } from 'react-router-dom';
import api from '../Api/api';

//게시판 목록 조회 api
export const fetchBoradList = async () => {
    const response = await api.get('board/boards')
    return response.data;
};

//게시판 생성 api
export const createBoard = async (data) =>{
    const response = await api.post('board/boards', data);
    return response.data;
};
//게시판 상세 조회 api
export const fetchBoardDetails = async (id) => {
    const response = await api.get(`/board/boards/${id}/`);
    return response.data;
  };
//게시판 수정 api
export const updateBorad = async (id, data) => {
    const response = await api.patch(`/board/boards/${id}/` , data);
    return response.data;
};
//게시판 삭제 api
export const deletBoard = async (id) =>{
    const response = await api.delete(`/board/boards/${id}/`);
    return response.status;
};