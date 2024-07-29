import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DoctorReviewItem from "../../components/HospitalReview/DoctorReviewItem";
import HospitalReviewItem from "../../components/HospitalReview/HospitalReviewItem";
import { getDoctorReviewList, getHospitalReviewList } from "../../api/hospital";

const Wrapper = styled.div`
  width: calc(100% - (100% - 1120px) / 2);
  margin-top: 10.75rem;
  margin-left: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 9rem;
  margin-bottom: 21.25rem;
`;

const ReviewTitle = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  display: block;
  margin-bottom: 1rem;
`;

const Reviews = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.g3};
  margin-left: 0;
  box-sizing: border-box;
  padding: 4rem 2.5rem;
  border-radius: 0.5rem;
`;

const HospitalReviewList = () => {
  const navigate = useNavigate();
  const [doctorReviews, setDoctorReviews] = useState([]);
  const [hospitalReviews, setHospitalReviews] = useState([]);

  useEffect(() => {
    const fetchDoctorReviews = async () => {
      const data = await getDoctorReviewList();
      setDoctorReviews(data);
    };

    const fetchHospitalReviews = async () => {
      const data = await getHospitalReviewList();
      setHospitalReviews(data);
    };

    fetchDoctorReviews();
    fetchHospitalReviews();
  }, []);

  const handleSelectHospitalReview = (id) => {
    navigate(`/hospital-review/${id}?tab=hospital`);
  };

  const handleSelectDoctorReview = (id) => {
    navigate(`/hospital-review/${id}?tab=doctor`);
  };

  return (
    <Wrapper>
      <div>
        <ReviewTitle>병원별 후기</ReviewTitle>
        <Reviews>
          {hospitalReviews.map((review) => (
            <HospitalReviewItem
              key={review.postId}
              onSelect={handleSelectHospitalReview}
              review={review}
            />
          ))}
        </Reviews>
      </div>
      <div>
        <ReviewTitle>의사 상담 후기</ReviewTitle>
        <Reviews>
          {doctorReviews.map((review) => {
            <DoctorReviewItem
              key={review.postId}
              onSelect={handleSelectDoctorReview}
              review={review}
            />;
          })}
        </Reviews>
      </div>
    </Wrapper>
  );
};

export default HospitalReviewList;
