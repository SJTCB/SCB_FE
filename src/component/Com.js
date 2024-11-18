import React from 'react'
import '../App.css'
import { Container } from 'react-bootstrap'

const Com = ({view}) => {
    const renderView = () => {
        switch (view) {
          case 'Question':
            return (
              <div>
                <h2 className='title'>#질문방</h2>
                <p>이곳은 질문과 답변을 공유하는 공간입니다. 궁금한 점을 자유롭게 물어보세요!</p>
              </div>
            );
          case 'Career':
            return (
              <div>
                <h2 className='title'>#진로고민방</h2>
                <p>진로 고민을 나누고 함께 해결책을 찾아보세요!</p>
              </div>
            );
          case 'Talk':
            return (
              <div>
                <h2 className='title'>#수다방</h2>
                <p>여기는 자유롭게 이야기를 나누는 수다방입니다. 편하게 대화해보세요!</p>
              </div>
            );
          case 'Unknown':
            return (
              <div>
                <h2 className='title'>#ㅁㅇㄹㅁㅇㄹ</h2>
                <p>무엇이든 이야기할 수 있는 공간입니다. 여러분의 이야기를 들려주세요!</p>
              </div>
            );
          default:
            return (
              <div>
                <h2>Welcome to Community</h2>
                <p>Community 메뉴에서 항목을 선택하세요.</p>
              </div>
            );
        }
      };
    
      return (
        <div>
          {renderView()} {/* 옵션에 따라 동적으로 화면 렌더링 */}
        </div>
      );
    };

export default Com
