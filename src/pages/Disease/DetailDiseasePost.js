import React from "react";
import PostLayout from "../../components/PostLayout";
import CommentSection from "../../components/CommentSection";

const DetailDiseasePost = () => {
  const metaInfo = [
    "조회수 12345678",
    "좋아요 12345678",
    "싫어요 12345678",
    "2024. 07. 06",
  ];

  const detailItems = [
    { label: "질환/고민", value: "질환 고민" },
    { label: "작성자", value: "홍길동" },
    { label: "작성일", value: "2024. 07. 06" },
  ];

  const comments = [
    { author: "User1", date: "2024. 07. 08", content: "정말 힘드시겠어요..." },
    { author: "User2", date: "2024. 07. 08", content: "힘내세요!" },
    { author: "User3", date: "2024. 07. 08", content: "응원합니다!" },
  ];

  return (
    <>
      <PostLayout
        title="정말 힘드네요..."
        category="질환 고민"
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

export default DetailDiseasePost;
