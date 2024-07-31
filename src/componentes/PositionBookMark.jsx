import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faSolidBookmark } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { AddBookMarkItemState } from "../atom";

//메인 페이지) 내가 관심 있을 만한 포지션 (합격보상금 100만원, 북마크 기능)
const PositionBookMark = ({ positionItem }) => {
  const [addBookMarkItem, setAddBookMarkList] =
    useRecoilState(AddBookMarkItemState);

  const AddpositionBookMark = () => {
    if (
      addBookMarkItem.find(
        (bookMarkItem) => bookMarkItem.id === positionItem.id
      )
    ) {
      setAddBookMarkList(
        addBookMarkItem.filter(
          (bookMarkItem) => bookMarkItem.id !== positionItem.id
        )
      );
    } else {
      setAddBookMarkList([...addBookMarkItem, positionItem]);
    }
  };

  const isIncludes = addBookMarkItem.find(
    (bookMarkItem) => bookMarkItem.id === positionItem.id
  );
  return (
    <Wrap>
      <span>합격보상금 100만원</span>
      <FontAwesomeIcon
        className="buttons"
        icon={isIncludes ? faSolidBookmark : faBookmark}
        size="xl"
        onClick={AddpositionBookMark}
      />
    </Wrap>
  );
};

export default PositionBookMark;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`;
