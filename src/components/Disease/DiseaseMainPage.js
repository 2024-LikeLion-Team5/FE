import React, { useState } from "react";
import styled from "styled-components";
import Banner from "../Banner";
import Notice from "../Notice";
// import Postlist from "../PostList";
import bannerImg from "../../assets/concern_img.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const DiseaseMainPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "질환 고민 게시글 제목 1",
      content: "질환 고민 게시글 내용 1",
    },
    {
      id: 2,
      title: "질환 고민 게시글 제목 2",
      content: "질환 고민 게시글 내용 2",
    },
  ]);

  return (
    <div>
      <Banner image={bannerImg} menuName="질환 고민" color="#002357" />
      <Container>
        <Notice />
        {/* <Postlist posts={posts} /> */}
      </Container>
    </div>
  );
};

export default DiseaseMainPage;
