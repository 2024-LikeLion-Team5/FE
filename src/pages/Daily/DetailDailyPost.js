// // import React from "react";
// // import PostLayout from "../../components/PostLayout";

// // const DetailDailyPost = () => {
// //   const metaInfo = [
// //     "조회수 12345678",
// //     "좋아요 12345678",
// //     "싫어요 12345678",
// //     "2024. 07. 06",
// //   ];

// //   const detailItems = [
// //     { label: "카테고리", value: "일상" },
// //     { label: "작성자", value: "홍길동" },
// //     { label: "작성일", value: "2024. 07. 06" },
// //   ];

// //   return (
// //     <PostLayout
// //       title="상쾌한 하루되시길..."
// //       category="일상"
// //       metaInfo={metaInfo}
// //       detailItems={detailItems}
// //       content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
// //       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
// //       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
// //       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
// //       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
// //       occaecat cupidatat non proident, sunt in culpa qui officia deserunt
// //       mollit anim id est laborum.`}
// //     />
// //   );
// // };

// // export default DetailDailyPost;

// import React from "react";
// import PostLayout from "../../components/PostLayout";
// import CommentSection from "../../components/CommentSection";

// const DetailDailyPost = () => {
//   const metaInfo = [
//     "조회수 12345678",
//     "좋아요 12345678",
//     "싫어요 12345678",
//     "2024. 07. 06",
//   ];

//   const detailItems = [
//     { label: "카테고리", value: "일상" },
//     { label: "작성자", value: "홍길동" },
//     { label: "작성일", value: "2024. 07. 06" },
//   ];

//   const comments = [
//     { author: "User1", date: "2024. 07. 08", content: "상쾌한 하루되세요!" },
//     { author: "User2", date: "2024. 07. 08", content: "좋은 하루!" },
//     { author: "User3", date: "2024. 07. 08", content: "행복하세요!" },
//   ];

//   return (
//     <>
//       <PostLayout
//         title="상쾌한 하루되시길..."
//         category="일상"
//         metaInfo={metaInfo}
//         detailItems={detailItems}
//         content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//         commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//         velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//         occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//         mollit anim id est laborum.`}
//       />
//       <CommentSection comments={comments} />
//     </>
//   );
// };

// export default DetailDailyPost;

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
      <CommentSection comments={[]} />
    </>
  );
};

export default DetailDailyPost;
