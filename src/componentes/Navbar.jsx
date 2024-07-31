import styled from "styled-components";
import NavbarMenuList from "./NavbarMenuList";
import { useNavigate } from "react-router-dom";

//메인 페이지) Navbar 전체부분
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <div className="menuSlide">
        <ul className="category">
          <li>
            <b>직군전체</b>
          </li>
          <li>개발</li>
          <li>경영・비즈니스</li>
          <li>마케팅・광고</li>
          <li>디자인</li>
          <li>영업</li>
          <li>고객서비스・리테일</li>
          <li>미디어</li>
          <li>엔지니어링・설계</li>
          <li>HR</li>
          <li>교육</li>
          <li>금융</li>
        </ul>
        <div className="categoryItem">
          <h4>직군을 먼저 선택하면 상세 직무를 볼 수 있어요.</h4>
        </div>
      </div>
      <div className="inner">
        <NavLeft>
          <h2 onClick={() => navigate("/")}>wanted</h2>
          <ul>
            <NavbarMenuList />
          </ul>
        </NavLeft>
        <NavRight>
          <ul>
            <li>검색</li>
            <li>알림</li>
            <li onClick={() => navigate("/profile")}>프로필</li>
            <li>
              <button>기업서비스</button>
            </li>
          </ul>
        </NavRight>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 10;

  .menuSlide {
    display: flex;
    width: 100%;
    height: 400px;
    padding: 20px 380px;
    background-color: #a1cfeb;
    position: absolute;
    top: -400px;
    left: 0;
    transition: top 0.5s ease;
    z-index: 0;

    .category {
      width: 20%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      overflow-y: scroll;
      cursor: pointer;
    }
    .categoryItem {
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h4 {
      color: #666;
    }
  }

  .inner {
    padding: 0 260px;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
`;

const NavLeft = styled.div`
  display: flex;
  gap: 50px;
  cursor: pointer;

  ul {
    display: flex;
    gap: 30px;
    font-weight: bold;

    &:hover ~ .menuSlide {
      top: 0;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  cursor: pointer;
  ul {
    display: flex;
    gap: 15px;
  }

  button {
    padding: 8px 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export default Navbar;
