import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostLayout from "../../components/PostLayout";
import CommentSection from "../../components/CommentSection";
import { getDiseasePostId } from "../../api/community";

const DetailDiseasePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const options = [
    { key: "IMPOTENCE", value: "발기부전" },
    { key: "PENIS_ENLARGEMENT", value: "음경확대" },
    { key: "VASECTOMY", value: "정관수술" },
    { key: "URINARY_STONE", value: "요로결석" },
    { key: "PREMATURE_AND_DELAYED_EJACULATION", value: "조루/지루" },
    { key: "PROSTATITIS", value: "전립선염" },
    { key: "ETC", value: "기타" },
  ];

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getDiseasePostId(id);
        console.log(id); // id 출력
        console.log(data); // 응답 데이터 출력
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
    {
      label: "질환/고민",
      value: options.find(option => option.key === post.disease)?.value || post.disease,
    },
    { label: "작성일", value: post.createdAt },
  ];

  return (
    <>
      <PostLayout
        title={post.title}
        category="질환 고민"
        metaInfo={metaInfo}
        detailItems={detailItems}
        content={post.content}
      />
      <CommentSection postId={id} communityType="CONCERN" />
    </>
  );
};

export default DetailDiseasePost;
