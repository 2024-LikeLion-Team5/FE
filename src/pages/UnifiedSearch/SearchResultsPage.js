import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import seeMore from "../../assets/see_more.png";
import HospitalSearchItem from "../../components/HospitalReview/HospitalSearchItem";
import DoctorReviewItem from "../../components/HospitalReview/DoctorReviewItem";
import {
  getCommunityIntegration,
  getHospitalIntegration,
  getDoctorReviewIntegration,
  getDiseasePostId,
  getSurgeryPostId,
  getDailyPostId,
} from "../../api/community";
import {
  getDoctorReviewList,
} from "../../api/hospital";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const KeyWord = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 auto;
  border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
  width: 52rem;
  text-align: center;
  padding-bottom: 2.5rem;
  margin-top: 5.75rem;
`;

const SectionWrapper = styled.div`
  margin: 5.25rem 0;
`;

const Result = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ResultTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 0.9375rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Btn = styled.img`
  height: 13px;
`;

const Reviews = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  padding: 1.625rem 0;
`;

const CommunityResult = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  display: flex;
  margin: 5.25rem 0;
`;

const CommunitySummary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  margin-right: 1rem;
`;

const ListWrapper = styled.div`
  flex: 2;
  border-radius: 8px;
  padding: 2rem;
  position: relative;
`;

const ListItem = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-left: none;
  border-right: none;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  }

  span:first-child {
    color: ${({ theme }) => theme.colors.b1};
  }

  &.CONCERN span:first-child {
    color: ${({ theme }) => theme.colors.b1};
  }

  &.SURGERY_REVIEW span:first-child {
    color: ${({ theme }) => theme.colors.b1};
  }

  &.DAILY span:first-child {
    color: ${({ theme }) => theme.colors.b1};
  }

  &.DOCTOR_REVIEW span:first-child {
    color: ${({ theme }) => theme.colors.b1};
  }

  &.HOSPITAL_REVIEW span:first-child {
    color: ${({ theme }) => theme.colors.b1};
  }
`;

//추가
const HospitalSearchItemWrapper = styled.div`
  flex: 1;
  border: none;
  display: flex;
  gap: 1rem;
`;

const NoResult = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.nv};
  font-size: 1rem;
  margin: 2rem auto;
  justify-content: center;
`;

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [communityPosts, setCommunityPosts] = useState([]);
  const [hospitalReviews, setHospitalReviews] = useState([]);
  const [doctorReviews, setDoctorReviews] = useState([]);
  const [totalDoctor, setTotalDoctor] = useState(0);
  const [totalCommunityCount, setTotalCommunityCount] = useState(0); // 커뮤니티 검색 결과 개수 상태
  const [totalHospitalCount, setTotalHospitalCount] = useState(0); // 병원 검색 결과 개수 상태
  const [totalDoctorCount, setTotalDoctorCount] = useState(0); // 의사 후기 검색 결과 개수 상태
  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const communityData = await getCommunityIntegration(keyword);
        setCommunityPosts(communityData.communityPosts || []);
        setTotalCommunityCount(communityData.totalSearchedCount || 0); // 커뮤니티 검색 결과 개수 설정

        const hospitalData = await getHospitalIntegration(keyword);
        setHospitalReviews(hospitalData.getHospitalInfoResponses || []);
        setTotalHospitalCount(hospitalData.totalSearchedCount || 0); // 병원 검색 결과 개수 설정

        const doctorData = await getDoctorReviewIntegration(keyword);
        setDoctorReviews(doctorData.doctorReviews || []);
        setTotalDoctorCount(doctorData.totalSearchedCount || 0); 
        // 의사 후기 검색 결과 개수 설정
        const data = await getDoctorReviewList(keyword);
        setDoctorReviews(data.doctorTreatmentReviewPostsResponses);
        setTotalDoctor(data.totalSearchedCount);
        
      } catch (error) {
        console.error("Error fetching search results:", error);
        setCommunityPosts([]);
        setHospitalReviews([]);
        setDoctorReviews([]);
      }
    };

    fetchSearchResults();
  }, [keyword]);

  const handleSelectHospitalReview = (id) => {
    navigate(`/hospital-review/hospital/${id}`);
  };

  const handleSelectDoctorReview = (id) => {
    navigate(`/hospital-review/doctor-review/${id}`);
  };

  const handleCommunityMore = () => {
    navigate(`/community/search-results?keyword=${keyword}`);
  };

  const handleHospitalMore = () => {
    navigate(`/hospital-search-results?keyword=${keyword}`);
  };

  const handleDoctorMore = () => {
    navigate(`/doctor-search-results?keyword=${keyword}`);
  };

  const handlePostClick = async (postId, postType) => {
    try {
      let post;
      switch (postType) {
        case "CONCERN":
          post = await getDiseasePostId(postId);
          navigate(`/disease/detail/${postId}`); // 여전히 postId 사용
          break;
        case "SURGERY_REVIEW":
          post = await getSurgeryPostId(postId);
          navigate(`surgery-reviews/detail/${postId}`); // 여전히 postId 사용
          break;
        case "DAILY":
          post = await getDailyPostId(postId);
          navigate(`/communities/dailies/${postId}`); // 여전히 postId 사용
          break;
        default:
          console.error("Unknown post type:", postType);
          return;
      }
      console.log("Post ID:", postId, "Post Type:", postType, "Post:", post);
    } catch (error) {
      console.error("Failed to fetch post details:", error);
    }
  };

  return (
    <Container>
      <KeyWord>통합 검색 : {keyword}</KeyWord>

      <CommunityResult>
        <CommunitySummary>
          <ResultTitle>커뮤니티 검색 결과 ({totalCommunityCount})</ResultTitle>
          <br />
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleCommunityMore}
          >
            <Text>더보기</Text>
            <Btn src={seeMore} alt="더보기" />
          </div>
        </CommunitySummary>
        <ListWrapper>
          {communityPosts.length === 0 ? (
            <NoResult>검색 결과가 없습니다</NoResult>
          ) : (
            communityPosts.map((post) => (
              <ListItem
                key={post.postId}
                className={post.communityType}
                onClick={() => handlePostClick(post.postId, post.postType)}
              >
                <span>
                  {{
                    CONCERN: "질환 고민",
                    SURGERY_REVIEW: "수술 후기",
                    DAILY: "일상",
                    DOCTOR_REVIEW: "의사 후기",
                    HOSPITAL_REVIEW: "병원 후기",
                  }[post.postType] || ""}
                </span>
                <span>{post.title}</span>
              </ListItem>
            ))
          )}
        </ListWrapper>
      </CommunityResult>

      <SectionWrapper>
        <Result>
          <ResultTitle>병원 검색 결과 ({totalHospitalCount})</ResultTitle>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleHospitalMore}
          >
            <Text>더보기</Text>
            <Btn src={seeMore} alt="더보기" />
          </div>
        </Result>
        {/* <HospitalReviews>
          {hospitalReviews.length === 0 ? (
            <NoResult>검색 결과가 없습니다</NoResult>
          ) : (
            hospitalReviews.map((review) => (
              <HospitalSearchItem
                key={review.id}
                onSelect={handleSelectHospitalReview}
                review={review}
              />
            ))
          )}
        </HospitalReviews> */}
                <Reviews>
          {hospitalReviews.length === 0 ? (
            <NoResult>검색 결과가 없습니다</NoResult>
          ) : (
            <HospitalSearchItemWrapper>
              {hospitalReviews.slice(0, 3).map((review, index) => (
                <HospitalSearchItem
                  key={review.hospitalId || index}
                  onSelect={handleSelectHospitalReview}
                  review={review}
                />
              ))}
            </HospitalSearchItemWrapper>
          )}
        </Reviews>
      </SectionWrapper>

      <SectionWrapper>
        <Result>
          <ResultTitle>
            의사 상담 후기 검색 결과 ({totalDoctorCount})
          </ResultTitle>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleDoctorMore}
          >
            <Text>더보기</Text>
            <Btn src={seeMore} alt="더보기" />
          </div>
        </Result>
        {/* <Reviews>
          {doctorReviews.length === 0 ? (
            <NoResult>검색 결과가 없습니다</NoResult>
          ) : (
            doctorReviews.map((review) => (
              <DoctorReviewItem
                key={review.reviewId}
                onSelect={handleSelectDoctorReview}
                review={review}
              />
            ))
          )}
        </Reviews> */}
        <Reviews>
          {totalDoctor === 0 ? (
            <NoResult>검색 결과가 없습니다.</NoResult>
          ) : (
            doctorReviews
              .slice(0, 3)
              .map((review, index) => (
                <DoctorReviewItem
                  key={review.postId || index}
                  onSelect={handleSelectDoctorReview}
                  review={review}
                />
              ))
          )}
        </Reviews>
      </SectionWrapper>
    </Container>
  );
};

export default SearchResultsPage;
