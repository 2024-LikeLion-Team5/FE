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
//     console.log(postId);
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

//09:19 //gpt가 알려준 거 
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
//   const [selectedDisease, setSelectedDisease] = useState("IMPOTENCE");
//   const navigate = useNavigate();

//   const fetchPosts = async (disease) => {
//     try {
//       const data = await getDiseasePosts(disease); // 선택된 질환에 따라 게시글 가져오기
//       setPosts(data);
//     } catch (error) {
//       console.error("Failed to fetch posts:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts(selectedDisease); // 초기 로드 시 게시글 가져오기
//   }, [selectedDisease]); // selectedDisease가 변경될 때마다 useEffect 실행

//   const handlePostClick = (postId) => {
//     console.log(postId);
//     navigate(`/disease/detail/${postId}`);
//   };

//   // SelectCategory에서 선택된 질환을 받아 업데이트하는 핸들러
//   const handleChange = (disease) => {
//     setSelectedDisease(disease);
//   };

//   return (
//     <div>
//       <Banner image={bannerImg} menuName="질환 고민" color="#002357" />
//       <Container>
//         <Notice />
//         <PostActions writePath="/disease/write" showSelect={true} onChange={handleChange} />
//         <PostList posts={posts} category="disease" onPostClick={handlePostClick} />
//       </Container>
//     </div>
//   );
// };

// export default DiseaseMainPage;

//09:43
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
  const [selectedDisease, setSelectedDisease] = useState("IMPOTENCE");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const data = await getDiseasePosts(selectedDisease, 0);
  //       setPosts(data);
  //     } catch (error) {
  //       console.error("Failed to fetch posts:", error);
  //     }
  //   };

  //09:58 기준 gpt
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log(`Fetching posts for disease: ${selectedDisease}`); // 추가된 로그
        const data = await getDiseasePosts(selectedDisease, 0);
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
        <PostActions writePath="/disease/write" showSelect={true} onSelectDisease={handleSelectDisease} />
        <PostList posts={posts} category="disease" onPostClick={handlePostClick} />
      </Container>
    </div>
  );
};

export default DiseaseMainPage;

