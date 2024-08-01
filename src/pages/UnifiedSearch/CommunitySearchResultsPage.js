//postlist참고 후 
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import Notice from '../../components/Notice';
import PostList from '../../components/PostList';
import { getCommunityIntegrationList,getDiseasePostId } from '../../api/community';
import bannerImg from '../../assets/community_img.png';

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
  margin: 5.75rem auto;
`;

const CommunitySearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const keyword = query.get('keyword');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getCommunityIntegrationList(keyword);
        const formattedPosts = data.map(post => ({
          postId: post.postId,
          title: post.title,
          createdAt: post.createdAt,
          likeCount: post.likeCount,
          hits: post.hits,
          postType: post.postType,
          containsImage: post.containsImage,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, [keyword]);

  const handlePostClick = (postId) => {
    navigate(`/community/detail/${postId}`);
  };

  

  return (
    <div>
      <Banner image={bannerImg} menuName="커뮤니티" color="#002357" />
      <Container>
        <Notice />
        <KeyWord>통합 검색 : {keyword}</KeyWord>
        <PostList posts={posts} category="community" onPostClick={handlePostClick} />
      </Container>
    </div>
  );
};

export default CommunitySearchResultsPage;
