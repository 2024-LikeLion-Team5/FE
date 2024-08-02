import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getDiseasePosts } from "../../api/community";
import Banner from "../Banner";
import Notice from "../Notice";
import PostList from "../PostList";
import PostActions from "../PostActions";
import bannerImg from "../../assets/concern_img.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const DiseaseMainPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState(
    // "IMPOTENCE",
    // "PENIS_ENLARGEMENT",
    // "VASECTOMY",
    // "URINARY_STONE",
    // "PREMATURE_AND_DELAYED_EJACULATION",
    // "PROSTATITIS",
    // "ETC",
    null
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log(`Fetching posts for disease: ${selectedDisease}`); // 추가된 로그
        const data = await getDiseasePosts(selectedDisease, 0);
        console.log("Fetched posts:", data); // 응답 확인을 위한 로그
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, [selectedDisease]);

  const handlePostClick = (postId) => {
    navigate(`/disease/detail/${postId}`);
  };

  const handleSelectDisease = (disease) => {
    console.log(`Selected disease: ${disease}`); // 디버깅용 로그
    setSelectedDisease(disease);
  };

  return (
    <div>
      <Banner image={bannerImg} menuName="질환 고민" color="#002357" />
      <Container>
        <Notice />
        <PostActions
          writePath="/disease/write"
          showSelect={true}
          onSelectDisease={handleSelectDisease}
        />
        <PostList
          posts={posts}
          category="disease"
          onPostClick={handlePostClick}
        />
      </Container>
    </div>
  );
};

export default DiseaseMainPage;
