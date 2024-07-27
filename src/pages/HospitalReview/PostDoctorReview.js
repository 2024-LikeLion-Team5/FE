import React, { useState } from "react";
import styled from "styled-components";
import seletArrow from "../../assets/select_arrow.png";
import CustomSelect from "../../components/CustomSelect";
import Caution from "../../components/Caution";
import StarRating from "../../components/StarRating";

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

const AgeOption = styled.div`
  display: flex;
  gap: 0.5rem;
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

const PostDoctorReview = () => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [isCounsel, setIsCounsel] = useState(false);
  const [rating, setRating] = useState(0);

  const ageOption = ["30대 이하", "40대", "50대", "60대", "70대", "80대 이상"];

  const optionData = [
    { key: 1, value: "발기부전" },
    { key: 2, value: "음경확대" },
    { key: 3, value: "정관수술" },
    { key: 4, value: "요로결석" },
    { key: 5, value: "조루/지루" },
    { key: 6, value: "전립선염" },
    { key: 7, value: "기타" },
  ]; // CustomSelect 옵션 데이터 추가

  const handleAgeClick = (e, age) => {
    e.preventDefault();
    setSelectedAge(age);
  };

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
          <Label>병원명</Label>
          <Input type="text" placeholder="방문한 병원 이름을 적어주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>질환/고민</Label>
          <CustomSelect optionData={optionData} />
        </InputWrapper>
        <InputWrapper>
          <Label>받은 진료</Label>
          <Input type="text" placeholder="진료명을 적어주세요." />
          <Button
            className={isCounsel === true ? "active" : ""}
            onClick={handleCounselingClick}
          >
            단순 상담
          </Button>
        </InputWrapper>
        <InputWrapper>
          <Label>연령대</Label>
          <AgeOption>
            {ageOption.map((age) => (
              <Button
                key={age}
                className={selectedAge === age ? "active" : ""}
                onClick={(e) => handleAgeClick(e, age)}
              >
                {age}
              </Button>
            ))}
          </AgeOption>
        </InputWrapper>
        <InputWrapper>
          <Label>의사</Label>
          <Input type="text" placeholder="진료 받은 의사 이름을 적어주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>평가</Label>
          <div>
            <StarRating rating={rating} setRating={setRating} />
          </div>
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
export default PostDoctorReview;
