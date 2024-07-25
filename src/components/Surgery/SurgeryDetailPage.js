import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import CommentSection from '../CommentSection';

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PostDetail = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
`;

const SurgeryDetailPage = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <Header />
      <Container>
        <PostDetail>
          <h2>게시글 제목</h2>
          <p>게시글 내용</p>
        </PostDetail>
        <CommentSection comments={comments} onCommentSubmit={handleCommentSubmit} />
      </Container>
      <Footer />
    </div>
  );
};

export default SurgeryDetailPage;
