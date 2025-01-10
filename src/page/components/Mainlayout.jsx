import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Communication from './Communication'; 
import './Mainlayout.scss';
import Home from '../home';
const MainLayout = () => {
    const [selectedCommunity, setSelectedCommunity] = useState(null);

    const handleSelectCommunity = (community) => {
        setSelectedCommunity(community);
    };
    const handleHomeClick = () => {
        setSelectedCommunity(null); // Home 클릭 시 selectedCommunity를 null로 설정
    };

    return (
        <div className="main-layout">
            <Sidebar onSelectCommunity={handleSelectCommunity} handleHomeClick={handleHomeClick}/>
            <div className="main-content">
                <Navbar />
                {selectedCommunity ? (
                    <Communication community={selectedCommunity} /> // Communication 컴포넌트로 변경
                ) : (
                   <Home/>
                )}
            </div>
        </div>
    );
};

export default MainLayout;
