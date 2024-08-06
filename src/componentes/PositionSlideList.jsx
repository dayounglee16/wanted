import styled from "styled-components";
import { data } from "../data";
import PositionBookMark from "./PositionBookMark";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//내가 관심 있을 만한 포지션 슬라이드 리스트 부분
const PositionSlideList = () => {
  return (
    <Wrap>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".positionNext",
          prevEl: ".positionPrev",
        }}
      >
        {data.companyData
          .filter((positionItem) => positionItem.subTitle)
          .map((positionItem, i) => {
            return (
              <SwiperSlide key={positionItem.id}>
                <div className="positionList">
                  <div className="officeImg">
                    <PositionBookMark positionItem={positionItem} i={i} />
                  </div>
                  <h3>{positionItem.title}</h3>
                  <p className="subTitle">{positionItem.subTitle}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Wrap>
  );
};

export default PositionSlideList;

const Wrap = styled.div`
  display: flex;

  .positionList {
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 14px;
    cursor: pointer;
  }

  .officeImg {
    width: 100%;
    aspect-ratio: 3/2;
    border-radius: 10px;
    background-color: #666;
  }

  .swiper-slide {
    margin-right: 0;
  }
  .subTitle {
    font-size: 12px;
    color: #666;
  }
`;
