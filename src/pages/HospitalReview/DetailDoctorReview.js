import React from "react";
import PostLayout from "../../components/PostLayout";

const DetailDoctorReview = () => {
  const metaInfo = [
    "조회수 12345678",
    "좋아요 12345678",
    "싫어요 12345678",
    "2024. 07. 06",
  ];

  const detailItems = [
    { label: "질환/고민", value: "발기부전" },
    { label: "받은 진료", value: "단순 상담" },
    { label: "연령대", value: "50대" },
    { label: "평가", value: "★ ★ ★ ★ ☆ 4" },
    { label: "의사", value: "이신정" },
  ];

  return (
    <PostLayout
      title="의사선생님이 자세하게 알려주십니다."
      category="의사 상담 후기"
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

export default DetailDoctorReview;
