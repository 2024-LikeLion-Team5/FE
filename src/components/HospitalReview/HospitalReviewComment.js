import React, { useEffect, useState } from "react";
import styled from "styled-components";
import writeBtn from "../../assets/write_btn.png";
import writeBtnWhite from "../../assets/write_btn_white.png";
import { useNavigate } from "react-router-dom";
import { getHospitalReviewByHospital } from "../../api/hospital";

const PostButton = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  font-size: 15px;
  border: none;
  font-weight: bold;
  justify-content: center;
  padding: 0.625rem 1.5rem;
  border-radius: 2.5rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.nv};
    border: none;
  }
`;

const CommentWrapper = styled.div`
  margin-top: 1rem;
  background-color: white;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
`;

const TitleWapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const CommentTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Date = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const InfoName = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  margin-right: 1.5rem;
`;

const InfoDetail = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const About = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const AboutDetail = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.3125rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  background-color: transparent;
  border-radius: 2.5rem;
`;

const Body = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`;

const NoReviews = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
`;

const HospitalReviewComment = ({ hospitalId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getHospitalReviewByHospital(hospitalId);
      setReviews(data || []);
    };

    fetchReviews();
  }, [hospitalId]);

  const handlePostBtnClick = (id) => {
    navigate(`/hospital-review/post/${id}/hospital-review`);
  };

  const handleCommentClick = (id) => {
    navigate(`/hospital-review/hospital-review/${id}`);
  };

  return (
    <div>
      <PostButton
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handlePostBtnClick(hospitalId)}
      >
        <img src={isHovered ? writeBtnWhite : writeBtn} alt="글쓰기 버튼" />
        병원 후기 쓰기
      </PostButton>
      {reviews.length === 0 ? (
        <NoReviews>등록된 후기가 없습니다.</NoReviews>
      ) : (
        reviews.map((review) => (
          <CommentWrapper
            key={review.postId}
            onClick={() => handleCommentClick(review.postId)}
          >
            <TitleWapper>
              <CommentTitle>{review.title}</CommentTitle>
              <Date>{review.createdAt}</Date>
            </TitleWapper>
            <Detail>
              <Info>
                <div>
                  <InfoName>받은 진료</InfoName>
                  <InfoDetail>{review.treatment}</InfoDetail>
                </div>
              </Info>
              <About>
                <AboutDetail>시설 {review.facilityRating}점</AboutDetail>
                <AboutDetail>분위기 {review.atmosphereRating}점</AboutDetail>
                <AboutDetail>직원 {review.employeeRating}점</AboutDetail>
              </About>
            </Detail>
            <Body>{review.content}</Body>
          </CommentWrapper>
        ))
      )}
    </div>
  );
};

export default HospitalReviewComment;
