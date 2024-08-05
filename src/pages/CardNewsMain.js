import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import bannerImg from "../assets/archive_img.png";
import Notice from "../components/Notice";
import thumbNail1 from "../assets/thumbnail1.png";
import thumbNail2 from "../assets/thumbnail2.png";
import thumbNail3 from "../assets/thumbnail3.png";
import thumbNail4 from "../assets/thumbnail4.png";

const Container = styled.div`
  width: 70rem;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 12rem;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 61rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Content = styled.div`
  border-radius: 1rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const ThumbNailWrapper = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;
`;

const ThumbNail = styled.img`
  width: 9.75rem;
  height: 9.75rem;
`;

const TitleWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SmallTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const LargeTitle = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const MiddleTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Doctors = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  align-self: flex-end;
  font-size: 0.875rem;

  .inspection {
    font-weight: 600;
  }

  .doctor {
    font-weight: 500;
  }
`;

const CardNewsMain = () => {
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
    <div>
      <Banner
        image={bannerImg}
        menuName={"바로서기"}
        detail={"냥박사와 함께하는 바로서기"}
      />
      <Notice />
      <Container>
        <ContentWrapper>
          {mockData.map((data, index) => (
            <Content key={index}>
              <ThumbNailWrapper>
                <ThumbNail src={data.imgUrl} />
                <TitleWrapper>
                  <LargeTitle>{data.largeTitle}</LargeTitle>
                  <MiddleTitle>{data.smallTitle}</MiddleTitle>
                  <SmallTitle>{data.middleTitle}</SmallTitle>
                </TitleWrapper>
              </ThumbNailWrapper>
              <Doctors>
                <div className="inspection">원고검수</div>
                <div className="doctor">멘텀비뇨기과 전문의 ㅇㅇㅇ</div>
                <div className="doctor">멘텀비뇨기과 전문의 ㅁㅁㅁ</div>
              </Doctors>
            </Content>
          ))}
        </ContentWrapper>
      </Container>
    </div>
  );
};

export default CardNewsMain;
