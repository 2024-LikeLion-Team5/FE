import React from "react";
import styled from "styled-components";
import HospitalSearchItem from "./HospitalSearchItem";
import DoctorSeachItem from "./DoctorSearchItem";
import seeMore from "../../assets/see_more.png";
import DoctorReviewItem from "./DoctorReviewItem";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const KeyWord = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 auto;
  border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
  width: 52rem;
  text-align: center;
  padding-bottom: 2.5rem;
  margin-top: 5.75rem;
`;

const HospitalResult = styled.div`
  margin: 5.25rem 0;
`;

const Result = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const ResultTitle = styled.div`
  font-size: lrem;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 0.9375rem;
  font-weight: bold;
`;

const Btn = styled.img`
  height: 13px;
`;

const DoctorResult = styled.div`
  margin-bottom: 10.375rem;
`;

const Reviews = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  padding: 1.625rem 0;
`;

const ReviewSearchResult = () => {
  const navigate = useNavigate();

  const handleSelectHospitalReview = (id) => {
    navigate(`/hospital-review/${id}?tab=hospital`);
  };

  const handleSelectDoctorReview = (id) => {
    navigate(`/hospital-review/${id}?tab=doctor`);
  };

  return (
    <Container>
      <KeyWord>검색 : 멘텀비뇨기과</KeyWord>
      <HospitalResult>
        <Result>
          <ResultTitle>병원 검색 결과 (1)</ResultTitle>
          <Text>더보기</Text>
          <Btn src={seeMore} alt="더보기" />
        </Result>
        <HospitalSearchItem
          onSelect={handleSelectHospitalReview}
          reviewId={1}
        />
      </HospitalResult>
      <DoctorResult>
        <Result>
          <ResultTitle>의사 상담 후기 검색 결과 (1)</ResultTitle>
          <Text>더보기</Text>
          <Btn src={seeMore} alt="더보기" />
        </Result>
        <Reviews>
          <DoctorReviewItem onSelect={handleSelectDoctorReview} reviewId={1} />
        </Reviews>
      </DoctorResult>
    </Container>
  );
};

export default ReviewSearchResult;
