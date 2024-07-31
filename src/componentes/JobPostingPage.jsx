import styled from "styled-components";
import { data } from "../data";
import JopPostingBookMarkIcon from "./JobPostingBookMarkIcon";

//서브 페이지) 채용공고 페이지 회사 리스트
const JobPostingPage = () => {
  const companyList = data.companyData;

  return (
    <Wrap>
      <div>
        <div className="companyTitle">
          <h4>🔥적극 채용 중인 회사</h4>
          <button>ℹ️ 상품안내</button>
        </div>
        <div className="companyBox">
          {companyList.map((companyItem) => (
            <div className="companyList" key={companyItem.id}>
              <div className="companyImg">
                <div className="companyBookMark">
                  <span>합격보상금 100만원</span>
                  <JopPostingBookMarkIcon companyItem={companyItem} />
                </div>
              </div>
              <div className="companyTxt">
                <span className="title">{companyItem.title}</span>
                <span className="position">{companyItem.position}</span>
                <span className="location">{companyItem.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
};

export default JobPostingPage;

const Wrap = styled.div`
  display: flex;
  padding: 160px 0;

  .companyTitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0 20px 0;
    font-size: 16px;

    button {
      background-color: #fff;
      color: #999;
      font-weight: bold;
    }
  }
  .companyBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 19px;

    .companyList {
      width: 264px;
      height: 280px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .companyImg {
        border-radius: 10px;
        height: 180px;
        background-color: #999;
        cursor: pointer;

        .companyBookMark {
          padding: 15px;
          font-weight: bold;
          color: rgb(51, 102, 255);
          display: flex;
          justify-content: space-between;
          span {
            color: #fff;
          }
        }
      }
      .companyTxt {
        display: flex;
        flex-direction: column;
        height: 130px;
        cursor: pointer;

        font-size: 12px;
        color: #777;
        gap: 5px;

        .title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }
      }
    }
  }
`;
