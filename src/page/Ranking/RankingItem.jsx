// RankingItem.jsx
import React from 'react';

const RankingItem = ({ rank, name, score }) => {
  return (
    <li>
      {rank}. {name} - {score}점
    </li>
  );
};

export default RankingItem;