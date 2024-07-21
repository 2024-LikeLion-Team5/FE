import React from "react";
import styled from "styled-components";
import Advertisement from "./Advertisement";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  margin: 3.5rem 7.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Item = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
`;

const FirstLine = styled.div`
  display: flex;
  gap: 2rem;
`;

const Footer = () => {
  return (
    <div>
      <Wrapper>
        <Advertisement />
        <Container>
          <FirstLine>
            <Item>이용약관</Item>
            <Item>개인정보처리방침</Item>
          </FirstLine>
          <Item>FAQ</Item>
          <Item>고객문의</Item>
          <Item>All Rights Reserved.</Item>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Footer;
