import React, { useState } from 'react';
import './box.scss';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (e) =>{
    setSearchTerm(e.target.value);
  };

  const handleSearch = () =>{
    //게시판에서 서치 할 수 있는 로직 추가해야함 
    console.log('검색어:' ,searchTerm);
    //api키 넣을 곳
  };

  return (
    <div className="search">
      <input 
      type= "text"
      value={searchTerm}
      onChange={handleInputChange}
      placeholder='검색어를 입력해주세요'
      />
      <button onClick={handleSearch}>검색</button>
    </div>
    
  );
};

export default SearchBox;