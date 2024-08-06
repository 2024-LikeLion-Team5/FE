import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  getTotalDiseaseCommunities,
  getTotalDailyCommunities,
  getTotalSurgeryCommunities,
} from "../api/community";
import Notice from "../components/Notice";
import bannerImg from "../assets/main_img.png";
import CardNews from "../components/CardNews";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 42px 0 124px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1376px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Description = styled.div`
  font-size: 16px; /* 16pt는 16px로 변환 */
  color: ${({ theme }) => theme.colors.nv};
  text-align: center;
  line-height: 1.5;
  font-weight: bold;
  margin-bottom: 10rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 11.75rem;
`;

const ContentWrapper = styled.div`
  margin: 1rem;
  margin-top: 5rem;
`;

const ContentDescription = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const ContentListWrapper = styled.div``;

const SectionTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  &.contentTitle {
    margin-bottom: 1rem;
  }
`;

const CategoryListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 132px;
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
  &.content {
    position: inherit;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }
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
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  }

  span:first-child {
    color: ${({ theme }) => theme.colors.b1};
  }

  &.daily span:first-child {
    color: ${({ theme }) => theme.colors.nv};
  }
`;

const SurgerySection = styled.div`
  margin-top: 2rem;
`;

const SurgeryListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  padding-top: 80px;
  padding-bottom: 60px;
  position: relative;
  cursor: pointer;
`;

const SurgeryListItem = styled.div`
  border-radius: 8px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.g3};
  min-height: 120px;
  box-shadow: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.b4};
  }

  span {
    display: block;
    &:first-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.b1};
    }
    &:nth-child(2) {
      font-family: "pretendard";
      font-size: 1.1rem;
      font-weight: bold;
      line-height: auto;
      margin: 0.5rem 0;
      color: ${({ theme }) => theme.colors.nv};
    }
  }
`;

const Home = () => {
  const [diseasePosts, setDiseasePosts] = useState([]);
  const [dailyPosts, setDailyPosts] = useState([]);
  const [surgeryPosts, setSurgeryPosts] = useState([]);
  const navigate = useNavigate();

  const diseaseMap = {
    IMPOTENCE: "발기부전",
    PENIS_ENLARGEMENT: "음경확대",
    VASECTOMY: "정관수술",
    URINARY_STONE: "요로결석",
    PREMATURE_AND_DELAYED_EJACULATION: "조루/지루",
    PROSTATITIS: "전립선염",
    ETC: "기타",
  };

  useEffect(() => {
    const fetchDiseasePosts = async () => {
      try {
        const data = await getTotalDiseaseCommunities();
        setDiseasePosts(data);
      } catch (error) {
        console.error("Failed to fetch disease posts:", error);
      }
    };

    const fetchDailyPosts = async () => {
      try {
        const data = await getTotalDailyCommunities();
        setDailyPosts(data);
      } catch (error) {
        console.error("Failed to fetch daily posts:", error);
      }
    };

    const fetchSurgeryPosts = async () => {
      try {
        const data = await getTotalSurgeryCommunities();
        setSurgeryPosts(data);
      } catch (error) {
        console.error("Failed to fetch surgery posts:", error);
      }
    };

    fetchDiseasePosts();
    fetchDailyPosts();
    fetchSurgeryPosts();
  }, []);

  const goToDiseaseDetail = (postId) => {
    navigate(`/disease/detail/${postId}`);
  };

  const goToDailyDetail = (postId) => {
    navigate(`/communities/dailies/${postId}`);
  };

  const goToSurgeryDetail = (postId) => {
    navigate(`/surgery/detail/${postId}`);
  };

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={bannerImg} alt="Main" />
      </ImageContainer>
      <Container>
        <Notice />
        <ContentWrapper>
          <SectionTitle className="contentTitle">바로서기</SectionTitle>
          <MoreButtonWrapper className="content">
            <ContentDescription>
              남성 질환과 성 고민, 어렵고 궁금하다면
            </ContentDescription>
            <MoreButton onClick={() => navigate("/cardnews")}>
              더 보기 &gt;
            </MoreButton>
          </MoreButtonWrapper>
          <ContentListWrapper>
            <CardNews />
          </ContentListWrapper>
        </ContentWrapper>
        <CategoryListWrapper>
          <CategoryWrapper>
            <SectionTitle>질환 고민</SectionTitle>
            <ListWrapper>
              <MoreButtonWrapper>
                <MoreButton onClick={() => navigate("/disease")}>
                  질환 고민 더 보기 &gt;
                </MoreButton>
              </MoreButtonWrapper>
              {diseasePosts.map((item) => (
                <ListItem
                  key={item.postId}
                  onClick={() => goToDiseaseDetail(item.postId)}
                >
                  <span>{diseaseMap[item.disease]}</span>
                  <span>{item.title}</span>
                </ListItem>
              ))}
            </ListWrapper>
          </CategoryWrapper>
          <CategoryWrapper>
            <SectionTitle>일상</SectionTitle>
            <ListWrapper>
              <MoreButtonWrapper>
                <MoreButton onClick={() => navigate("/daily")}>
                  일상 더 보기 &gt;
                </MoreButton>
              </MoreButtonWrapper>
              {dailyPosts.map((item) => (
                <ListItem
                  key={item.postId}
                  className="daily"
                  onClick={() => goToDailyDetail(item.postId)}
                >
                  <span>{item.title}</span>
                </ListItem>
              ))}
            </ListWrapper>
          </CategoryWrapper>
        </CategoryListWrapper>
        <SurgerySection>
          <SectionTitle>수술 후기</SectionTitle>
          <SurgeryListWrapper>
            <MoreButtonWrapper>
              <MoreButton onClick={() => navigate("/surgery")}>
                수술 후기 더 보기 &gt;
              </MoreButton>
            </MoreButtonWrapper>
            {surgeryPosts.map((item) => (
              <SurgeryListItem
                key={item.postId}
                onClick={() => goToSurgeryDetail(item.postId)}
              >
                <span>{diseaseMap[item.disease]}</span>
                <span>{item.title}</span>
                <span>{item.content}</span>
              </SurgeryListItem>
            ))}
          </SurgeryListWrapper>
        </SurgerySection>
      </Container>
      <Description>
        More-Momentum 모멘텀은 남성들이 가진 남모를 고민을 파악하고
        <br />
        자신감을 회복할 수 있도록 성 건강에 관련한 다양한 이야기를 나누는
        공간입니다.
        <br />
        <br />
        모멘텀에서 긍정적인 경험을 얻고 앞으로 추진해 나아갈 수 있기를
        응원합니다.
      </Description>
    </Wrapper>
  );
};

export default Home;
