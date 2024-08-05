import React from "react";
import styled from "styled-components";
import thumbNail1 from "../assets/thumbnail1.png";
import thumbNail2 from "../assets/thumbnail2.png";
import thumbNail3 from "../assets/thumbnail3.png";
import thumbNail4 from "../assets/thumbnail4.png";

const Wrapper = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
`;

const CardContainer = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
`;

const ThumbNail = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const GradientOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index: 2;
`;

const TitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 3;
`;

const SmallTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const LargeTitle = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

const MiddleTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const CardNews = () => {
  const mockData = [
    {
      imgUrl: thumbNail1,
      smallTitle: "내 음경이 휘어 있는데 정상일까?",
      largeTitle: "닥터냥의 음경만곡증 이야기",
      middleTitle: "음경 만곡증에 대한 모든 것",
    },
    {
      imgUrl: thumbNail2,
      smallTitle: "혹시 나도...?",
      largeTitle: "닥터냥의 조루 진단",
      middleTitle: "조루 자가진단 테스트 해보기",
    },
    {
      imgUrl: thumbNail3,
      smallTitle: "아니 벌써",
      largeTitle: "조루 수술",
      middleTitle: "조루 수술의 종류와 특징",
    },
    {
      imgUrl: thumbNail4,
      smallTitle: "괜찮아요? 많이 힘들었죠?",
      largeTitle: "굵은 허벅지와 사정의 상관관계",
      middleTitle: "허벅지 굵기 = 사정 능력?",
    },
  ];

  return (
    <Wrapper>
      {mockData.map((data, index) => (
        <CardContainer key={index}>
          <ThumbNail src={data.imgUrl} alt={data.largeTitle} />
          <GradientOverlay />
          <TitleWrapper>
            <SmallTitle>{data.smallTitle}</SmallTitle>
            <LargeTitle>{data.largeTitle}</LargeTitle>
            <MiddleTitle>{data.middleTitle}</MiddleTitle>
          </TitleWrapper>
        </CardContainer>
      ))}
    </Wrapper>
  );
};

export default CardNews;
