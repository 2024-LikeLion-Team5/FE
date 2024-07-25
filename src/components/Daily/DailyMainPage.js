import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Banner from '../Banner';
import Notice from '../Notice';
import PostList from '../PostList';
import bannerImg from "../../assets/daily_img.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PageNumber = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.g1};
  color: white;
  cursor: pointer;
`;

const DailyMainPage = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Header />
      <Banner
        image={bannerImg}
        menuName="일상"
        color="#002357"
      />
      <Container>
        <Notice />
        <PostList posts={posts} />
        <Pagination>
          <PageNumber>1</PageNumber>
          <PageNumber>2</PageNumber>
          <PageNumber>3</PageNumber>
        </Pagination>
      </Container>
    </div>
  );
};

export default DailyMainPage;
