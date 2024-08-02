import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HospitalSearchItem from "./HospitalSearchItem";
import seeMore from "../../assets/see_more.png";
import DoctorReviewItem from "./DoctorReviewItem";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getDoctorReviewList,
  getSearchHospitalReviews,
} from "../../api/hospital";

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
  font-size: 1rem;
  font-weight: bold;
`;

const MoreWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 0.9375rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Btn = styled.img`
  height: 13px;
`;

const DoctorResult = styled.div`
  margin-bottom: 10.375rem;
`;

const Reviews = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  padding: 1.625rem 0;
`;

const HospitalSearchItemWrapper = styled.div`
  flex: 1;
  border: none;
  display: flex;
  gap: 1rem;
`;

const ResultZero = styled.div`
  margin: 4rem auto;
  font-size: 1rem;
  font-weight: bold;
`;

const ReviewSearchResult = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [hospitalReviews, setHospitalReviews] = useState([]);
  const [totalDoctor, setTotalDoctor] = useState(0);
  const [doctorReviews, setDoctorReviews] = useState([]);
  const [totalHospital, setTotalHospital] = useState(0);

  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    const fetchSearchDoctor = async () => {
      try {
        const data = await getDoctorReviewList(keyword);
        setDoctorReviews(data.doctorTreatmentReviewPostsResponses);
        setTotalDoctor(data.totalSearchedCount);
      } catch (error) {
        console.error("검색 결과 로드 실패:", error);
      }
    };

    const fetchSeatchHospital = async () => {
      const data = await getSearchHospitalReviews(keyword);
      console.log(data);
      setHospitalReviews(data.getHospitalInfoResponses);
      setTotalHospital(data.totalSearchedCount);
    };

    fetchSearchDoctor();
    fetchSeatchHospital();
  }, [keyword]);

  const handleSelectHospitalReview = (hospitalId) => {
    navigate(`/hospital-review/hospital/${hospitalId}`);
  };

  const handleSelectDoctorReview = (postId) => {
    navigate(`/hospital-review/doctor-review/${postId}`);
  };

  const handleHospitalMore = () => {
    navigate(`/hospital-search-results?keyword=${keyword}`);
  };

  const handleDoctorMore = () => {
    navigate(`/doctor-search-results?keyword=${keyword}`);
  };

  return (
    <Container>
      <KeyWord>검색 : {keyword}</KeyWord>
      <HospitalResult>
        <Result>
          <ResultTitle>병원 검색 결과 ({totalHospital})</ResultTitle>
          <MoreWrapper onClick={handleHospitalMore}>
            <Text>더보기</Text>
            <Btn src={seeMore} alt="더보기" />
          </MoreWrapper>
        </Result>
        <Reviews>
          {totalHospital === 0 ? (
            <ResultZero>검색 결과가 없습니다</ResultZero>
          ) : (
            <HospitalSearchItemWrapper>
              {hospitalReviews.slice(0, 3).map((review, index) => (
                <HospitalSearchItem
                  key={review.hospitalId || index}
                  onSelect={handleSelectHospitalReview}
                  review={review}
                />
              ))}
            </HospitalSearchItemWrapper>
          )}
        </Reviews>
      </HospitalResult>
      <DoctorResult>
        <Result>
          <ResultTitle>의사 상담 후기 검색 결과 ({totalDoctor})</ResultTitle>
          <MoreWrapper onClick={handleDoctorMore}>
            <Text>더보기</Text>
            <Btn src={seeMore} alt="더보기" />
          </MoreWrapper>
        </Result>
        <Reviews>
          {totalDoctor === 0 ? (
            <ResultZero>검색 결과가 없습니다.</ResultZero>
          ) : (
            doctorReviews
              .slice(0, 3)
              .map((review, index) => (
                <DoctorReviewItem
                  key={review.postId || index}
                  onSelect={handleSelectDoctorReview}
                  review={review}
                />
              ))
          )}
        </Reviews>
      </DoctorResult>
    </Container>
  );
};

export default ReviewSearchResult;
