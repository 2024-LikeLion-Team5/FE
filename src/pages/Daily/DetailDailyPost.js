// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getDailyPostId } from "../../api/community"; // API 함수 가져오기
// import PostLayout from "../../components/PostLayout";
// import CommentSection from "../../components/CommentSection";

// const DetailDailyPost = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const data = await getDailyPostId(id);
//         setPost(data);
//       } catch (error) {
//         console.error("Failed to fetch post:", error);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (!post) return <div>Loading...</div>;

//   const metaInfo = [
//     `조회수 ${post.hits}`,
//     `좋아요 ${post.likeCount}`,
//     `싫어요 ${post.dislikeCount}`,
//     post.createdAt,
//   ];

//   const detailItems = [
//     { label: "카테고리", value: "일상" },
//     { label: "작성일", value: post.createdAt },
//   ];

//   return (
//     <>
//       <PostLayout
//         title={post.title}
//         category="일상"
//         metaInfo={metaInfo}
//         detailItems={detailItems}
//         content={post.content}
//       />
//       <CommentSection comments={[]} />
//     </>
//   );
// };

// export default DetailDailyPost;

//댓글api추가중
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDailyPostId } from "../../api/community"; // API 함수 가져오기
import PostLayout from "../../components/PostLayout";
import CommentSection from "../../components/CommentSection";

const DetailDailyPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getDailyPostId(id);
        setPost(data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  const metaInfo = [
    `조회수 ${post.hits}`,
    `좋아요 ${post.likeCount}`,
    `싫어요 ${post.dislikeCount}`,
    post.createdAt,
  ];

  const detailItems = [
    { label: "카테고리", value: "일상" },
    { label: "작성일", value: post.createdAt },
  ];

  return (
    <>
      <PostLayout
        title={post.title}
        category="일상"
        metaInfo={metaInfo}
        detailItems={detailItems}
        content={post.content}
      />
      <CommentSection postId={id} communityType="DAILY" />
    </>
  );
};

export default DetailDailyPost;
