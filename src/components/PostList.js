// import React, { useState } from 'react';
// import styled from 'styled-components';
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
//   span {
//     font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
//     color: ${({ theme, type }) => (type === '공지' ? theme.colors.b1 : theme.colors.nv)};
//   }
// `;

// const PostType = styled.div`
//   font-weight: ${({ type }) => (type === '공지' ? 'bold' : 'normal')};
//   color: ${({ theme, type }) => (type === '공지' ? theme.colors.b1 : theme.colors.nv)};
// `;

// const PostImage = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// const PostTitle = styled.div`
//   font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
//   color: ${({ theme }) => theme.colors.nv};
// `;

// const PostDate = styled.div`
//   font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
//   color: ${({ theme }) => theme.colors.nv};
// `;

// const PostLikes = styled.div`
//   font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
//   color: ${({ theme }) => theme.colors.nv};
// `;

// const PostViews = styled.div`
//   font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
//   color: ${({ theme }) => theme.colors.nv};
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
//   padding: 2rem 0 177px; /* 하단 여백 177px 추가 */
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

// const PostList = ({ posts }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 10;

//   const noticePosts = posts.filter(post => post.type === '공지');
//   const regularPosts = posts.filter(post => post.type !== '공지');

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
//           <Post key={post.id} type={post.type}>
//             <PostType type={post.type}>{post.type}</PostType>
//             <PostImage src={photoImg} alt="post" />
//             <PostTitle>{post.title}</PostTitle>
//             <PostDate>{post.date}</PostDate>
//             <PostLikes>{post.likes}</PostLikes>
//             <PostViews>{post.views}</PostViews>
//           </Post>
//         ))}
//         {currentPosts.map((post) => (
//           <Post key={post.id} type={post.type}>
//             <PostType type={post.type}>{post.type || ''}</PostType>
//             <PostImage src={photoImg} alt="post" />
//             <PostTitle>{post.title}</PostTitle>
//             <PostDate>{post.date}</PostDate>
//             <PostLikes>{post.likes}</PostLikes>
//             <PostViews>{post.views}</PostViews>
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
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import photoImg from '../assets/photo.png';
import seeMoreImg from '../assets/see_more.png';

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
  span {
    font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
    color: ${({ theme, type }) => (type === '공지' ? theme.colors.b1 : theme.colors.nv)};
  }
`;

const PostType = styled.div`
  font-weight: ${({ type }) => (type === '공지' ? 'bold' : 'normal')};
  color: ${({ theme, type }) => (type === '공지' ? theme.colors.b1 : theme.colors.nv)};
`;

const PostImage = styled.img`
  width: 20px;
  height: 20px;
`;

const PostTitle = styled.div`
  font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
  color: ${({ theme }) => theme.colors.nv};
`;

const PostDate = styled.div`
  font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
  color: ${({ theme }) => theme.colors.nv};
`;

const PostLikes = styled.div`
  font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
  color: ${({ theme }) => theme.colors.nv};
`;

const PostViews = styled.div`
  font-size: ${({ theme }) => theme.fonts.body.split(' ')[2]};
  color: ${({ theme }) => theme.colors.nv};
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr 1fr 1fr;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.g3};
  font-weight: bold;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 0.5rem;
  padding: 2rem 0 177px; /* 하단 여백 177px 추가 */
`;

const PageNumber = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: ${({ selected, theme }) => (selected ? theme.colors.b4 : 'transparent')};
  color: ${({ theme }) => theme.colors.nv};
  cursor: pointer;
  font: ${({ theme }) => theme.fonts.button};
`;

const SeeMoreButton = styled.img`
  width: 8px;
  height: 13px;
  cursor: pointer;
`;

const PostList = ({ posts, category }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 10;

  const noticePosts = posts.filter(post => post.type === '공지');
  const regularPosts = posts.filter(post => post.type !== '공지');

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePostClick = (id) => {
    navigate(`/${category}/detail/${id}`);
  };

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
          <Post key={post.id} type={post.type} onClick={() => handlePostClick(post.id)}>
            <PostType type={post.type}>{post.type}</PostType>
            <PostImage src={photoImg} alt="post" />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
            <PostLikes>{post.likes}</PostLikes>
            <PostViews>{post.views}</PostViews>
          </Post>
        ))}
        {currentPosts.map((post) => (
          <Post key={post.id} type={post.type} onClick={() => handlePostClick(post.id)}>
            <PostType type={post.type}>{post.type || ''}</PostType>
            <PostImage src={photoImg} alt="post" />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
            <PostLikes>{post.likes}</PostLikes>
            <PostViews>{post.views}</PostViews>
          </Post>
        ))}
      </List>
      <PaginationWrapper>
        {[...Array(Math.ceil(regularPosts.length / postsPerPage)).keys()].map(number => (
          <PageNumber key={number + 1} selected={currentPage === number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </PageNumber>
        ))}
        <SeeMoreButton src={seeMoreImg} alt="see more" />
      </PaginationWrapper>
    </>
  );
};

export default PostList;
