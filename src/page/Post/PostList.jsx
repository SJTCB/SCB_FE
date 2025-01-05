//게시글 목록을 출력하는 배열
//props로 전달된 posts 배열을 사용하여 각 게시글의 제목과 내용을 화면에 띄움

import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.length === 0 ? (
                <p>게시물이 없습니다.</p> //게시물이 없으면 출력 
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}> {/*게시물 제목을 클릭하면 클릭한 POST게시물로 간다. */}
                                <h4>{post.title}</h4>
                                <p>{post.content.slice(0, 100) + '...'}</p> {/*100글자까지 화면에 보여준다 */}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostList;
