import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/counseling_img.png";
import sideArrow from "../../assets/see_more.png";
import { useNavigate } from "react-router-dom";

const Selections = styled.div`
  margin-top: 7rem;
  margin-bottom: 8.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Selection = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.g2};
  border-radius: 0.5rem;
  width: 25rem;
  height: 9.75rem;
  box-sizing: border-box;
  padding: 2.5rem 3rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.g2};
  }
`;

const Explanation = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
`;

const TitleWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Arrow = styled.img``;

const CounselMain = () => {
  const navigate = useNavigate();

  const handleSelectionClick = () => {
    navigate("/counsel/write-counsel");
  };

  return (
    <div>
      <Banner
        image={bannerImg}
        menuName={"상담"}
        detail={"인증받은 전문의에게 좀더 자세한 내용을 상담해 보세요."}
      />
      <Selections>
        <Selection onClick={handleSelectionClick}>
          <Explanation>
            간편하지만 자세한 개인 맞춤형 상담이 필요하다면
          </Explanation>
          <TitleWrapper>
            <Title>상담하러 가기</Title>
            <Arrow src={sideArrow} alt="화살표" />
          </TitleWrapper>
        </Selection>
        <Selection onClick={handleSelectionClick}>
          <Explanation>도움이 필요한 상담자들이 기다리고 있어요</Explanation>
          <TitleWrapper>
            <Title>답변하러 가기</Title>
            <Arrow src={sideArrow} alt="화살표" />
          </TitleWrapper>
        </Selection>
      </Selections>
    </div>
  );
};

export default CounselMain;
