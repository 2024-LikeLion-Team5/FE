import React, { useState } from "react";
import styled from "styled-components";
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
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: '공지',
      title: '질환 고민 게시판 공지글입니다.',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 2,
      type: '',
      title: '질환 고민 게시글 제목 1',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 3,
      type: '',
      title: '질환 고민 게시글 제목 2',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 4,
      type: '',
      title: '질환 고민 게시글 제목 3',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 5,
      type: '',
      title: '질환 고민 게시글 제목 4',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 6,
      type: '',
      title: '질환 고민 게시글 제목 5',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 7,
      type: '',
      title: '질환 고민 게시글 제목 6',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 8,
      type: '',
      title: '질환 고민 게시글 제목 7',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 9,
      type: '',
      title: '질환 고민 게시글 제목 8',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 10,
      type: '',
      title: '질환 고민 게시글 제목 9',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 11,
      type: '',
      title: '질환 고민 게시글 제목 10',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
  ]);

  return (
    <div>
      <Banner image={bannerImg} menuName="질환 고민" color="#002357" />
      <Container>
        <Notice />
        <PostActions writePath="/disease/write" showSelect={true} />
        <PostList posts={posts} />
      </Container>
    </div>
  );
};

export default DiseaseMainPage;