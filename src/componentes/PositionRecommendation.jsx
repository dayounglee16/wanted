import styled from "styled-components";

const PositionRecommendation = () => {
  return (
    <Wrap>
      <div className="parson">로봇 이미지</div>
      <div className="inner">
        <p>
          내 이력서를 분석해 <br />
          관심 있을 만한 포지션을 추천해드려요.
        </p>
        <button>지금 시작하기</button>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  background-color: #eee;
  height: 150px;
  display: flex;
  align-items: center;
  position: relative;

  .parson {
    width: 150px;
    height: 170px;
    background-color: #555;
    position: absolute;
    top: -20px;
    left: 20%;
    padding: 10px;
  }

  .inner {
    width: 65%;
    display: flex;
    justify-content: flex-end;
    gap: 60px;
    padding-right: 20%;

    p {
      font-size: 16px;
      font-weight: bold;
    }

    button {
      color: #185dff;
      background-color: #fff;
      padding: 0 15px;
      border-radius: 5px;
      border: none;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
export default PositionRecommendation;
