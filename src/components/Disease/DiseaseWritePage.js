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

const DiseaseWritePage = () => {
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
        <h2>질환 고민 글쓰기</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="제목" />
          <Textarea rows="10" placeholder="내용" />
          <Notice>
            <p>&lt;주의사항&gt;</p>
            <ul>
              <li>커뮤니티 운연 차치에 방해하지 않는 준학문, 지나친 복제책, 악몽 등을 불쾌감 느낄 수 있는 게시글</li>
              <li>호칭을 타인에게 경멸적 의미로 사용할 수 있는 게시글</li>
              <li>타인을 비하하는 내용이나 사진물, 허위 등의 포함된 게시글</li>
              <li>허위 사실이나 악성루머 등 다른 사용자에게 혼란을 줄 수 있는 게시글</li>
            </ul>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            /> 네, 확인하였습니다.
          </Notice>
          <Button type="submit">게시글 작성</Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default DiseaseWritePage;