import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Banner from '../Banner';
import Notice from '../Notice';
import Footer from '../Footer';
import bannerImg from "../../assets/community_img.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 2rem;
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Category = styled.div`
  flex: 1;
  margin: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.g3};
  border-radius: 8px;
`;

const MoreButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.b1};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const CommunityMainPage = () => {
  return (
    <div>
      <Header />
      <Banner
        image={bannerImg}
        menuName="커뮤니티"
        color="#002357"
      />
      <Container>
        <Notice />
        <SectionTitle>질환 고민</SectionTitle>
        <CategoryList>
          <Category>
            {/* 질환 고민 리스트 */}
            <MoreButton>질환 고민 더보기</MoreButton>
          </Category>
          <Category>
            {/* 일상 리스트 */}
            <MoreButton>일상 더보기</MoreButton>
          </Category>
        </CategoryList>
        <SectionTitle>수술 후기</SectionTitle>
        <Category>
          {/* 수술 후기 리스트 */}
          <MoreButton>수술 후기 더보기</MoreButton>
        </Category>
      </Container>
    </div>
  );
};

export default CommunityMainPage;