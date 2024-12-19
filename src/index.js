import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BoardList from './page/NoticeBoard/BoardList';
import RankingList from './page/Ranking/RankingList';
import SearchBox from './page/Search/SearchBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="indexcontainer"> {/* 전체 컨테이너 */}
    
      <div className="vertical-container"> {/* 세로 정렬을 위한 컨테이너 */}
      <SearchBox />
      <BoardList />  
      </div>
      <RankingList /> 
      {/* 랭킹 리스트는 가로 정렬 */}
    </div>
  </React.StrictMode>
);