import React, { useState } from "react";
import styled from "styled-components";
import goodBtn from "../assets/good.png";
import badBtn from "../assets/bad.png";
import reportBtn from "../assets/report.png";
import { patchLike, patchDisLike } from "../api/hospital"; // 좋아요, 싫어요 API 함수

const Wrapper = styled.div`
  width: 52rem;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 7.5rem;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
  padding-bottom: 1rem;
  margin-bottom: 2.5rem;
`;

const Categorys = styled.div`
  display: flex;
  gap: 1rem;
`;

const Category = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.b4};
  background-color: transparent;
  border-radius: 2.5rem;
  padding: 0.625rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
`;

const MetaInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const MetaItem = styled.div``;

const ContentWapper = styled.div`
  width: 100%;
  height: 30rem;
  box-sizing: border-box;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 0.5rem;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Buttons = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1rem;
`;

const ReportButton = styled.button`
  position: absolute;
  left: 0;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.625rem;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.g2};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.b1};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const LikeDislikeButtons = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  display: flex;
  gap: 0.625rem;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  padding: 0.5rem 2.5rem;
  cursor: pointer;

  &.hate {
    background-color: ${({ theme }) => theme.colors.g3};
    &.active {
      background-color: ${({ theme }) => theme.colors.r1};
      color: white;
    }
  }
  &.good {
    background-color: ${({ theme }) => theme.colors.b1};
    color: white;
    &.active {
      background-color: ${({ theme }) => theme.colors.b2};
    }
  }
`;

const DetailBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 3fr);
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 0.5rem;
  padding: 2rem 6.5rem;
  margin-bottom: 2.5rem;
`;

const DetailItem = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;
  align-items: center;
`;

const Label = styled.span`
  font-size: 15px;
  font-weight: bold;
  width: 100px;
`;

const Value = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.nv};
`;

const PostLayout = ({
  postId,
  title,
  category,
  metaInfo,
  detailItems,
  content,
}) => {
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  const handleLikeClick = async () => {
    await patchLike(postId);
    setLikeActive(true);
    setDislikeActive(false);
  };

  const handleDislikeClick = async () => {
    await patchDisLike(postId);
    setLikeActive(false);
    setDislikeActive(true);
  };

  const handleReportClick = () => {
    alert("신고 접수 되었습니다.");
  };

  return (
    <Wrapper>
      <Header>
        <Categorys>
          <Category>{category}</Category>
        </Categorys>
        <Title>{title}</Title>
        <MetaInfo>
          <InfoWrapper>
            {metaInfo.map((info, index) => (
              <MetaItem key={index}>{info}</MetaItem>
            ))}
          </InfoWrapper>
          <MetaItem>{metaInfo[metaInfo.length - 1]}</MetaItem>
        </MetaInfo>
      </Header>

      {detailItems && detailItems.length > 0 && (
        <DetailBox>
          {detailItems.map((item, index) => (
            <DetailItem key={index}>
              <Label>{item.label}</Label>
              <Value>{item.value}</Value>
            </DetailItem>
          ))}
        </DetailBox>
      )}

      <ContentWapper>
        <Content>{content}</Content>
      </ContentWapper>
      <Buttons>
        <ReportButton onClick={handleReportClick}>
          <img src={reportBtn} alt="신고" />
        </ReportButton>
        <LikeDislikeButtons>
          <Button
            className={`good ${likeActive ? "active" : ""}`}
            onClick={handleLikeClick}
          >
            <img src={goodBtn} alt="좋아요" />
            좋아요
          </Button>
          <Button
            className={`hate ${dislikeActive ? "active" : ""}`}
            onClick={handleDislikeClick}
          >
            <img src={badBtn} alt="싫어요" />
            싫어요
          </Button>
        </LikeDislikeButtons>
      </Buttons>
    </Wrapper>
  );
};

export default PostLayout;
