import React, { useState } from 'react';
import './Mainlayout.scss'; // MainLayout.scss 파일을 가져옵니다.
import Message from './Message'; // Message 컴포넌트 가져오기

const Communication = ({ community }) => {
    const [activeTab, setActiveTab] = useState('공지사항'); // 기본 활성화된 탭

    const handleTabClick = (tab) => {
        setActiveTab(tab); // 클릭한 탭으로 상태 업데이트
    };

    return (
        <div className="communication">
            <h2 className="communication-h2">
                Community {'>'} #{community} {'>'} {activeTab}
            </h2>
            <div className="communication-tabs">
                <button
                    className={activeTab === '공지사항' ? 'active' : ''}
                    onClick={() => handleTabClick('공지사항')}
                >
                    공지사항
                </button>
                <button
                    className={activeTab === '메시지' ? 'active' : ''}
                    onClick={() => handleTabClick('메시지')}
                >
                    메시지
                </button>
                <button
                    className={activeTab === '스크랩' ? 'active' : ''}
                    onClick={() => handleTabClick('스크랩')}
                >
                    스크랩
                </button>
                <button
                    className={activeTab === '책갈피' ? 'active' : ''}
                    onClick={() => handleTabClick('책갈피')}
                >
                    책갈피
                </button>
            </div>
            <div className="communication-content">
                {activeTab === '메시지' ? (
                    <Message /> // 메시지 탭이 활성화되면 Message 컴포넌트 표시
                ) : (
                    <p>여기에 {activeTab}와 관련된 내용을 추가하세요.</p>
                )}
            </div>
        </div>
    );
};

export default Communication;
