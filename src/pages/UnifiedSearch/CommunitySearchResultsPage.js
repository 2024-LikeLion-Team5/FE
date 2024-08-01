import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import Notice from "../../components/Notice";
import { 
  getCommunityIntegrationList,
  getDiseasePostId,
  getSurgeryPostId,
  getDailyPostId,
} from "../../api/community";
import bannerImg from "../../assets/community_img.png";
import photoImg from "../../assets/photo.png";
import seeMoreImg from "../../assets/see_more.png";

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

const List = styled.div`
  margin-top: 1rem;
`;

const Post = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr 1fr 1fr;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.g3};
  }
`;

const PostType = styled.span`
  font-weight: ${({ type }) => (type === "공지" ? "bold" : "normal")};
  color: ${({ theme }) => theme.colors.b1};
  text-align: center;
  margin: 0 auto;
`;

const PostImage = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
`;

const PostTitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.body.split(" ")[2]};
  color: ${({ theme }) => theme.colors.nv};
`;

const PostDate = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.body.split(" ")[2]};
  color: ${({ theme }) => theme.colors.nv};
`;

const PostLikes = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.body.split(" ")[2]};
  color: ${({ theme }) => theme.colors.nv};
`;

const PostViews = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.body.split(" ")[2]};
  color: ${({ theme }) => theme.colors.nv};
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr 1fr 1fr;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.g3};
  font-weight: bold;
  text-align: center;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 0.5rem;
  padding: 2rem 0 177px;
`;

const PageNumber = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.b4 : "transparent"};
  color: ${({ theme }) => theme.colors.nv};
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.button};
`;

const SeeMoreButton = styled.img`
  width: 8px;
  height: 13px;
  cursor: pointer;
`;

const CommunitySearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const postTypeToKorean = {
    CONCERN: "질환 고민",
    SURGERY_REVIEW: "수술 후기",
    DAILY: "일상",
    DOCTOR_REVIEW: "의사 후기",
    HOSPITAL_REVIEW: "병원 후기",
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getCommunityIntegrationList(keyword);
        const formattedPosts = data.map((post) => ({
          postId: post.postId,
          title: post.title,
          createdAt: post.createdAt,
          likeCount: post.likeCount,
          hits: post.hits,
          postType: postTypeToKorean[post.postType] || post.postType,
          containsImage: post.containsImage,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  });

  const handlePostClick = async (postId, postType) => {
    try {
      let post;
      switch (postType) {
        case "질환 고민":
          post = await getDiseasePostId(postId);
          navigate(`/disease/detail/${postId}`);
          break;
        case "수술 후기":
          post = await getSurgeryPostId(postId);
          navigate(`/surgery-reviews/detail/${postId}`);
          break;
        case "일상":
          post = await getDailyPostId(postId);
          navigate(`/communities/dailies/${postId}`);
          break;
        default:
          console.error("Unknown post type:", postType);
          return;
      }
      console.log("Post ID:", postId, "Post Type:", postType, "Post:", post);
    } catch (error) {
      console.error("Failed to fetch post details:", error);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Banner image={bannerImg} menuName="커뮤니티" color="#002357" />
      <Container>
        <Notice />
        <KeyWord>통합 검색 : {keyword}</KeyWord>
        <Header>
          <PostType>구분</PostType>
          <PostImage src={photoImg} alt="post" />
          <PostTitle>제목</PostTitle>
          <PostDate>작성일</PostDate>
          <PostLikes>좋아요</PostLikes>
          <PostViews>조회수</PostViews>
        </Header>
        <List>
          {currentPosts.map((post) => (
            <Post
              key={post.postId}
              onClick={() => handlePostClick(post.postId, post.postType)}
            >
              <PostType>{post.postType}</PostType>
              <PostImage src={photoImg} alt="post" />
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.createdAt}</PostDate>
              <PostLikes>{post.likeCount}</PostLikes>
              <PostViews>{post.hits}</PostViews>
            </Post>
          ))}
        </List>
        <PaginationWrapper>
          {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(
            (number) => (
              <PageNumber
                key={number + 1}
                selected={currentPage === number + 1}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </PageNumber>
            )
          )}
          <SeeMoreButton src={seeMoreImg} alt="see more" />
        </PaginationWrapper>
      </Container>
    </div>
  );
};

export default CommunitySearchResultsPage;
