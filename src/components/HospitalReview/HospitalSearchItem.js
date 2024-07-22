import React from "react";
import styled from "styled-components";
import hospitalImg from "../../assets/hospital_review_img.png";

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  padding: 1.625rem 0;
`;

const Info = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 0.5rem;
  width: fit-content;
  height: 14.25rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem;
`;

const Name = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Address = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const Detail = styled.div`
  display: flex;
  gap: 1rem;
`;

const Img = styled.img`
  height: 7.75rem;
`;

const Evaluations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Option = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 2.5rem;
  padding: 0.25rem 1rem;
`;

const HospitalSearchItem = () => {
  return (
    <Wrapper>
      <Info>
        <Name>멘텀비뇨기과</Name>
        <Address>대전광역시 유성구 대학로 99</Address>
        <Detail>
          <Img src={hospitalImg} alt="병원 후기 사진" />
          <Evaluations>
            <Option>시설 평점 4.3</Option>
            <Option>분위기 평점 4</Option>
            <Option>직원 평점 4.2</Option>
          </Evaluations>
        </Detail>
      </Info>
    </Wrapper>
  );
};

export default HospitalSearchItem;
