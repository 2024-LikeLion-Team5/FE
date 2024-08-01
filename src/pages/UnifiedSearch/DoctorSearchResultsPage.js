import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import DoctorReviewItem from '../../components/HospitalReview/DoctorReviewItem';
import Advertisement from "../../components/Advertisement";
import { getDoctorReviewIntegration } from "../../api/community"; // API 함수 import
import Banner from "../../components/Banner";
import bannerImg from "../../assets/review_img.png";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  margin-top: 3rem;
`;

const KeyWord = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 auto;
  border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
  width: 52rem;
  text-align: center;
  padding-bottom: 2.5rem;
  margin-top: 1rem;
`;

const ReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const DoctorSearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get('keyword');
  const [doctorReviews, setDoctorReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getDoctorReviewIntegration(keyword);
        setDoctorReviews(data.doctorReviews || []);
      } catch (error) {
        console.error("Failed to fetch doctor reviews:", error);
      }
    };

    fetchReviews();
  }, [keyword]);

  return (
    <Container>
      <Banner
        image={bannerImg}
        menuName="병원 후기"
        detail="의사별, 병원별로 다양하고 자세한 후기를 만나 보세요."
      />
      <Title>의사 상담 후기 검색 결과</Title>
      <KeyWord>통합 검색 : {keyword}</KeyWord>
      <ReviewWrapper>
        {doctorReviews.length === 0 ? (
          <div>검색 결과가 없습니다</div>
        ) : (
          doctorReviews.map(review => (
            <DoctorReviewItem
              key={review.reviewId}
              review={review}
            />
          ))
        )}
      </ReviewWrapper>
    </Container>
  );
};

export default DoctorSearchResultsPage;
