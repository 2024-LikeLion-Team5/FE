import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostLayout from "../../components/PostLayout";
import CommentSection from "../../components/CommentSection";
import { getSurgeryPostId } from "../../api/community";

const DetailSurgeryPost = () => {
  const { id } = useParams(); // id 변수명 소문자로 수정
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getSurgeryPostId(id);
        console.log(id); // id 출력
        console.log(data); // 응답 데이터 출력
        setPost(data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    fetchPost();
  }, [id]); // id가 변경될 때마다 useEffect 실행

  if (!post) return <div>Loading...</div>;

  const metaInfo = [
    `조회수 ${post.hits}`,
    `좋아요 ${post.likeCount}`,
    `싫어요 ${post.dislikeCount}`,
    post.createdAt,
  ];

  const detailItems = [
    { label: "수술명", value: post.surgery },
    { label: "작성자", value: "홍길동" },
    { label: "작성일", value: post.createdAt},
    // { label: "질환/고민", value: post.disease },
    // { label: "작성일", value: post.createdAt },
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
        category="수술 후기"
        metaInfo={metaInfo}
        detailItems={detailItems}
        content={post.content}
      />
      <CommentSection comments={comments} />
    </>
  );
};

export default DetailSurgeryPost;