import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.g2};
  border-radius: 8px;
`;

const Textarea = styled.textarea`
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

const Notice = styled.div`
  background-color: ${({ theme }) => theme.colors.b4};
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const SurgeryWritePage = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checked) {
      alert('<주의사항>을 확인해주세요.');
      return;
    }
    // 게시글 업로드 로직
  };

  return (
    <div>
      <Header />
      <Container>
        <h2>수술 후기 글쓰기</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="제목" />
          <Textarea rows="10" placeholder="내용" />
          <Notice>
            <p>&lt;주의사항&gt;</p>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            /> 네, 확인하였습니다.
          </Notice>
          <Button type="submit">게시글 작성</Button>
        </Form>
      </Container>
    </div>
  );
};

export default SurgeryWritePage;
