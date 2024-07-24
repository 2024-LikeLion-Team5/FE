import React from "react";
import styled from "styled-components";
import theme from "../../Theme";

const Wrapper = styled.div`
  width: 22rem;
  height: 23.75rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nv};
  padding-bottom: 1rem;
`;

const Doctor = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Hospital = styled.span`
  font-size: 0.8125rem;
  font-weight: 700;
`;

const Stars = styled.div``;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
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
  font-size: 0.875rem;
  font-weight: 700;
`;

const Body = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const DoctorReviewItem = ({ onSelect, reviewId }) => {
  return (
    <Wrapper onClick={() => onSelect(reviewId)}>
      <Info>
        <div>
          <Doctor>이신정 의사 | </Doctor>
          <Hospital>멘텀 비뇨기과</Hospital>
        </div>
        <Stars></Stars>
        <Options>
          <OptionItem>발기부전</OptionItem>
        </Options>
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

export default DoctorReviewItem;
