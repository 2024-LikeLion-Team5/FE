// import React from "react";
// import PostLayout from "../../components/PostLayout";

// const DetailSurgeryPost = () => {
//   const metaInfo = [
//     "조회수 12345678",
//     "좋아요 12345678",
//     "싫어요 12345678",
//     "2024. 07. 06",
//   ];

//   const detailItems = [
//     { label: "수술명", value: "질환 관련 수술" },
//     { label: "작성자", value: "홍길동" },
//     { label: "작성일", value: "2024. 07. 06" },
//   ];

//   return (
//     <PostLayout
//       title="정말 힘드네요..."
//       category="수술 후기"
//       metaInfo={metaInfo}
//       detailItems={detailItems}
//       content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//       veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
//       velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//       occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//       mollit anim id est laborum.`}
//     />
//   );
// };

// export default DetailSurgeryPost;

import React from "react";
import PostLayout from "../../components/PostLayout";
import CommentSection from "../../components/CommentSection";

const DetailSurgeryPost = () => {
  const metaInfo = [
    "조회수 12345678",
    "좋아요 12345678",
    "싫어요 12345678",
    "2024. 07. 06",
  ];

  const detailItems = [
    { label: "수술명", value: "질환 관련 수술" },
    { label: "작성자", value: "홍길동" },
    { label: "작성일", value: "2024. 07. 06" },
  ];

  const comments = [
    { author: "User1", date: "2024. 07. 08", content: "수고하셨어요!" },
    { author: "User2", date: "2024. 07. 08", content: "빠른 회복 기원합니다." },
    { author: "User3", date: "2024. 07. 08", content: "힘내세요!" },
  ];

  return (
    <>
      <PostLayout
        title="정말 힘드네요..."
        category="수술 후기"
        metaInfo={metaInfo}
        detailItems={detailItems}
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`}
      />
      <CommentSection comments={comments} />
    </>
  );
};

export default DetailSurgeryPost;
