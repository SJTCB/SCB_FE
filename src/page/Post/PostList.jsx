import React, { useEffect, useState } from 'react';
import { fetchBoardList } from '../services/board';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchBoardList();
        setPosts(data);
      } catch (err) {
        setError('게시판 목록을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>게시판 목록</h1>
      {posts.length === 0 ? (
        <p>게시물이 없습니다.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>작성자: {post.created_by_username}</p>
              <p>학번: {post.school_id}</p>
              <p>작성일: {new Date(post.date_created).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
