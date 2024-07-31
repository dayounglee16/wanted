import styled from "styled-components";
import TagAccumulateSlideList from "./TagAccumulateSlideList";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//#누적 투자 100억이상 전체 부분
const TagAccumulate = () => {
  return (
    <My>
      <MyPosition>
        <h2>#누적 투자 100억이상</h2>
        <div className="allListBtn">
          <b>전체보기</b>
          <span className=".swiper-button-prev prev">&lt;</span>
          <span className="next .swiper-button-next">&gt;</span>
        </div>
      </MyPosition>
      <div>
        <TagAccumulateSlideList />
      </div>
    </My>
  );
};

export default TagAccumulate;

const My = styled.div`
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
