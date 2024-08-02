import React, { useEffect, useState } from "react";
import styled from "styled-components";
import writeBtn from "../../assets/write_btn.png";
import writeBtnWhite from "../../assets/write_btn_white.png";
import { useNavigate } from "react-router-dom";
import {
  getDoctorByHospital,
  getDoctorReviewByHospital,
} from "../../api/hospital";

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

const NoReviews = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
`;

const DoctorReviewComment = ({ hospitalId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [activeDoctor, setActiveDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorByHospital(hospitalId);
        const doctorsList = data || [];
        setDoctors(doctorsList);
        if (doctorsList.length > 0) {
          setActiveDoctor(doctorsList[0]);
        }
      } catch (error) {
        console.error("의사 목록을 가져오는 데 실패했습니다.", error);
      }
    };

    fetchDoctor();
  }, [hospitalId]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        let data;
        if (activeDoctor && activeDoctor.doctorId !== "all") {
          data = await getDoctorReviewByHospital(
            hospitalId,
            0,
            activeDoctor.doctorId
          );
        } else {
          data = await getDoctorReviewByHospital(hospitalId);
        }
        setReviews(data || []);
      } catch (error) {
        console.error("리뷰 목록을 가져오는 데 실패했습니다.", error);
      }
    };

    if (activeDoctor) {
      fetchReviews();
    }
  }, [hospitalId, activeDoctor]);

  const handleDoctorClick = async (doctor) => {
    setActiveDoctor(doctor);
  };

  const handlePostBtnClick = (id) => {
    navigate(`/hospital-review/post/${id}/doctor-review`);
  };

  const handleCommentClick = (id) => {
    navigate(`/hospital-review/doctor-review/${id}`);
  };

  const ageOptions = [
    { key: "UNDER_TWENTY", value: "20대 이하" },
    { key: "THIRTY", value: "30대" },
    { key: "FORTY", value: "40대" },
    { key: "FIFTY", value: "50대" },
    { key: "SIXTY", value: "60대" },
    { key: "OVER_SEVENTY", value: "70대 이상" },
  ];

  const diseaseOptions = [
    { key: "IMPOTENCE", value: "발기부전" },
    { key: "PENIS_ENLARGEMENT", value: "음경확대" },
    { key: "VASECTOMY", value: "정관수술" },
    { key: "URINARY_STONE", value: "요로결석" },
    { key: "PREMATURE_AND_DELAYED_EJACULATION", value: "조루/지루" },
    { key: "PROSTATITIS", value: "전립선염" },
    { key: "ETC", value: "기타" },
  ];

  const getAgeGroupValue = (key) => {
    const age = ageOptions.find((option) => option.key === key);
    return age ? age.value : "";
  };

  const getDiseaseValue = (key) => {
    const disease = diseaseOptions.find((option) => option.key === key);
    return disease ? disease.value : "";
  };

  return (
    <div>
      <BtnWrapper>
        <Option>
          <Title>의사</Title>
          <Doctors>
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <Doctor
                  key={doctor.doctorId}
                  className={
                    activeDoctor && activeDoctor.doctorId === doctor.doctorId
                      ? "active"
                      : ""
                  }
                  onClick={() => handleDoctorClick(doctor)}
                >
                  {doctor.doctorName}
                </Doctor>
              ))
            ) : (
              <span>등록된 의사가 없습니다.</span>
            )}
          </Doctors>
        </Option>

        <PostButton
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => handlePostBtnClick(hospitalId)}
        >
          <img src={isHovered ? writeBtnWhite : writeBtn} alt="글쓰기 버튼" />
          병원 후기 쓰기
        </PostButton>
      </BtnWrapper>
      {reviews.length === 0 ? (
        <NoReviews>등록된 후기가 없습니다.</NoReviews>
      ) : (
        reviews.map((review) => (
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
                  <InfoDetail>{getDiseaseValue(review.disease)}</InfoDetail>
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
                <AboutDetail>{getAgeGroupValue(review.ageGroup)}</AboutDetail>
                <AboutDetail>평점 {review.rating}점</AboutDetail>
              </About>
            </Detail>
            <Body>{review.content}</Body>
          </CommentWrapper>
        ))
      )}
    </div>
  );
};

export default DoctorReviewComment;
