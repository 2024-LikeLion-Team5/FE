import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 2rem;
`;

const Comment = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.g2};
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.b1};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const CommentSection = ({ comments, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <Section>
      {comments.map((comment, index) => (
        <Comment key={index}>
          {/* 댓글 내용 */}
        </Comment>
      ))}
      <CommentForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="댓글 작성"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit">댓글 작성</Button>
      </CommentForm>
    </Section>
  );
};

export default CommentSection;
