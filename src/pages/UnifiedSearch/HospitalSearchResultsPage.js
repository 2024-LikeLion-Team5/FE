import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import HospitalSearchItem from "../../components/HospitalReview/HospitalSearchItem";
import { getHospitalIntegration } from "../../api/community";
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
  width: 56rem;
  min-height: 46.5rem;
  box-sizing: border-box;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 3.125rem 3rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.g3};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  &.zero {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const HospitalSearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword");
  const [hospitalPosts, setHospitalPosts] = useState([]);
  const [totalHospital, setTotalHospital] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getHospitalIntegration(keyword);
        setHospitalPosts(data.getHospitalInfoResponses);
        setTotalHospital(data.totalSearchedCount);
      } catch (error) {
        console.error("Failed to fetch hospital posts:", error);
      }
    };

    fetchPosts();
  }, [keyword]);

  const handleSelectHospitalReview = (hospitalId) => {
    navigate(`/hospital-review/hospital/${hospitalId}`);
  };

  return (
    <Container>
      <Banner
        image={bannerImg}
        menuName="병원 후기"
        detail="의사별, 병원별로 다양하고 자세한 후기를 만나 보세요."
      />
      <Title>병원 검색 결과</Title>
      <KeyWord>통합 검색 : {keyword}</KeyWord>
      <ReviewWrapper className={totalHospital === 0 ? "zero" : ""}>
        {totalHospital === 0 ? (
          <div>검색 결과가 없습니다</div>
        ) : (
          hospitalPosts.map((post) => (
            <HospitalSearchItem
              key={post.id}
              review={post}
              onSelect={handleSelectHospitalReview}
              wrapper="totalSearch"
              detail="totalDetail"
            />
          ))
        )}
      </ReviewWrapper>
    </Container>
  );
};

export default HospitalSearchResultsPage;
