//게시판 항목 컴포넌트
import React from "react";

const BoardItem = ({ title, content}) => {
    return(
        <li>
            <h4>{title}</h4>
            <div>{content}</div>
        </li>
    );
};

export default BoardItem;