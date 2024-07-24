import React from "react";
import PostLayout from "../../components/PostLayout";

const DetailHospitalReview = () => {
  const metaInfo = [
    "조회수 12345678",
    "좋아요 12345678",
    "싫어요 12345678",
    "2024. 07. 06",
  ];

  const detailItems = [
    { label: "진료명", value: "발기부전 검사" },
    { label: "시설", value: "★ ★ ★ ★ ☆ 4" },
    { label: "병원명", value: "멘텀 비뇨기과" },
    { label: "분위기", value: "★ ★ ★ ★ ☆ 4" },
    { label: "", value: "" },
    { label: "직원", value: "★ ★ ★ ★ ☆ 4" },
  ];

  return (
    <PostLayout
      title="멘텀 비뇨기과 추천합니다!!"
      category="병원별 후기"
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
  );
};

export default DetailHospitalReview;
