import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getComments, postComment } from "../api/community";

const Section = styled.section`
  width: 832px;
  margin: 0 auto;
  margin-top: 52px;
  background-color: ${({ theme }) => theme.colors.g3};
  border-radius: 16px;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.nv};
  font-size: ${({ theme }) => theme.fonts.large};
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Line1 = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.g2};
  margin: 15px 0;
`;

const Line2 = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.nv};
  margin: 24px 0;
`;

const CommentForm = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fonts.body};
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid white;
  resize: none;
  font-size: ${({ theme }) => theme.fonts.body};
`;

const CommentButton = styled.button`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.nv};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 37px;
  font-size: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
`;

const CommentList = styled.div`
  margin-top: 2rem;
`;

const CommentItem = styled.div`
  background-color: white;
  padding: 36px;
  border-radius: 8px;
  margin: 16px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.nv};
  margin-bottom: 0.5rem;
`;

const CommentBody = styled.p`
  font-size: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.nv};
`;

const CommentSection = ({ postId, communityType }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments(postId, communityType);
        setComments(data.comments);
        setTotalComments(data.totalCommentCount);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, [postId, communityType]);

  const handleCommentSubmit = async () => {
    try {
      const commentData = {
        communityType,
        content: newComment, // 댓글 내용을 "comment" 필드로 전송
      };
      await postComment(postId, commentData);
      setNewComment("");
      // 댓글 작성 후 새로고침
      const data = await getComments(postId, communityType);
      setComments(data.comments);
      setTotalComments(data.totalCommentCount);
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <Section>
      <Header>
        <span>댓글</span>
        <span>{totalComments}개</span>
      </Header>
      <CommentForm>
        <TextArea
          placeholder="댓글을 입력하세요"
          rows="3"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Line1 />
        <CommentButton onClick={handleCommentSubmit}>댓글 작성</CommentButton>
      </CommentForm>
      <Line2 />
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.commentId}>
            <CommentHeader>
              <span>멘텀이</span>
              {/* <span>2024.07.08</span> 필요 시, 실제 데이터를 사용하여 수정 */}
              <spanItem key={comment.createdAt}></spanItem>
            </CommentHeader>
            <CommentBody>{comment.comment}</CommentBody>
          </CommentItem>
        ))}
      </CommentList>
    </Section>
  );
};

export default CommentSection;
