// import React from 'react';
// import styled from 'styled-components';
// import Banner from '../../components/Banner';
// import Notice from '../../components/Notice';
// import bannerImg from '../../assets/community_img.png';
// import PostList from "../PostList";

// const Container = styled.div`
//   width: 100%;
//   max-width: 1120px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const KeyWord = styled.div`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin: 0 auto;
//   border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
//   width: 52rem;
//   text-align: center;
//   padding-bottom: 2.5rem;
//   margin-top: 5.75rem;
// `;


// const CommunitySearchResultsPage = () => {
//   const posts = [
//     const [posts, setPosts] = useState([
//         {
//           id: 1,
//           type: '공지',
//           title: '일상 게시판 공지글입니다.',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 2,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 3,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 4,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 5,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 6,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 7,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 8,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 9,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 10,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//         {
//           id: 11,
//           type: '',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           date: '2024.07.06',
//           likes: 12,
//           views: 5231
//         },
//       ]);

//   return (
//     <div>
//       <Banner image={bannerImg} menuName="커뮤니티" color="#002357" />
//       <Container>
//         <KeyWord>통합 검색 : 멘텀비뇨기과</KeyWord>
//         <Notice />

//         <PostList posts={posts} category="disease" />
//       </Container>
//     </div>
//   );
// };

// export default CommunitySearchResultsPage;

import React, { useState } from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import Notice from '../../components/Notice';
import bannerImg from '../../assets/community_img.png';
import PostList from "../../components/PostList";

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
      <Banner image={bannerImg} menuName="커뮤니티" color="#002357" />
      <Container>
        <Notice />
        <KeyWord>통합 검색 : 멘텀비뇨기과</KeyWord>
        <PostList posts={posts} category="disease" />
      </Container>
    </div>
  );
};

export default CommunitySearchResultsPage;
