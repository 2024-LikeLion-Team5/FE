import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const Title = styled.span`
  grid-column: 1 / span 1;
  background-color: ${({ theme }) => theme.colors.b4};
  height: 2rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin: 0 auto;
`;

const Detail = styled.span`
  grid-column: 2 / span 7;
  padding: 1rem 0;
  display: flex;
  align-items: center;
`;

const Notice = () => {
  return (
    <div>
      <Wrapper>
        <div className="container">
          <Title>전체 공지</Title>
          <Detail>[필독] 게시글 작성 및 커뮤니티 이용 관련 공지입니다.</Detail>
        </div>
      </Wrapper>
    </div>
  );
};

export default Notice;
