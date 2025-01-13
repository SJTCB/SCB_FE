import React from 'react';
import PostList from './Post/PostList'; // 올바른 상대 경로
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <h1>최신 게시글</h1>
            <PostList />
        </div>
    );
};

export default Home;
