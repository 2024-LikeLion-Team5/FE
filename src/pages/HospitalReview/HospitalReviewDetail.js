import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import detailImg from "../../assets/hospital_detail_img.png";
import DoctorReviewComment from "../../components/HospitalReview/DoctorReviewComment";
import HospitalReviewComment from "../../components/HospitalReview/HospitalReviewComment";
import star from "../../assets/full_star.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 2.5rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 56rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.g3};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 3rem 2rem;
`;

const Info = styled.div`
  display: flex;
  gap: 3.365rem;
`;

const Img = styled.img`
  width: 13.125rem;
  height: 17.5rem;
  border-radius: 0.5rem;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

const Name = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
`;

const CounselBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.g1};
  color: white;
  border: none;
  border-radius: 0.5rem;
  width: 8.75rem;
  height: 2.25rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  font-weight: bold;
  font-family: "Pretendard";
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Address = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const ClinicTime = styled.div`
  display: flex;
  align-items: start;
  gap: 0.875rem;
`;

const Title = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
`;

const Times = styled.ul`
  margin: 0;
  padding: 0;
`;

const Time = styled.li`
  list-style: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding-bottom: 0.375rem;
  &:last-child {
    padding-bottom: 0;
  }
`;

const Evaluation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RatingSection = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Section = styled.div`
  width: 4rem;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
  img {
    width: 1.75rem;
  }
  span {
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.b1};
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.25rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
`;

const Options = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

const Option = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.b4};
  background-color: white;
  border-radius: 2.5rem;
  padding: 0.625rem 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;

  &.active {
    border: none;
    background-color: ${({ theme }) => theme.colors.b1};
    color: white;
  }
`;

const CommentWrapper = styled.div`
  margin-top: 2rem;
`;

const HospitalReviewDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("doctor");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get("tab");
    if (tab === "hospital") {
      setActiveButton("hospital");
    } else {
      setActiveButton("doctor");
    }
  }, [location.search]);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <Container>
      <Wrapper>
        <Info>
          <Img src={detailImg} alt="병원 사진" />
          <Details>
            <Name>멘텀비뇨기과</Name>
            <InfoWrapper>
              <About>
                <Address>대전광역시 유성구 대학로 99 </Address>
                <ClinicTime>
                  <Title>진료시간</Title>
                  <Times>
                    <Time>월~금 10:00~18:00</Time>
                    <Time>토 12:00~19:00 (휴식 X)</Time>
                    <Time>휴식 시간 12:30~13:30</Time>
                    <Time>매주 일요일 휴진</Time>
                  </Times>
                </ClinicTime>
              </About>
              <Evaluation>
                <RatingSection>
                  <Section>시설 평점</Section>
                  <Stars>
                    <img src={star} alt="별" />
                    <span>4</span>
                  </Stars>
                </RatingSection>
                <RatingSection>
                  <Section>분위기 평점</Section>
                  <Stars>
                    <img src={star} alt="별" />
                    <span>4</span>
                  </Stars>
                </RatingSection>
                <RatingSection>
                  <Section>직원 평점</Section>
                  <Stars>
                    <img src={star} alt="별" />
                    <span>4</span>
                  </Stars>
                </RatingSection>
              </Evaluation>
            </InfoWrapper>
          </Details>
        </Info>
        <Buttons>
          <Options>
            <Option
              className={activeButton === "doctor" ? "active" : ""}
              onClick={() => handleButtonClick("doctor")}
            >
              의사 상담 후기
            </Option>
            <Option
              className={activeButton === "hospital" ? "active" : ""}
              onClick={() => handleButtonClick("hospital")}
            >
              병원별 후기
            </Option>
          </Options>
          <CounselBtn>전문의와 상담하기</CounselBtn>
        </Buttons>

        <CommentWrapper>
          {activeButton === "doctor" && <DoctorReviewComment />}
          {activeButton === "hospital" && <HospitalReviewComment />}
        </CommentWrapper>
      </Wrapper>
    </Container>
  );
};

export default HospitalReviewDetail;
