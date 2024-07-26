// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Header from '../Header';
// import Footer from '../Footer';

// const Container = styled.div`
//   width: 100%;
//   max-width: 1120px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   margin-top: 2rem;
// `;

// const Input = styled.input`
//   padding: 0.5rem;
//   border: 1px solid ${({ theme }) => theme.colors.g2};
//   border-radius: 8px;
// `;

// const Textarea = styled.textarea`
//   padding: 0.5rem;
//   border: 1px solid ${({ theme }) => theme.colors.g2};
//   border-radius: 8px;
// `;

// const Button = styled.button`
//   padding: 0.5rem 1rem;
//   background-color: ${({ theme }) => theme.colors.b1};
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
// `;

// const Notice = styled.div`
//   background-color: ${({ theme }) => theme.colors.b4};
//   padding: 1rem;
//   border-radius: 8px;
//   margin-top: 1rem;
// `;

// const DiseaseWritePage = () => {
//   const [checked, setChecked] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!checked) {
//       alert('<주의사항>을 확인해주세요.');
//       return;
//     }
//     // 게시글 업로드 로직
//   };

//   return (
//     <div>
//       <Header />
//       <Container>
//         <h2>질환 고민 글쓰기</h2>
//         <Form onSubmit={handleSubmit}>
//           <Input type="text" placeholder="제목" />
//           <Textarea rows="10" placeholder="내용" />
//           <Notice>
//             <p>&lt;주의사항&gt;</p>
//             <ul>
//               <li>커뮤니티 운연 차치에 방해하지 않는 준학문, 지나친 복제책, 악몽 등을 불쾌감 느낄 수 있는 게시글</li>
//               <li>호칭을 타인에게 경멸적 의미로 사용할 수 있는 게시글</li>
//               <li>타인을 비하하는 내용이나 사진물, 허위 등의 포함된 게시글</li>
//               <li>허위 사실이나 악성루머 등 다른 사용자에게 혼란을 줄 수 있는 게시글</li>
//             </ul>
//             <input
//               type="checkbox"
//               checked={checked}
//               onChange={() => setChecked(!checked)}
//             /> 네, 확인하였습니다.
//           </Notice>
//           <Button type="submit">게시글 작성</Button>
//         </Form>
//       </Container>
//       <Footer />
//     </div>
//   );
// };

// export default DiseaseWritePage;
// DiseaseWritePage.js

import React from "react";
import styled from "styled-components";
import Caution from "../../components/Caution";
import CustomSelect from "../../components/CustomSelect";

const Wrapper = styled.div`
  width: 52rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  text-align: center;
  border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
  padding-bottom: 2.5rem;
`;

const SmallTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`;

const LargeTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  margin-top: 3.75rem;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Label = styled.label`
  width: 7rem;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 27rem;
  height: 2.25rem;
  box-sizing: border-box;
  padding: 9px 1.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.nv};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  &::placeholder {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.nv};
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  &:focus {
    outline: none;
  }
`;

const BodyInput = styled.textarea`
  width: 43rem;
  height: 18.25rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 0.5rem;
  resize: none;
  padding: 1.5rem;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.nv};
  line-height: 1.5;
  &::placeholder {
    color: ${({ theme }) => theme.colors.nv};
    font-size: 0.875rem;
    font-weight: 500;
  }
  &:focus {
    outline: none;
  }
`;

const BtnWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 145px;
`;

const PostButton = styled.button`
  margin-top: 5rem;
  padding: 0.635rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.b1};
  color: white;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
`;

const UploadPic = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.b1};
  font-size: 0.875rem;
  font-weight: bold;
  color: white;
  padding: 0.625rem;
  border-radius: 0.5rem;
`;

const DiseaseWritePage = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <SmallTitle>당신의 이야기를 들려주세요.</SmallTitle>
        <LargeTitle>질환 고민 글쓰기</LargeTitle>
      </TitleWrapper>
      <InputForm>
        <InputWrapper>
          <Label>커뮤니티</Label>
          <CustomSelect optionData={[{ key: 1, value: "질환 고민" }]} />
        </InputWrapper>
        <InputWrapper>
          <Label>질환/고민</Label>
          <CustomSelect optionData={[{ key: 1, value: "질환/고민 선택하세요" }]} />
        </InputWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Input type="text" placeholder="제목을 입력해주세요." />
          <UploadPic>사진 업로드</UploadPic>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <BodyInput type="text" placeholder="후기를 적어주세요." />
        </InputWrapper>
      </InputForm>
      <Caution />
      <BtnWrapper>
        <PostButton>게시글 작성</PostButton>
      </BtnWrapper>
    </Wrapper>
  );
};
export default DiseaseWritePage;
