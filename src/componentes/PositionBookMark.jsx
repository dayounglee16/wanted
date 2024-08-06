import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { AddBookMarkItemState } from "../atom";

import { data } from "../data";

//메인 페이지) 내가 관심 있을 만한 포지션 (합격보상금 100만원, 북마크 기능)
const PositionBookMark = ({ positionItem, i }) => {
  const [addBookMarkItem, setAddBookMarkList] =
    useRecoilState(AddBookMarkItemState);

  const positionData = data.companyData;

  const AddpositionBookMark = () => {
    if (positionItem.isBookMark === false) {
      positionData[i].isBookMark = true;
      setAddBookMarkList([...addBookMarkItem, { ...positionItem }]);
    } else {
      positionData[i].isBookMark = false;
      setAddBookMarkList(
        addBookMarkItem.filter(
          (bookMarkItem) => bookMarkItem.id !== positionItem.id
        )
      );
    }
  };

  return (
    <Wrap>
      <span>합격보상금 100만원</span>
      <FontAwesomeIcon
        className="buttons"
        icon={positionItem.isBookMark === false ? faBookmark : faSolidBookmark}
        size="xl"
        onClick={AddpositionBookMark}
      />
    </Wrap>
  );
};

export default PositionBookMark;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`;
