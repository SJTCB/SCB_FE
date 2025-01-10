import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.length === 0 ? (
                <p>게시물이 없습니다.</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`} state={{ post }}>
                                <h4>{post.title}</h4>
                                <p>{post.content.slice(0, 100) + '...'}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostList;