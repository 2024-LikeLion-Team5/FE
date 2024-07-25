import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import bannerImg from ".././assets/archive_img.png";
import Notice from "../components/Notice";

const ContentWrapper = styled.div`
  width: 70rem;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 7.75rem;
`;

const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 2.5rem;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  padding-bottom: 1.125rem;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
`;

const BodyWrapper = styled.div`
  width: 34rem;
  height: 43.125rem;
  box-sizing: border-box;
  padding: 3.5rem 3rem;
  border: 2px solid ${({ theme }) => theme.colors.b2};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BodyTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Body = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.7;
`;

const Source = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: auto;
`;

const Options = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const Option = styled.button`
  height: 2.375rem;
  display: flex;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.colors.b2};
  border-radius: 2.5rem;
  background-color: transparent;
  font-size: 0.9375rem;
  font-weight: bold;
  padding: 0.625rem 1.5rem;
  cursor: pointer;
  &.active {
    background-color: ${({ theme }) => theme.colors.b1};
    color: white;
    border: none;
  }
`;

const Library = () => {
  const disease = [
    {
      title: "발기부전",
      body: "",
    },
    { title: "전립선 비대증", body: "" },
    { title: "음경 확대", body: "" },
    { title: "정관수술", body: "" },
    { title: "요로결석", body: "" },
    { title: "조루/지루", body: "" },
    {
      title: "전립선염",
      body: "전립선에 염증이 생기는 병을 전립선염이라고 합니다. 하지만 의사들 사이에서도 서로 사용하는 의미가 조금씩 다릅니다. 병리학자들은 현미경으로 백혈구나 임파구가 전립선조직 내에서 관찰될 때에 전립선염이라 합니다. 전립선염 환자들을 진료하고 치료하는 비뇨기과 의사들은 전립선액에서 백혈구가 400배의 고배율의 현미경으로 백혈구가 10개 이상, 비정상적으로 관찰되는 경우에 한정하여 사용하기도 하며,보다 폭 넓은 의미로는 백혈구가 증가하지 않아도 만성 전립선염에서 흔히 관찰되는 회음부 통증과 같은 전립선증상을 호소하면 전립선염으로 진단하기도 합니다.",
    },
    { title: "방광염", body: "" },
  ];

  const [selectedDisease, setSelectedDisease] = useState(disease[0]);

  return (
    <div>
      <Banner image={bannerImg} menuName={"자료실"} detail={"질환 바로 알기"} />
      <Notice />
      <ContentWrapper>
        <Title>질환/고민 바로 알기</Title>
        <Content>
          <div>
            <BodyWrapper>
              <div>
                <BodyTitle>{selectedDisease.title}</BodyTitle>
                <Body>{selectedDisease.body}</Body>
              </div>
              <Source>출처 : 대한비뇨의학회</Source>
            </BodyWrapper>
            <Body>
              자료실에 없는 질환은 하단의 고객 문의를 통해 문의해주세요.
            </Body>
          </div>
          <div>
            <Options>
              {disease.map((item, index) => (
                <Option
                  key={index}
                  className={
                    item.title === selectedDisease.title ? "active" : ""
                  }
                  onClick={() => setSelectedDisease(item)}
                >
                  {item.title}
                </Option>
              ))}
            </Options>
          </div>
        </Content>
      </ContentWrapper>
    </div>
  );
};

export default Library;
