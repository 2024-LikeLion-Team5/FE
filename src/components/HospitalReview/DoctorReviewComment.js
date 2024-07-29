import React, { useEffect, useState } from "react";
import styled from "styled-components";
import writeBtn from "../../assets/write_btn.png";
import writeBtnWhite from "../../assets/write_btn_white.png";
import { useNavigate } from "react-router-dom";
import { getDoctorReviewByHospital } from "../../api/hospital";

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Doctors = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Doctor = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 2.5rem;
  padding: 0.625rem 1.5rem;
  background-color: white;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  &.active {
    border: none;
    background-color: ${({ theme }) => theme.colors.b1};
    color: white;
  }
`;

const PostButton = styled.button`
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

const TitleWrapper = styled.div`
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

const DoctorReviewComment = ({ hospitalId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [activeDoctor, setActiveDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      if (activeDoctor) {
        const data = await getDoctorReviewByHospital(hospitalId, activeDoctor);
        setReviews(data);
      }
    };

    fetchReviews();
  }, [hospitalId, activeDoctor]);

  const handleDoctorClick = (doctor) => {
    setActiveDoctor(doctor);
  };

  const handlePostBtnClick = (id) => {
    navigate(`/hospital-review/post/${id}/doctor-review`);
  };

  const handleCommentClick = (id) => {
    navigate(`/hospital-review/doctor-review/${id}`);
  };

  return (
    <div>
      <BtnWrapper>
        <Option>
          <Title>의사</Title>
          <Doctors>
            {reviews.map((review) => (
              <Doctor
                key={review.doctor}
                className={activeDoctor === review.doctor ? "active" : ""}
                onClick={() => handleDoctorClick(review.doctor)}
              >
                {review.doctor}
              </Doctor>
            ))}
          </Doctors>
        </Option>

        <PostButton
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handlePostBtnClick(hospitalId)}
        >
          <img src={isHovered ? writeBtnWhite : writeBtn} alt="글쓰기 버튼" />
          병원 후기 쓰기
        </PostButton>
      </BtnWrapper>
      {reviews.map((review) => (
        <CommentWrapper
          key={review.postId}
          onClick={() => handleCommentClick(review.postId)}
        >
          <TitleWrapper>
            <CommentTitle>{review.title}</CommentTitle>
            <Date>{review.createdAt}</Date>
          </TitleWrapper>
          <Detail>
            <Info>
              <div>
                <InfoName>질환/고민</InfoName>
                <InfoDetail>{review.disease}</InfoDetail>
              </div>
              <div>
                <InfoName>받은 진료</InfoName>
                <InfoDetail>{review.treatment}</InfoDetail>
              </div>
              <div>
                <InfoName>의사</InfoName>
                <InfoDetail>{review.doctor}</InfoDetail>
              </div>
            </Info>
            <About>
              <AboutDetail>{review.ageGroup}대</AboutDetail>
              <AboutDetail>평점 {review.rating}점</AboutDetail>
            </About>
          </Detail>
          <Body>{review.content}</Body>
        </CommentWrapper>
      ))}
    </div>
  );
};

export default DoctorReviewComment;
