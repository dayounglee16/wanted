import styled from "styled-components";
import { data } from "../data";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRecoilState } from "recoil";
import { AddCompanyItemState } from "../atom";

//누적투자 100억이상 슬라이드 리스트 부분
const TagAccumulateSlideList = () => {
  const [addCompanyItem, setAddCompanyItem] =
    useRecoilState(AddCompanyItemState);

  const clickFollow = (tagAccumulateItem) => {
    if (
      addCompanyItem.find(
        (companyItem) => companyItem.id === tagAccumulateItem.id
      )
    ) {
      setAddCompanyItem(
        addCompanyItem.filter(
          (companyItem) => companyItem.id !== tagAccumulateItem.id
        )
      );
    } else {
      setAddCompanyItem([...addCompanyItem, tagAccumulateItem]);
    }
  };

  return (
    <Wrap>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.tagAccumulateData.map((tagAccumulateItem) => {
          return (
            <SwiperSlide key={tagAccumulateItem.id}>
              <TagBox>
                <TxtAligin>
                  <TxtLeft>
                    <div className="companyLogo"></div>
                    <div className="tagTitle">
                      <span>{tagAccumulateItem.title}</span>
                      <span>{tagAccumulateItem.subTitle}</span>
                    </div>
                  </TxtLeft>

                  <TxtRight>
                    {addCompanyItem.includes(tagAccumulateItem) ? (
                      <button
                        className="followingBtn"
                        onClick={() => clickFollow(tagAccumulateItem)}
                      >
                        팔로잉
                      </button>
                    ) : (
                      <button
                        className="followBtn"
                        onClick={() => clickFollow(tagAccumulateItem)}
                      >
                        팔로우
                      </button>
                    )}
                  </TxtRight>
                </TxtAligin>
              </TagBox>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrap>
  );
};

export default TagAccumulateSlideList;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TagBox = styled.div`
  width: 345px;
  background-color: #999;
  border-radius: 10px;
`;

const TxtAligin = styled.div`
  height: 210px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`;

const TxtLeft = styled.div`
  height: 50px;
  line-height: 25px;
  display: flex;
  align-items: center;
  gap: 15px;

  .companyLogo {
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 10px;
  }

  .tagTitle {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: bold;
  }
`;

const TxtRight = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  .followBtn {
    padding: 7px 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0);
    border: 1.5px solid #fff;
    color: #fff;
    font-weight: bold;
  }

  .followingBtn {
    padding: 7px 10px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-weight: bold;
  }
`;
