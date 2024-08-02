import React, { useEffect, useState } from "react";
import PostLayout from "../../components/PostLayout";
import StarRatingDisplay from "../../components/StarRatingDisplay";
import { useParams } from "react-router-dom";
import { getDetailHospitalReview } from "../../api/hospital";

const DetailHospitalReview = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState({
    hits: 0,
    likeCount: 0,
    dislikeCount: 0,
    createdAt: "",
    treatment: "",
    facilityRating: 0,
    hospital: "",
    atmosphereRating: 0,
    employeeRating: 0,
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const data = await getDetailHospitalReview(id);
        setReviewData(data);
      } catch (error) {
        console.error("Failed to fetch review data", error);
      }
    };

    fetchReviewData();
  }, [id]);

  const metaInfo = [
    `조회수 ${reviewData.hits}`,
    `좋아요 ${reviewData.likeCount}`,
    `싫어요 ${reviewData.dislikeCount}`,
    reviewData.createdAt,
  ];

  const detailItems = [
    { label: "진료명", value: reviewData.treatment },
    {
      label: "시설",
      value: <StarRatingDisplay rating={reviewData.facilityRating} />,
    },
    { label: "병원명", value: reviewData.hospital },
    {
      label: "분위기",
      value: <StarRatingDisplay rating={reviewData.atmosphereRating} />,
    },
    { label: "", value: "" },
    {
      label: "직원",
      value: <StarRatingDisplay rating={reviewData.employeeRating} />,
    },
  ];

  return (
    <PostLayout
      postId={id}
      title={reviewData.title}
      category="병원별 후기"
      metaInfo={metaInfo}
      detailItems={detailItems}
      content={reviewData.content}
      postType="HOSPITAL_REVIEW" //좋싫추가
    />
  );
};

export default DetailHospitalReview;
