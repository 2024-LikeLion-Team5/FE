import React from "react";
import styled from "styled-components";
import hospitalImg from "../../assets/hospital_review_img.png";

const Wrapper = styled.div`
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
  background-color: white;
  &.wrapper {
    width: 25rem;
  }
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
  &.totalDetail {
    gap: 2.25rem;
  }
`;

const Img = styled.img`
  height: 7.75rem;
  width: 11.25rem; /* width 값 수정 */
  border-radius: 0.5rem;
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
  display: flex;
  justify-content: space-between;
  gap: 0.3rem;
`;

const HospitalSearchItem = ({ onSelect, review, wrapper, detail }) => {
  if (!review) return null; //통합검색때문에 추가

  const {
    id,
    hospital,
    address,
    averageFacilityRating,
    averageAtmosphereRating,
    averageEmployeeRating,
  } = review;

  return (
    <Wrapper onClick={() => onSelect(id)}>
      <Info className={wrapper}>
        <Name>{hospital}</Name>
        <Address>{address}</Address>
        <Detail className={detail}>
          <Img src={hospitalImg} alt="병원 후기 사진" />
          <Evaluations>
            <Option>
              <div>시설 평점</div> <div>{averageFacilityRating}</div>
            </Option>
            <Option>
              <div>분위기 평점</div> <div>{averageAtmosphereRating}</div>
            </Option>
            <Option>
              <div>직원 평점</div> <div>{averageEmployeeRating}</div>
            </Option>
          </Evaluations>
        </Detail>
      </Info>
    </Wrapper>
  );
};

export default HospitalSearchItem;
