import React from "react";
import styled from "styled-components";
import theme from "../Theme";

const Wrapper = styled.div`
  width: 26.125rem;
  height: 23.75rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.b4};
`;

const Info = styled.div`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nv};
  padding-bottom: 1rem;
  flex-wrap: wrap;
`;

const Hospital = styled.span`
  color: white;
  font-size: 0.8125rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.b1};
  padding: 0.3125rem 1rem;
  border-radius: 2.5rem;
`;

const OptionItem = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.b4};
  box-sizing: border-box;
  padding: 0.3125rem 1rem;
  border-radius: 2.5rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

const Post = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

const Title = styled.span`
  font-size: 0%.875rem;
  font-weight: 700;
`;

const Body = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const HospitalReviewItem = () => {
  return (
    <Wrapper>
      <Info>
        <Hospital>멘텀 비뇨기과</Hospital>
        <OptionItem>시설 : 4</OptionItem>
      </Info>
      <Post>
        <Title>의사선생님이 자세히 알려주십니다.</Title>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </Body>
      </Post>
    </Wrapper>
  );
};

export default HospitalReviewItem;
