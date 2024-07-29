import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostLayout from "../../components/PostLayout";
import CommentSection from "../../components/CommentSection";
import { getDiseasePostId } from "../../api/community";

const DetailDiseasePost = () => {
  const { id } = useParams(); // id 변수명 소문자로 수정
  const [post, setPost] = useState(null);

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
    { label: "질환/고민", value: post.disease },
    { label: "작성일", value: post.createdAt },
  ];

  const comments = [
    { author: "User1", date: "2024. 07. 08", content: "정말 힘드시겠어요..." },
    { author: "User2", date: "2024. 07. 08", content: "힘내세요!" },
    { author: "User3", date: "2024. 07. 08", content: "응원합니다!" },
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
      <CommentSection comments={comments} />
    </>
  );
};

export default DetailDiseasePost;
