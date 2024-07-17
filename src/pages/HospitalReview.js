import React from "react";
import styled from "styled-components";
import GlobalHeader from "../components/Header";
import Banner from "../components/Banner";
import bannerImg from "../assets/review_img.png";
import Notice from "../components/Notice";
import { GlobalContain } from "../components/GlobalContain";

const Container = styled.div`
  width: 80rem;
  margin: 0 auto;
`;

const HospitalReview = () => {
  return (
    <div>
      <GlobalHeader />
      <Banner
        image={bannerImg}
        menuName="병원 후기"
        detail="의사별, 실장별, 병원별로 다양하고 자세한 후기를 만나 보세요."
      />
      <Container>
        <Notice />
      </Container>
    </div>
  );
};

export default HospitalReview;
