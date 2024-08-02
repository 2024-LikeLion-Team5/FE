import React, { useEffect, useState } from "react";
import PostLayout from "../../components/PostLayout";
import StarRatingDisplay from "../../components/StarRatingDisplay";
import { useParams } from "react-router-dom";
import { getDetailDoctorReview } from "../../api/hospital";

const DetailDoctorReview = () => {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState({
    hits: 0,
    likeCount: 0,
    dislikeCount: 0,
    createdAt: "",
    disease: "",
    treatment: "",
    ageGroup: "",
    rating: 0,
    doctorName: "",
    title: "",
    content: "",
  });

  const ageOptions = [
    { key: "UNDER_TWENTY", value: "20대 이하" },
    { key: "THIRTY", value: "30대" },
    { key: "FORTY", value: "40대" },
    { key: "FIFTY", value: "50대" },
    { key: "SIXTY", value: "60대" },
    { key: "OVER_SEVENTY", value: "70대 이상" },
  ];

  const diseaseOptions = [
    { key: "IMPOTENCE", value: "발기부전" },
    { key: "PENIS_ENLARGEMENT", value: "음경확대" },
    { key: "VASECTOMY", value: "정관수술" },
    { key: "URINARY_STONE", value: "요로결석" },
    { key: "PREMATURE_AND_DELAYED_EJACULATION", value: "조루/지루" },
    { key: "PROSTATITIS", value: "전립선염" },
    { key: "ETC", value: "기타" },
  ];

  const getAgeGroupValue = (key) => {
    const age = ageOptions.find((option) => option.key === key);
    return age ? age.value : "";
  };

  const getDiseaseValue = (key) => {
    const disease = diseaseOptions.find((option) => option.key === key);
    return disease ? disease.value : "";
  };

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const data = await getDetailDoctorReview(id);
        setReviewData(data);
        console.log("의사 후기", data);
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
    { label: "질환/고민", value: getDiseaseValue(reviewData.disease) },
    { label: "받은 진료", value: reviewData.treatment },
    { label: "연령대", value: getAgeGroupValue(reviewData.ageGroup) },
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
      postType="DOCTOR_REVIEW" //좋싫추가
    />
  );
};

export default DetailDoctorReview;
