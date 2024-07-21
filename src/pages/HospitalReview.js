import React, { useState } from "react";
import styled from "styled-components";
import GlobalHeader from "../components/Header";
import Banner from "../components/Banner";
import bannerImg from "../assets/review_img.png";
import Notice from "../components/Notice";
import SearchHospital from "../components/SearchHospital";
import HospitalReviewList from "../components/HospitalReviewList";
import ReviewSearchResult from "../components/ReviewSearchResult";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HospitalReview = () => {
  const [searching, setSearching] = useState(false);

  return (
    <div>
      <GlobalHeader />
      <Banner
        image={bannerImg}
        menuName="병원 후기"
        detail="의사별, 병원별로 다양하고 자세한 후기를 만나 보세요."
      />
      <Container>
        <Notice />
        <SearchHospital searching={searching} setSearching={setSearching} />
      </Container>
      {!searching && <HospitalReviewList />}
      <Container>{searching && <ReviewSearchResult />}</Container>
    </div>
  );
};

export default HospitalReview;
