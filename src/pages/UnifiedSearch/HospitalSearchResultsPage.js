import React from 'react';
import styled from 'styled-components';
import HospitalSearchItem from '../../components/HospitalReview/HospitalSearchItem';
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

const HospitalSearchResultsPage = () => {
    const hospitalPosts = [
      {
        id: 1,
        name: '멘텀비뇨기과',
        location: '대전광역시 유성구 대학로 99',
        rating1: '시설 평점 4.3',
        rating2: '분위기 평점 4',
        rating3: '직원 평점 4.2',
        image: 'hospital_image_url',
      },
      {
        id: 2,
        name: '멘텀비뇨기과',
        location: '대전광역시 유성구 대학로 99',
        rating1: '시설 평점 4.3',
        rating2: '분위기 평점 4',
        rating3: '직원 평점 4.2',
        image: 'hospital_image_url',
      },
    ];

  return (
    <Container>
      <Advertisement />
      <Title>병원 검색 결과</Title>
      <KeyWord>통합 검색 : 멘텀비뇨기과</KeyWord>
      <ReviewWrapper>
        {hospitalPosts.map((post) => (
          <HospitalSearchItem
            key={post.id}
            name={post.name}
            location={post.location}
            rating1={post.rating1}
            rating2={post.rating2}
            rating3={post.rating3}
            image={post.image}
          />
        ))}
      </ReviewWrapper>
    </Container>
  );
};

export default HospitalSearchResultsPage;
