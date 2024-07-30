// // import React, { useState } from "react";
// // import styled from "styled-components";
// // import { useNavigate } from "react-router-dom"; // useNavigate 훅을 가져옵니다.
// // import Banner from "../Banner";
// // import Notice from "../Notice";
// // import PostList from "../PostList";
// // import PostActions from "../PostActions";
// // import bannerImg from "../../assets/daily_img.png";

// // const Container = styled.div`
// //   width: 100%;
// //   max-width: 1120px;
// //   margin: 0 auto;
// //   padding: 0 1rem;
// // `;

// // const DailyMainPage = () => {
// //   const navigate = useNavigate(); // useNavigate 훅을 사용합니다.
  
// //   const [posts, setPosts] = useState([
// //     {
// //       id: 1,
// //       type: '공지',
// //       title: '일상 게시판 공지글입니다.',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 2,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 3,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 4,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 5,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 6,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 7,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 8,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 9,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 10,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //     {
// //       id: 11,
// //       type: '',
// //       title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
// //       date: '2024.07.06',
// //       likes: 12,
// //       views: 5231
// //     },
// //   ]);

// //   const handleWriteClick = () => {
// //     navigate("/daily/write");
// //   };

// //   return (
// //     <div>
// //       <Banner image={bannerImg} menuName="일상" color="#002357" />
// //       <Container>
// //         <Notice />
// //         <PostActions writePath="/daily/write" showSelect={false} />
// //         <PostList posts={posts} category="daily" />
// //       </Container>
// //     </div>
// //   );
// // };

// // export default DailyMainPage;

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { getDailyPosts } from "../../api/community"; // API 함수 가져오기
// import Banner from "../Banner";
// import Notice from "../Notice";
// import PostList from "../PostList";
// import PostActions from "../PostActions";
// import bannerImg from "../../assets/daily_img.png";

// const Container = styled.div`
//   width: 100%;
//   max-width: 1120px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const DailyMainPage = () => {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const data = await getDailyPosts(0); // 첫 번째 페이지의 글 목록을 가져옵니다.
//         setPosts(data);
//       } catch (error) {
//         console.error("Failed to fetch posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handlePostClick = () => {
//     navigate(`/communities/dailies/${id}`);
//   };



//   return (
//     <div>
//       <Banner image={bannerImg} menuName="일상" color="#002357" />
//       <Container>
//         <Notice />
//         <PostActions writePath="/daily/write" showSelect={false} />
//         <PostList posts={posts} category="daily" onPostClick={handlePostClick}/>
//       </Container>
//     </div>
//   );
// };

// export default DailyMainPage;


//09:21
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getDailyPosts } from "../../api/community"; // API 함수 가져오기
import Banner from "../Banner";
import Notice from "../Notice";
import PostList from "../PostList";
import PostActions from "../PostActions";
import bannerImg from "../../assets/daily_img.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const DailyMainPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getDailyPosts(0); // 첫 번째 페이지의 글 목록을 가져옵니다.
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/communities/dailies/${postId}`);
  };

  return (
    <div>
      <Banner image={bannerImg} menuName="일상" color="#002357" />
      <Container>
        <Notice />
        <PostActions writePath="/daily/write" showSelect={false} />
        <PostList posts={posts} category="daily" onPostClick={handlePostClick}/>
      </Container>
    </div>
  );
};

export default DailyMainPage;
