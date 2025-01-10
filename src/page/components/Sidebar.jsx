import React, { useState } from 'react';
import './Mainlayout';

const Sidebar = ({ onSelectCommunity, handleHomeClick }) => {
    const [showSubItems, setShowSubItems] = useState(false);

    const handleToggle = () => {
        setShowSubItems(!showSubItems);
    };

    return (
        <div className="sidebar">
            <div className="profile">
                <span>👤</span> Profile
            </div>
            <div className="menu-item" onClick={handleHomeClick}>
                <span>🏠</span> Home
            </div>
            <div className="menu-item" onClick={handleToggle}>
                <span>💬</span> Communication
                <span className="dropdown" onClick={handleToggle}>
                    {showSubItems ? '▲' : '▼'}
                </span>
            </div>
            {showSubItems && (
                <div className="sub-menu">
                    <div className="sub-menu-item" onClick={() => onSelectCommunity('질문방')}>
                        # 질문방
                    </div>
                    <div className="sub-menu-item" onClick={() => onSelectCommunity('진로고민방')}>
                        # 진로고민방
                    </div>
                    <div className="sub-menu-item" onClick={() => onSelectCommunity('수다방')}>
                        # 수다방
                    </div>
                    <div className="sub-menu-item" onClick={() => onSelectCommunity('프로젝트모임방')}>
                        # 프로젝트모임방
                    </div>
                </div>
            )}
            <div className="menu-item">
                <span>📁</span> Code Review
            </div>
        </div>
    );
};

export default Sidebar;
