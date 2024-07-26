import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // react-router-dom에서 useNavigate 가져오기
import Banner from "../Banner";
import Notice from "../Notice";
import bannerImg from "../../assets/community_img.png";
import SelectCategory from "../SelectCategory";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 2rem;
`;

const CategoryListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CategoryWrapper = styled.div`
  flex: 1;
  margin: 1rem;
`;

const MoreButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 40px;
  right: 10px;
`;

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.nv};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ListWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  padding-top: 80px;
  padding-bottom: 60px;
  position: relative;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.g2};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  }

  

  span:first-child {
    color: ${({ theme }) => theme.colors.b1}; /* 질환 명칭은 b1 색상 */
  }

  &.daily span:first-child {
    color: ${({ theme }) =>
      theme.colors.nv}; /* 일상 게시글의 텍스트는 nv 색상 */
  }
`;

const DiseaseSection = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const diseaseList = [
    "발기부전",
    "발기부전",
    "전립선 비대증",
    "전립선 비대증",
    "요로결석",
    "방광염",
  ];

  const goToDiseaseMain = () => {
    navigate("/disease"); // 질환 고민 main 페이지로 이동
  };

  return (
    <CategoryWrapper>
      <SectionTitle>질환 고민</SectionTitle>
      <ListWrapper>
        <MoreButtonWrapper>
          <MoreButton onClick={goToDiseaseMain}>
            질환 고민 더 보기 &gt;
          </MoreButton>
        </MoreButtonWrapper>
        {diseaseList.map((item, index) => (
          <ListItem key={index}>
            <span>{item}</span>
            <span>아이아이아이아</span>
          </ListItem>
        ))}
      </ListWrapper>
    </CategoryWrapper>
  );
};

const DailySection = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const dailyList = [
    "아이아이아이",
    "아이아이아이",
    "아이아이아이",
    "아이아이아이",
    "아이아이아이",
    "아이아이아이",
  ];

  const goToDailyMain = () => {
    navigate("/daily"); // 일상 main 페이지로 이동
  };

  return (
    <CategoryWrapper>
      <SectionTitle>일상</SectionTitle>
      <ListWrapper>
        <MoreButtonWrapper>
          <MoreButton onClick={goToDailyMain}>일상 더 보기 &gt;</MoreButton>
        </MoreButtonWrapper>
        {dailyList.map((item, index) => (
          <ListItem key={index} className="daily">
            <span>{item}</span>
            <span>아이아이아이아</span>
          </ListItem>
        ))}
      </ListWrapper>
    </CategoryWrapper>
  );
};

const SurgerySection = styled.div`
  margin-top: 2rem;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center aligned */
  margin-bottom: 1rem;
`;

const CustomSelectCategory = styled(SelectCategory)`
  width: 256px;
  height: 40px;
  margin-left: 10px; /* Adjusted to shift right */
`;

const SurgeryListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns layout */
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  padding-top: 80px;
  padding-bottom: 60px;
  position: relative;
`;

const SurgeryListItem = styled.div`
  border-radius: 8px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.g3};
  height: 120px;
  box-shadow: none;

  span {
    display: block;
    &:first-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.b1};
    }
    &:nth-child(2) {
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors.nv};
    }
  }
`;

const SurgerySectionComponent = () => {
  const surgeryList = [
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
    "수술 후기 내용",
  ];

  return (
    <SurgerySection>
      <SelectWrapper>
        <SectionTitle>수술 후기</SectionTitle>
        <CustomSelectCategory />
      </SelectWrapper>
      <SurgeryListWrapper>
        {surgeryList.map((item, index) => (
          <SurgeryListItem key={index}>
            <span>정관수술</span>
            <span>{item}</span>
            <span>
              수술 받기로 결정하고 모멘텀에서 병원 후기 좋은 곳 찾아
              갔다왔습니다. 덕분에 좋은 곳에서 잘 받고 왔어요.
            </span>
          </SurgeryListItem>
        ))}
      </SurgeryListWrapper>
    </SurgerySection>
  );
};

const CommunityMainPage = () => {
  return (
    <div>
      <Banner image={bannerImg} menuName="커뮤니티" color="#002357" />
      <Container>
        <Notice />
        <CategoryListWrapper>
          <DiseaseSection />
          <DailySection />
        </CategoryListWrapper>

        <SurgerySectionComponent />
      </Container>
    </div>
  );
};

export default CommunityMainPage;
