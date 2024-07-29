import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postDisease } from "../../api/community";
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

const DiseaseWrite = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    disease: "IMPOTENCE",
    title: "",
    content: "",
    imageUrl: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      imageUrl: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postDisease(formData);
      console.log('Post Response:', response); // 응답 데이터 확인
      if (response && response.postId) { // 응답 데이터에서 postId 추출
        navigate(`/disease/detail/${response.postId}`);
      } else {
        console.error('Failed to get post ID from response');
      }
    } catch (error) {
      console.error("Failed to post:", error);
    }
  };

  const optionData = [
    { key: "IMPOTENCE", value: "발기부전" },
    { key: "PENIS_ENLARGEMENT", value: "음경확대" },
    { key: "VASECTOMY", value: "정관수술" },
    { key: "URINARY_STONE", value: "요로결석" },
    { key: "PREMATURE_AND_DELAYED_EJACULATION", value: "조루/지루" },
    { key: "PROSTATITIS", value: "전립선염" },
    { key: "ETC", value: "기타" },
  ];

  return (
    <Wrapper>
      <TitleWrapper>
        <SmallTitle>당신의 이야기를 들려주세요.</SmallTitle>
        <LargeTitle>질환 고민 글쓰기</LargeTitle>
      </TitleWrapper>
      <InputForm onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>커뮤니티</Label>
          <Input type="text" value="질환 고민" readOnly />
        </InputWrapper>
        <InputWrapper>
          <Label>질환/고민</Label>
          <CustomSelect
            optionData={optionData}
            onChange={(e) =>
              handleChange({
                target: { name: "disease", value: e.target.value },
              })
            }
            value={formData.disease}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Input
            type="text"
            name="title"
            placeholder="제목을 입력해주세요."
            value={formData.title}
            onChange={handleChange}
          />
          <UploadPic>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            사진 업로드
          </UploadPic>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <BodyInput
            name="content"
            placeholder="내용을 입력해주세요."
            value={formData.content}
            onChange={handleChange}
          />
        </InputWrapper>
        <Caution />
        <BtnWrapper>
          <PostButton type="submit">게시글 작성</PostButton>
        </BtnWrapper>
      </InputForm>
    </Wrapper>
  );
};

export default DiseaseWrite;
