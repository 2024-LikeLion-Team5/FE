import React, { useEffect, useState } from "react";
import PostLayout from "../../components/PostLayout";
import StarRatingDisplay from "../../components/StarRatingDisplay";
import { useParams } from "react-router-dom";
import { getDetailDoctorReview } from "../../api/hospital";

const DetailDoctorReview = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const data = await getDetailDoctorReview(id);
        setReviewData(data);
      } catch (error) {
        console.error("Failed to fetch review data", error);
      }
    };

    fetchReviewData();
  }, [id]);

  if (!reviewData) {
    return <div>Loading...</div>;
  }

  const metaInfo = [
    `조회수 ${reviewData.hits}`,
    `좋아요 ${reviewData.likeCount}`,
    `싫어요 ${reviewData.dislikeCount}`,
    reviewData.createdAt,
  ];

  const detailItems = [
    { label: "질환/고민", value: reviewData.disease },
    { label: "받은 진료", value: reviewData.treatment },
    { label: "연령대", value: `${reviewData.ageGroup}대` },
    { label: "평가", value: <StarRatingDisplay rating={reviewData.rating} /> },
    { label: "의사", value: reviewData.doctorName },
  ];

  return (
    <PostLayout
      postId={id}
      title={reviewData.title}
      category="의사 상담 후기"
      metaInfo={metaInfo}
      detailItems={detailItems}
      content={reviewData.content}
    />
  );
};

export default DetailDoctorReview;
