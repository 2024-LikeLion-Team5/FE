import React, { useState } from "react";
import styled from "styled-components";
import photoImg from "../assets/photo.png";
import seeMoreImg from "../assets/see_more.png";

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
  color: ${({ theme, type }) =>
    type === "수술명" ? theme.colors.b1 : theme.colors.nv};
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
  text-align: center; // 중앙 정렬 추가
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

const PostList = ({ posts, category, onPostClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const noticePosts = posts.filter((post) => post.isNotice);
  const regularPosts = posts.filter((post) => !post.isNotice);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header>
        <PostType>구분</PostType>
        <PostImage src={photoImg} alt="post" />
        <PostTitle>제목</PostTitle>
        <PostDate>작성일</PostDate>
        <PostLikes>좋아요</PostLikes>
        <PostViews>조회수</PostViews>
      </Header>
      <List>
        {noticePosts.map((post) => (
          <Post
            key={post.postId}
            type="공지"
            onClick={() => onPostClick(post.postId)}
          >
            <PostType type="공지">공지</PostType>
            <PostImage src={photoImg} alt="post" />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.createdAt}</PostDate>
            <PostLikes>{post.likeCount}</PostLikes>
            <PostViews>{post.hits}</PostViews>
          </Post>
        ))}
        {currentPosts.map((post) => (
          <Post key={post.postId} onClick={() => onPostClick(post.postId)}>
            <PostType type="수술명">{post.surgery}</PostType>
            <PostImage src={photoImg} alt="post" />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.createdAt}</PostDate>
            <PostLikes>{post.likeCount}</PostLikes>
            <PostViews>{post.hits}</PostViews>
          </Post>
        ))}
      </List>
      <PaginationWrapper>
        {[...Array(Math.ceil(regularPosts.length / postsPerPage)).keys()].map(
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
    </>
  );
};

export default PostList;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import photoImg from '../assets/photo.png';
// import seeMoreImg from '../assets/see_more.png';

// const List = styled.div`
//   margin-top: 1rem;
// `;

// const Post = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 2fr 4fr 2fr 1fr 1fr;
//   align-items: center;
//   padding: 1rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
//   cursor: pointer;
//   &:hover {
//     background-color: ${({ theme }) => theme.colors.g3};
//   }
// `;

// const PostType = styled.span`
//   font-weight: ${({ type }) => (type === '공지' ? 'bold' : 'normal')};
//   color: ${({ theme, type }) => (type === '수술명' ? theme.colors.b1 : theme.colors.nv)};
// `;

// const PostImage = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// // '굵은 본문' 규격
// const PostTitle = styled.div`
//   font-size: 0.875rem;
//   font-weight: bold;
//   font-family: 'Pretendard';
//   line-height: auto;
// `;

// // '본문' 규격
// const PostDate = styled.div`
//   font-size: 0.875rem;
//   font-weight: medium;
//   font-family: 'Pretendard';
//   line-height: auto;
// `;

// const PostLikes = styled.div`
//   font-size: 0.875rem;
//   font-weight: medium;
//   font-family: 'Pretendard';
//   line-height: auto;
// `;

// const PostViews = styled.div`
//   font-size: 0.875rem;
//   font-weight: medium;
//   font-family: 'Pretendard';
//   line-height: auto;
// `;

// const Header = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 2fr 4fr 2fr 1fr 1fr;
//   align-items: center;
//   padding: 1rem;
//   background-color: ${({ theme }) => theme.colors.g3};
//   font-weight: bold;
// `;

// const PaginationWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 2rem;
//   gap: 0.5rem;
//   padding: 2rem 0 177px;
// `;

// const PageNumber = styled.button`
//   width: 40px;
//   height: 40px;
//   border: none;
//   border-radius: 20px;
//   background-color: ${({ selected, theme }) => (selected ? theme.colors.b4 : 'transparent')};
//   color: ${({ theme }) => theme.colors.nv};
//   cursor: pointer;
//   font: ${({ theme }) => theme.fonts.button};
// `;

// const SeeMoreButton = styled.img`
//   width: 8px;
//   height: 13px;
//   cursor: pointer;
// `;

// const PostList = ({ posts, category, onPostClick }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 10;

//   const noticePosts = posts.filter(post => post.isNotice);
//   const regularPosts = posts.filter(post => !post.isNotice);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <>
//       <Header>
//         <PostType>구분</PostType>
//         <PostImage src={photoImg} alt="post" />
//         <PostTitle>제목</PostTitle>
//         <PostDate>작성일</PostDate>
//         <PostLikes>좋아요</PostLikes>
//         <PostViews>조회수</PostViews>
//       </Header>
//       <List>
//         {noticePosts.map((post) => (
//           <Post key={post.postId} type="공지" onClick={() => onPostClick(post.postId)}>
//             <PostType type="공지">공지</PostType>
//             <PostImage src={photoImg} alt="post" />
//             <PostTitle>{post.title}</PostTitle>
//             <PostDate>{post.createdAt}</PostDate>
//             <PostLikes>{post.likeCount}</PostLikes>
//             <PostViews>{post.hits}</PostViews>
//           </Post>
//         ))}
//         {currentPosts.map((post) => (
//           <Post key={post.postId} onClick={() => onPostClick(post.postId)}>
//             <PostType type="수술명">{post.surgery}</PostType>
//             <PostImage src={photoImg} alt="post" />
//             <PostTitle>{post.title}</PostTitle>
//             <PostDate>{post.createdAt}</PostDate>
//             <PostLikes>{post.likeCount}</PostLikes>
//             <PostViews>{post.hits}</PostViews>
//           </Post>
//         ))}
//       </List>
//       <PaginationWrapper>
//         {[...Array(Math.ceil(regularPosts.length / postsPerPage)).keys()].map(number => (
//           <PageNumber key={number + 1} selected={currentPage === number + 1} onClick={() => paginate(number + 1)}>
//             {number + 1}
//           </PageNumber>
//         ))}
//         <SeeMoreButton src={seeMoreImg} alt="see more" />
//       </PaginationWrapper>
//     </>
//   );
// };

// export default PostList;
