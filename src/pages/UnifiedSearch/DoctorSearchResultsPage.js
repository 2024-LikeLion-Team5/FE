import React from 'react';
import styled from 'styled-components';
import DoctorReviewItem from '../../components/HospitalReview/DoctorReviewItem';
import Advertisement from "../../components/Advertisement";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
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
  const reviews = [
    {
      id: 1,
      doctor: '이신정 의사 1',
      hospital: '멘텀 비뇨기과',
      rating: 4,
      categories: ['발기부전', '단순 상담', '50대'],
      content: '의사선생님이 자세히 알려주십니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      doctor: '이신정 의사 1',
      hospital: '멘텀 비뇨기과',
      rating: 4,
      categories: ['발기부전', '단순 상담', '50대'],
      content: '의사선생님이 자세히 알려주십니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  return (
    <Container>
      <Advertisement />
      <Title>의사 상담 후기 검색 결과</Title>
      <KeyWord>통합 검색 : 멘텀비뇨기과</KeyWord>
      <ReviewWrapper>
        {reviews.map(review => (
          <DoctorReviewItem key={review.id} review={review} />
        ))}
      </ReviewWrapper>
    </Container>
  );
};

export default DoctorSearchResultsPage;
