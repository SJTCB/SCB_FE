// 게시판 목록 컴포넌트 (BoardList.jsx)
import React from 'react';
import BoardItem from './BoardItem';
import './BoardStyle.scss';

const BoardList = () => {
  const posts = [
    { id: 1, title: '첫 번째 글', content: '안녕하세요' },
    { id: 2, title: '두 번째 글', content: '반가워요' },
  ];

  return (
    <div className='container'>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <BoardItem key={post.id} title={post.title} content={post.content} />
        ))}
      </ul>
    </div>
  );
};

export default BoardList;