import styled from "styled-components";
import PositionSlideList from "./PositionSlideList";

// 메인 페이지) 내가 관심 있을 만한 포지션 전체부분
const InstrastPosition = () => {
  return (
    <PositionTitle>
      <MyPosition>
        <h2>내가 관심 있을 만한 포지션</h2>
        <div className="allListBtn">
          <b>전체보기</b>
          <span className="prev .swiper-button-prev">&lt;</span>
          <span className="next .swiper-button-next">&gt;</span>
        </div>
      </MyPosition>
      <div>
        <PositionSlideList />
      </div>
    </PositionTitle>
  );
};

export default InstrastPosition;

const PositionTitle = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
`;

const MyPosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .allListBtn > b {
    margin-right: 20px;
  }

  .allListBtn > .prev {
    padding: 3px 8px;
    border: 1px solid #ccc;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
    border-right: none;

    &:hover {
      background-color: #eee;
    }
  }

  .allListBtn > .next {
    padding: 3px 8px;
    border: 1px solid #ccc;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0 5px 5px 0;

    &:hover {
      background-color: #eee;
    }
  }
`;
