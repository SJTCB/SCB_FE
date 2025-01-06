import React from 'react';

const CommunityDetail = ({ community }) => {
    return (
        <div className="community-detail">
            <div className="tabs">
                <button>공지사항</button>
                <button>메시지</button>
                <button>스크랩</button>
                <button>책갈피</button>
            </div>
            <div className="content">
                <p>여기에 {community}와 관련된 내용을 추가하세요.</p>
            </div>
        </div>
    );
};

export default CommunityDetail;
