import React from "react";
import styled from "styled-components";
import StarRatingDisplay from "../StarRatingDisplay";

const Wrapper = styled.div`
  flex: 0 0 auto;
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
  if (!review) return null; //통합검색때문에 추가

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

  const ageOption = [
    { key: "UNDER_TWENTY", value: "20대 이하" },
    { key: "THIRTY", value: "30대" },
    { key: "FORTY", value: "40대" },
    { key: "FIFTY", value: "50대" },
    { key: "SIXTY", value: "60대" },
    { key: "OVER_SEVENTY", value: "70대 이상" },
  ];

  const options = [
    { key: "IMPOTENCE", value: "발기부전" },
    { key: "PENIS_ENLARGEMENT", value: "음경확대" },
    { key: "VASECTOMY", value: "정관수술" },
    { key: "URINARY_STONE", value: "요로결석" },
    { key: "PREMATURE_AND_DELAYED_EJACULATION", value: "조루/지루" },
    { key: "PROSTATITIS", value: "전립선염" },
    { key: "ETC", value: "기타" },
  ];

  const getAgeGroupValue = (key) => {
    const age = ageOption.find((option) => option.key === key);
    return age ? age.value : "";
  };

  const getDiseaseValue = (key) => {
    const disease = options.find((option) => option.key === key);
    return disease ? disease.value : "";
  };

  return (
    <Wrapper onClick={() => onSelect(postId)}>
      <Info>
        <div>
          <Doctor>{doctor} | </Doctor>
          <Hospital>{hospital}</Hospital>
        </div>
        <StarRatingDisplay rating={rating} />
        <Options>
          <OptionItem>{getDiseaseValue(disease)}</OptionItem>
          <OptionItem>{treatment}</OptionItem>
          <OptionItem>{getAgeGroupValue(ageGroup)}</OptionItem>
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
