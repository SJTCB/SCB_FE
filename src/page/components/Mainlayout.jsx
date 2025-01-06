import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Communication from './Communication'; 
import './Mainlayout.scss';

const MainLayout = () => {
    const [selectedCommunity, setSelectedCommunity] = useState(null);

    const handleSelectCommunity = (community) => {
        setSelectedCommunity(community);
    };

    return (
        <div className="main-layout">
            <Sidebar onSelectCommunity={handleSelectCommunity} />
            <div className="main-content">
                <Navbar />
                {selectedCommunity ? (
                    <Communication community={selectedCommunity} /> // Communication 컴포넌트로 변경
                ) : (
                    <div>Welcome! Please select a community.</div>
                )}
            </div>
        </div>
    );
};

export default MainLayout;
