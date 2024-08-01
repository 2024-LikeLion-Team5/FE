import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Advertisement from "../../components/Advertisement";
import CustomSelect from "../../components/CustomSelect";
import Caution from "../../components/Caution";

const ContentWrapper = styled.div`
  width: 52rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 8.625rem;
`;

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 6.625rem;
`;

const Body = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 2.5;
  &.first {
    margin-bottom: 3.75rem;
  }
  &.second {
    margin-bottom: 10.875rem;
  }
  &.third {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 3.75rem;
  }
  &.fourth {
    margin-bottom: 7.75rem;
  }
  &.fifth {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 16.5rem;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  text-align: center;
  border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
  padding-bottom: 2.5rem;
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
  margin-bottom: 1rem;
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

const PainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const PainLevelWrapper = styled.div`
  display: grid;
  width: 550px;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
`;

const PainLevelButton = styled.button`
  width: 3.125rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.b1 : "white"};
  color: ${({ selected }) => (selected ? "white" : "black")};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.b3};
    color: white;
  }

  grid-row: 2;
`;

const PainDescription = styled.div`
  display: flex;
  gap: 172px;
  width: 600px;
  margin-left: 130px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const PainLevel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
  align-items: center;
  justify-content: end;
  color: ${({ theme }) => theme.colors.b1};
  font-size: 13px;
  font-weight: 600;

  &.high {
    margin-left: 25px;
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

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Refer = styled.p`
  color: ${({ theme }) => theme.colors.b1};
  font-size: 0.875rem;
  font-weight: 500;
`;

const BtnWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 24.75rem;
  display: flex;
  gap: 2.5rem;
  justify-content: center;
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

const PostCounsel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedAge, setSelectedAge] = useState(null);
  const [painLevel, setPainLevel] = useState(0);
  const [isCautionChecked, setIsCautionChecked] = useState(false);
  const [formData, setFormData] = useState({
    disease: "",
    period: "",
    title: "",
    content: "",
    imageUrl: null,
  });

  const ageOption = [
    { key: "UNDER_TWENTY", value: "20대 이하" },
    { key: "THIRTY", value: "30대" },
    { key: "FORTY", value: "40대" },
    { key: "FIFTY", value: "50대" },
    { key: "SIXTY", value: "60대" },
    { key: "OVER_SEVENTY", value: "70대 이상" },
  ];

  const options = [
    { key: "IMPOTENCE", value: "발기부전" },
    { key: "PENIS_ENLARGEMENT", value: "음경확대" },
    { key: "VASECTOMY", value: "정관수술" },
    { key: "URINARY_STONE", value: "요로결석" },
    { key: "PREMATURE_AND_DELAYED_EJACULATION", value: "조루/지루" },
    { key: "PROSTATITIS", value: "전립선염" },
    { key: "ETC", value: "기타" },
  ];

  const handleAgeClick = (e, age) => {
    e.preventDefault();
    setSelectedAge(age.key);
  };

  const handlePainLevelClick = (e, level) => {
    e.preventDefault();
    setPainLevel(level);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      disease: selectedOption.key,
    });
  };

  const handleCautionCheckChange = (isChecked) => {
    setIsCautionChecked(isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCautionChecked) {
      alert("주의사항을 확인해주세요.");
      return;
    }
    alert("상담 요청이 완료되었습니다.");
    navigate(`/hospital-review/hospital/${id}`);
  };

  return (
    <div>
      <Advertisement />
      <TitleSection>
        <Title>
          잠깐! 전문의에게 상담하기가 다음과 같은 이유로 망설여진다면?
        </Title>
        <Body className="first">
          개인적인 이유로 공개되기 싫어서
          <br />
          오히려 더 불안한 마음이 들어서, 상담에 대해 회의감이 들기 때문에
          <br />
          초기 상담 비용 등 금전적 요구 우려
        </Body>
        <Body className="second">...</Body>
        <Body className="third">걱정하지 않아도 좋아요!</Body>
        <Body className="fourth">
          모멘텀에서 제공하는 전문의 상담 내용은 상담을 위한 용도 외에는
          누구에게도, 어디에도 유출되지 않아요.
          <br />
          모멘텀에서 확인 절차를 거친 인증받은 전문의들만이 상담에 참여할 수
          있어요.
          <br />
          소중한 상담자의 피해를 막기 위해 모멘텀의 전문의 상담 페이지에서
          이루어지는 모든 상담 내용은 일정 기간 보관된 후 삭제돼요.
        </Body>
        <Body className="fifth">
          그럼, 이제 안심하고 전문의와의 상담을 진행해 볼까요?
        </Body>
      </TitleSection>
      <ContentWrapper>
        <TitleWrapper>
          <LargeTitle>전문의에게 상담하기</LargeTitle>
        </TitleWrapper>
        <InputForm onSubmit={handleSubmit}>
          <InputWrapper>
            <Label>질환/고민</Label>
            <CustomSelect optionData={options} onChange={handleSelectChange} />
          </InputWrapper>
          <InputWrapper>
            <Label>기간</Label>
            <Input
              type="text"
              name="period"
              placeholder="불편함을 느낀 지 얼마나 됐나요?"
              onChange={handleChange}
            />
          </InputWrapper>
          <PainWrapper>
            <PainDescription>
              <PainLevel className="zero">
                <span>아무 느낌 없음</span>
                <span>▼</span>
              </PainLevel>
              <PainLevel className="middle">
                <span>
                  타이레놀 등 <br />
                  일반 진통제 필요
                </span>
                <span>▼</span>
              </PainLevel>
              <PainLevel className="high">
                <span>기절</span>
                <span>▼</span>
              </PainLevel>
            </PainDescription>
            <InputWrapper>
              <Label>고통</Label>
              <PainLevelWrapper>
                {Array.from({ length: 11 }, (_, i) => (
                  <PainLevelButton
                    key={i}
                    selected={i === painLevel}
                    onClick={(event) => handlePainLevelClick(event, i)}
                  >
                    {i}
                  </PainLevelButton>
                ))}
              </PainLevelWrapper>
            </InputWrapper>
          </PainWrapper>

          <InputWrapper>
            <Label>연령대</Label>
            <AgeOption>
              {ageOption.map((age) => (
                <Button
                  key={age.key}
                  className={selectedAge === age.key ? "active" : ""}
                  onClick={(e) => handleAgeClick(e, age)}
                >
                  {age.value}
                </Button>
              ))}
            </AgeOption>
          </InputWrapper>

          <InputWrapper>
            <Label>제목</Label>
            <Input
              type="text"
              name="title"
              placeholder="제목을 입력해주세요."
              onChange={handleChange}
            />
            <UploadPic>사진 업로드</UploadPic>
          </InputWrapper>
          <InputWrapper>
            <Label>내용</Label>
            <BodyWrapper>
              <BodyInput
                type="text"
                name="content"
                placeholder="상담내용을 적어주세요."
                onChange={handleChange}
              />
              <Refer>
                증상이나 과거 관련 병력, 먹는 약 등에 대해 구체적으로 작성하면
                보다 정확한 상담에 도움이 돼요.
              </Refer>
            </BodyWrapper>
          </InputWrapper>
        </InputForm>
        <Caution onCheckChange={handleCautionCheckChange} />
        <BtnWrapper>
          <PostButton type="submit" onClick={handleSubmit}>
            전화 상담 예약하기
          </PostButton>
          <PostButton type="submit" onClick={handleSubmit}>
            카톡 상담 예약하기
          </PostButton>
        </BtnWrapper>
      </ContentWrapper>
    </div>
  );
};

export default PostCounsel;
