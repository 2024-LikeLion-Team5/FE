// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { getDiseasePosts } from "../../api/community";
// import Banner from "../Banner";
// import Notice from "../Notice";
// import PostList from "../PostList";
// import PostActions from "../PostActions";
// import bannerImg from "../../assets/concern_img.png";

// const Container = styled.div`
//   width: 100%;
//   max-width: 1120px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const DiseaseMainPage = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const data = await getDiseasePosts();
//         setPosts(data);
//       } catch (error) {
//         console.error("Failed to fetch posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handlePostClick = (postId) => {
//     console.log(postId)
//     navigate(`/disease/detail/${postId}`);
//   };

//   return (
//     <div>
//       <Banner image={bannerImg} menuName="질환 고민" color="#002357" />
//       <Container>
//         <Notice />
//         <PostActions writePath="/disease/write" showSelect={true} />
//         <PostList posts={posts} category="disease" onPostClick={handlePostClick} />
//       </Container>
//     </div>
//   );
// };

// export default DiseaseMainPage;

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getDiseasePosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    console.log(postId);
    navigate(`/disease/detail/${postId}`);
  };

  return (
    <div>
      <Banner image={bannerImg} menuName="질환 고민" color="#002357" />
      <Container>
        <Notice />
        <PostActions writePath="/disease/write" showSelect={true} />
        <PostList posts={posts} category="disease" onPostClick={handlePostClick} />
      </Container>
    </div>
  );
};

export default DiseaseMainPage;
