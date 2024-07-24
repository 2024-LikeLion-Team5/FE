import React, { useState } from "react";
import styled from "styled-components";
import seletArrow from "../../assets/select_arrow.png";
import CustomSelect from "../../components/CustomSelect";
import Caution from "../../components/Caution";

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

const Button = styled.button`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  padding: 0.625rem 1.5rem;
  border-radius: 2.5rem;
  &.active {
    background-color: ${({ theme }) => theme.colors.b1};
    border: none;
    color: white;
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

const PostHospitalReview = () => {
  const [isCounsel, setIsCounsel] = useState(false);

  const handleCounselingClick = (e) => {
    e.preventDefault();
    setIsCounsel(true);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <SmallTitle>당신의 이야기를 들려주세요.</SmallTitle>
        <LargeTitle>의사 상담 후기</LargeTitle>
      </TitleWrapper>
      <InputForm>
        <InputWrapper>
          <Label>진료명</Label>
          <Input type="text" placeholder="진료 받은 의사 이름을 적어주세요." />
          <Button
            className={isCounsel === true ? "active" : ""}
            onClick={handleCounselingClick}
          >
            단순 상담
          </Button>
        </InputWrapper>
        <InputWrapper>
          <Label>병원명</Label>
          <Input type="text" placeholder="방문한 병원 이름을 적어주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>시설</Label>
          <div>별 들어갈 자리</div>
        </InputWrapper>
        <InputWrapper>
          <Label>분위기</Label>
          <div>별 들어갈 자리</div>
        </InputWrapper>
        <InputWrapper>
          <Label>직원</Label>
          <div>별 들어갈 자리</div>
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
export default PostHospitalReview;