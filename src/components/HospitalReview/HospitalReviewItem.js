import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 auto;
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

const HospitalReviewItem = ({ onSelect, review }) => {
  const {
    postId,
    hospital,
    facilityRating,
    atmosphereRating,
    employeeRating,
    treatment,
    title,
    content,
  } = review;
  return (
    <Wrapper onClick={() => onSelect(postId)}>
      <Info>
        <Hospital>{hospital}</Hospital>
        <OptionItem>시설 : {facilityRating}</OptionItem>
        <OptionItem>분위기 : {atmosphereRating}</OptionItem>
        <OptionItem>직원 : {employeeRating}</OptionItem>
        <OptionItem>{treatment}</OptionItem>
      </Info>
      <Post>
        <Title>{title}</Title>
        <Body>{content}</Body>
      </Post>
    </Wrapper>
  );
};

export default HospitalReviewItem;
