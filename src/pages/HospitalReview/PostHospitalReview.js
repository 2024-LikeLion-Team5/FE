import React, { useState } from "react";
import styled from "styled-components";
import Caution from "../../components/Caution";
import StarRating from "../../components/StarRating";
import { postHospitalReview } from "../../api/hospital";
import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
  width: 52rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
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
  &.title {
    align-items: flex-start;
  }
`;

const Label = styled.label`
  width: 7rem;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: bold;
  &.title {
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Input = styled.input`
  width: 27rem;
  height: 2.5rem;
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

const Upload = styled.div`
  display: flex;
  gap: 1rem;
`;

const UploadRec = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.b1};
  font-size: 0.875rem;
  font-weight: bold;
  color: white;
  padding: 0.625rem;
  border-radius: 0.5rem;
`;

const UploadPic = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.g1};
  font-size: 0.875rem;
  font-weight: bold;
  color: white;
  padding: 0.625rem;
  border-radius: 0.5rem;
`;

const RecCaution = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.b1};
  padding-left: 1rem;
`;

const RecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const PostHospitalReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isCounsel, setIsCounsel] = useState(false);
  const [facilityRating, setFacilityRating] = useState(0);
  const [atmosphereRating, setAtmosphereRating] = useState(0);
  const [staffRating, setStaffRating] = useState(0);
  const [isAttach, setIsAttach] = useState(false);
  const [isCautionChecked, setIsCautionChecked] = useState(false);
  const [formData, setFormData] = useState({
    treatment: "",
    hospital: "",
    title: "",
    content: "",
  });

  const handleCounselingClick = (e) => {
    e.preventDefault();
    setIsCounsel(!isCounsel);
    setFormData({ ...formData, treatment: "단순상담" });
  };

  const handleAttachRecipt = (e) => {
    e.preventDefault();
    setIsAttach(true);
    alert("영수증이 첨부되었습니다.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCautionCheckChange = (isChecked) => {
    setIsCautionChecked(isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필드 확인
    if (!formData.treatment) {
      alert("진료명을 입력해주세요.");
      return;
    }
    if (!formData.hospital) {
      alert("병원명을 입력해주세요.");
      return;
    }
    if (!formData.title) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (!formData.content) {
      alert("내용을 입력해주세요.");
      return;
    }
    if (!facilityRating) {
      alert("시설 평점을 입력해주세요.");
      return;
    }
    if (!atmosphereRating) {
      alert("분위기 평점을 입력해주세요.");
      return;
    }
    if (!staffRating) {
      alert("직원 평점을 입력해주세요.");
      return;
    }
    if (!isAttach) {
      alert("영수증을 첨부해주세요.");
      return;
    }
    if (!isCautionChecked) {
      alert("주의사항을 확인해주세요.");
      return;
    }

    const content = {
      ...formData,
      facilityRating,
      atmosphereRating,
      employeeRating: staffRating,
    };
    try {
      console.log(content);
      const response = await postHospitalReview(content);
      if (response && response.status === 201) {
        alert("리뷰 작성이 완료되었습니다.");
        navigate(`/hospital-review/hospital/${id}`);
      }
    } catch (error) {
      console.error("병원 리뷰 작성 실패", error);
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <SmallTitle>당신의 이야기를 들려주세요.</SmallTitle>
        <LargeTitle>병원별 후기</LargeTitle>
      </TitleWrapper>
      <InputForm onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>진료명</Label>
          <Input
            type="text"
            name="treatment"
            placeholder="진료명을 적어주세요."
            onChange={handleChange}
          />
          <Button
            className={isCounsel ? "active" : ""}
            onClick={handleCounselingClick}
          >
            단순 상담
          </Button>
        </InputWrapper>
        <InputWrapper>
          <Label>병원명</Label>
          <Input
            type="text"
            name="hospital"
            placeholder="방문한 병원 이름을 적어주세요."
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>시설</Label>
          <StarRating rating={facilityRating} setRating={setFacilityRating} />
        </InputWrapper>
        <InputWrapper>
          <Label>분위기</Label>
          <StarRating
            rating={atmosphereRating}
            setRating={setAtmosphereRating}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>직원</Label>
          <StarRating rating={staffRating} setRating={setStaffRating} />
        </InputWrapper>
        <InputWrapper className="title">
          <Label className="title">제목</Label>
          <RecWrapper>
            <Input
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
              onChange={handleChange}
            />
            <RecCaution>영수증을 첨부해야 후기를 등록할 수 있어요.</RecCaution>
          </RecWrapper>
          <Upload>
            <UploadRec onClick={handleAttachRecipt}>영수증 첨부</UploadRec>
            <UploadPic>사진 업로드</UploadPic>
          </Upload>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <BodyInput
            type="text"
            name="content"
            placeholder="후기를 적어주세요."
            onChange={handleChange}
          />
        </InputWrapper>
        <Caution onCheckChange={handleCautionCheckChange} />
        <BtnWrapper>
          <PostButton type="submit">게시글 작성</PostButton>
        </BtnWrapper>
      </InputForm>
    </Wrapper>
  );
};

export default PostHospitalReview;
