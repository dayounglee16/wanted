import styled from "styled-components";
import { data } from "../data";
import { useNavigate } from "react-router-dom";

//메인 페이지) 아이콘 메뉴
const IconMenuList = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      {data.iconMenuData.map((icon) => {
        return (
          <IconBox
            key={icon.id}
            onClick={() =>
              navigate(icon.url === "/shortcutItem" ? "/shortcutItem" : null)
            }
          >
            <li className="iconImg">icon</li>
            <li className="iconTxt">{icon.title}</li>
          </IconBox>
        );
      })}
    </Wrap>
  );
};

export default IconMenuList;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  margin: 130px 0 80px 0;
`;

const IconBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .iconImg {
    background-color: #999;
    padding: 30px;
    cursor: pointer;
  }

  .iconTxt {
    color: #999;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }
`;
