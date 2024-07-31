import styled from "styled-components";
import { useRef } from "react";

// 메인 페이지) 원티드봇 채팅
const WantedBot = () => {
  const modalRef = useRef();

  return (
    <Wrap>
      <div className="show">
        <h1 onClick={() => modalRef.current.showModal()}>❔</h1>
      </div>
      <ModalBox ref={modalRef} onClick={() => modalRef.current.close()}>
        <Title>
          <h2>원티드 BOT</h2>
          <button onClick={() => modalRef.current.close()}>🔽</button>
        </Title>
        <div className="time">
          <span>오후 10:46</span>
        </div>
        <Chatting>
          <div className="botImg"></div>
          <div className="message">
            <div>
              <h4>원티드 봇</h4>
              <p>
                안녕하세요 원티드 Bot입니다.
                <br />
                <br />본 챗봇은 실제 상담원 채팅 서비스를 제공하지 않습니다.
              </p>
              <p>
                남겨진 메세지는 전달되지 않습니다. <br />
                <br />
                아래 버튼 중 도움이 필요한 버튼을 선택해 주세요.
                <button>고객센터 바로가기</button>
                <button>건의사항</button>
              </p>
              <span>오후 10:46</span>
            </div>
          </div>
        </Chatting>
      </ModalBox>
    </Wrap>
  );
};
export default WantedBot;

const Wrap = styled.div`
  position: relative;

  .show {
    position: fixed;
    right: 2%;
    bottom: 3%;
    width: 50px;
    height: 50px;
    padding-bottom: 5px;
    border-radius: 25px;
    background-color: #000;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 50;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #fff;
  padding: 15px;

  button {
    background-color: #000;
    font-size: 20px;
  }
`;

const ModalBox = styled.dialog`
  width: 380px;
  height: 600px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  border: none;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 10px;

  &::backdrop {
    opacity: 0;
  }

  .time {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    margin-top: 10px;
    color: #666;
  }
`;

const Chatting = styled.div`
  display: flex;
  padding: 20px;
  gap: 15px;

  h4 {
    margin-bottom: 10px;
  }

  .botImg {
    background-color: #333;
    width: 60px;
    height: 35px;
    align-self: flex-end;
    margin-bottom: 30px;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 20px;

    p {
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      background-color: #eee;

      button {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        margin-top: 10px;
        background-color: #079eefc0;
        color: #fff;
      }
    }
  }
`;
