//게시글 상세 정보를 보여줌
//useLocation 훅을 사용해서 이전 페이지에서 포스트에 정보를 가져온다. 
//그 후 const {state} = {useLocation}을 통해 현재 위치의 상태를 가져온다
import React from 'react';
import { useLocation } from 'react-router-dom';

const Post = () => {
    const { state } = useLocation();
    const post = state?.post; //전달 받은 post 데이터

    if (!post) return <div>게시글의 정보를 찾을 수 없습니다.</div>; //게시글의 정보가 없는 경우

    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <div>{post.content}</div>
        </div>
    );
};

export default Post;
