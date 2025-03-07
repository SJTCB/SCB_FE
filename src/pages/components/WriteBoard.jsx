import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBoard } from "../services/board"; 
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill 에디터 스타일
import "./WriteBoard.scss"; // SCSS 파일 불러오기
import MenuBar from "./MenuBar";
const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        school_id: "",
        title: "",
        content: "",
        tags: ""
    });

    const { school_id, title, content, tags } = board;

    const onChange = (e) => {
        const { value, name } = e.target;
        setBoard({ ...board, [name]: value });
    };

    const handleEditorChange = (value) => {
        setBoard({ ...board, content: value });
    };

    const saveBoard = async () => {
        if (school_id.length < 1 || school_id.length > 10) {
            alert("학번은 1~10자 사이여야 합니다.");
            return;
        }
        if (title.length < 1 || title.length > 100) {
            alert("제목은 1~100자 사이여야 합니다.");
            return;
        }
        if (content.length < 1) {
            alert("내용을 입력해주세요.");
            return;
        }

        try {
            await createBoard(board);
            alert("게시글이 성공적으로 등록되었습니다.");
            navigate('/board'); 
        } catch (error) {
            console.error("게시글 저장 중 오류 발생:", error);
            alert("게시글 저장에 실패했습니다.");
        }
    };

    return (
        
        <div className="writeboard-container">
            <MenuBar/>
            <h2 className="writeboard-h2">제목을 입력하세요</h2>
            
            <input 
                type="text" 
                name="title" 
                value={title} 
                onChange={onChange} 
                placeholder="제목을 입력하세요..." 
                className="writeboard-title-input"
            />
            
            <input 
                type="text" 
                name="tags" 
                value={tags} 
                onChange={onChange} 
                placeholder="태그를 입력하세요..." 
                className="writeboard-tag-input"
            />
            
            <ReactQuill 
                value={content} 
                onChange={handleEditorChange} 
                theme="snow" 
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, 3, 4, false] }],
                        ['bold', 'italic', 'blockquote'],
                        [{ 'align': [] }],
                        ['link', 'image', 'code-block']
                    ]
                }}
                className="writeboard-quill"
            />
            
            <div className="writeboard-button-container">
                <button className="writeboard-button writeboard-exit" onClick={() => navigate(-1)}>← 나가기</button>
                
                <div>
                    <button className="writeboard-button writeboard-save">임시저장</button>
                    <button className="writeboard-button writeboard-save" onClick={saveBoard}>저장하기</button>
                </div>
            </div>
        </div>
    );
};

export default BoardWrite;
