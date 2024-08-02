import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getSurgeryPosts } from "../../api/community";
import Banner from "../Banner";
import Notice from "../Notice";
import PostList from "../PostList";
import PostActions from "../PostActions";
import bannerImg from "../../assets/surgery_img.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SurgeryMainPage = () => {
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
        const data = await getSurgeryPosts(selectedDisease, 0);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, [selectedDisease]);

  const handlePostClick = (postId) => {
    navigate(`/surgery/detail/${postId}`);
  };

  const handleSelectDisease = (disease) => {
    setSelectedDisease(disease);
  };

  return (
    <div>
      <Banner image={bannerImg} menuName="수술 후기" color="#002357" />
      <Container>
        <Notice />
        <PostActions writePath="/surgery/write" showSelect={true} onSelectDisease={handleSelectDisease} />
        <PostList posts={posts} category="surgery" onPostClick={handlePostClick} />
      </Container>
    </div>
  );
};

export default SurgeryMainPage;

