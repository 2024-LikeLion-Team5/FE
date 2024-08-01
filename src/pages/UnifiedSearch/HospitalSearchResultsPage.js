import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import HospitalSearchItem from '../../components/HospitalReview/HospitalSearchItem';
import Advertisement from "../../components/Advertisement";
import { getHospitalIntegration } from "../../api/community"; // API 함수 import
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

const HospitalSearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get('keyword');
  const [hospitalPosts, setHospitalPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getHospitalIntegration(keyword);
        setHospitalPosts(data.getHospitalInfoResponses || []);
      } catch (error) {
        console.error("Failed to fetch hospital posts:", error);
      }
    };

    fetchPosts();
  }, [keyword]);

  return (
    <Container>
      <Banner
        image={bannerImg}
        menuName="병원 후기"
        detail="의사별, 병원별로 다양하고 자세한 후기를 만나 보세요."
      />
      <Title>병원 검색 결과</Title>
      <KeyWord>통합 검색 : {keyword}</KeyWord>
      <ReviewWrapper>
        {hospitalPosts.length === 0 ? (
          <div>검색 결과가 없습니다</div>
        ) : (
          hospitalPosts.map(post => (
            <HospitalSearchItem
              key={post.id}
              name={post.hospital}
              location={post.address}
              rating1={`시설 평점 ${post.averageFacilityRating}`}
              rating2={`분위기 평점 ${post.averageAtmosphereRating}`}
              rating3={`직원 평점 ${post.averageEmployeeRating}`}
              image={post.image || 'hospital_image_url'} // 이미지 URL이 없을 경우 기본 이미지 사용
            />
          ))
        )}
      </ReviewWrapper>
    </Container>
  );
};

export default HospitalSearchResultsPage;
