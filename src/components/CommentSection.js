import React from "react";
import styled from "styled-components";

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
  // background-color: ${({ theme }) => theme.colors.g3};
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
  // margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fonts.body};
`;

const CommentButton = styled.button`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.nv};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  width :100px;
  height : 37px;
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

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      user: "회원명",
      date: "2024.07.08",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      user: "회원명",
      date: "2024.07.08",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      user: "회원명",
      date: "2024.07.08",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Section>
      <Header>
        <span>댓글</span>
        <span>3개</span>
      </Header>
      <CommentForm>
        <TextArea placeholder="댓글을 입력하세요" rows="3" />
        <Line1 />
        <CommentButton>댓글 작성</CommentButton>
      </CommentForm>
      <Line2 />
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentHeader>
              <span>{comment.user}</span>
              <span>{comment.date}</span>
            </CommentHeader>
            <CommentBody>{comment.content}</CommentBody>
          </CommentItem>
        ))}
      </CommentList>
    </Section>
  );
};

export default CommentSection;
