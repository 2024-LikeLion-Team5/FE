// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Header from '../Header';
// import Banner from '../Banner';
// import Notice from '../Notice';
// import Postlist from '../PostList';
// import bannerImg from "../../assets/surgery_img.png";

// const Container = styled.div`
//   width: 100%;
//   max-width: 1120px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const Pagination = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 2rem;
// `;

// const PageNumber = styled.button`
//   margin: 0 0.5rem;
//   padding: 0.5rem 1rem;
//   border: none;
//   background-color: ${({ theme }) => theme.colors.g1};
//   color: white;
//   cursor: pointer;
// `;

// const SurgeryMainPage = () => {
//   const [posts, setPosts] = useState([]);

//   return (
//     <div>
//       <Header />
//       <Banner
//         image={bannerImg}
//         menuName="수술 후기"
//         color="#002357"
//       />
//       <Container>
//         <Notice />
//         <Postlist posts={posts} />
//         <Pagination>
//           <PageNumber>1</PageNumber>
//           <PageNumber>2</PageNumber>
//           <PageNumber>3</PageNumber>
//         </Pagination>
//       </Container>
//     </div>
//   );
// };

// export default SurgeryMainPage;
// SurgeryMainPage.js
// SurgeryMainPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Banner from '../Banner';
import Notice from '../Notice';
import Footer from '../Footer';
import PostList from '../PostList';
import bannerImg from "../../assets/surgery_img.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SurgeryMainPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: '공지',
      title: '수술 후기 게시판 공지글입니다.',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    {
      id: 2,
      type: '',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      date: '2024.07.06',
      likes: 12,
      views: 5231
    },
    // Add more posts as needed
  ]);

  return (
    <div>
      <Header />
      <Banner
        image={bannerImg}
        menuName="수술 후기"
        color="#002357"
      />
      <Container>
        <Notice />
        <PostList posts={posts} />
      </Container>
      <Footer />
    </div>
  );
};

export default SurgeryMainPage;

