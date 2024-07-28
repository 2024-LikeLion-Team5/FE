import React from "react";
import styled from "styled-components";
import theme from "../../Theme";
import StarRatingDisplay from "../StarRatingDisplay";

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

const DoctorReviewItem = ({ onSelect, review }) => {
  const {
    postId,
    doctor,
    hospital,
    rating,
    disease,
    treatment,
    ageGroup,
    title,
    content,
  } = review;
  return (
    <Wrapper onClick={() => onSelect(postId)}>
      {" "}
      {/*여기 postId hospitalId로 바꿔야 함*/}
      <Info>
        <div>
          <Doctor>{doctor} | </Doctor>
          <Hospital>{hospital}</Hospital>
        </div>
        <StarRatingDisplay rating={rating} />
        <Options>
          <OptionItem>{disease}</OptionItem>
          <OptionItem>{treatment}</OptionItem>
          <OptionItem>{ageGroup}</OptionItem>
        </Options>
      </Info>
      <Post>
        <Title>{title}</Title>
        <Body>{content}</Body>
      </Post>
    </Wrapper>
  );
};

export default DoctorReviewItem;
