import React, { useState } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import bannerImg from "../../assets/review_img.png";
import Notice from "../../components/Notice";
import SearchHospital from "../../components/HospitalReview/SearchHospital";
import Advertisement from "../../components/Advertisement";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HospitalReview = () => {
  const [searching, setSearching] = useState(false);
  const location = useLocation();

  const isDetailPage =
    location.pathname.includes("/hospital-review/") &&
    location.pathname !== "/hospital-review" &&
    location.pathname !== "/hospital-review/search" &&
    location.pathname !== "/hospital-review/";

  const isPostPage =
    location.pathname === "/hospital-review/post-doctor-review" ||
    location.pathname === "/hospital-review/post-hospital-review" ||
    location.pathname === "/hospital-review/hospital-review/id" ||
    location.pathname === "/hospital-review/doctor-review/id";

  return (
    <div>
      {!isPostPage && (
        <div>
          <Banner
            image={bannerImg}
            menuName="병원 후기"
            detail="의사별, 병원별로 다양하고 자세한 후기를 만나 보세요."
          />
          <Container>
            <Notice />
            {!isDetailPage && (
              <SearchHospital
                searching={searching}
                setSearching={setSearching}
              />
            )}
          </Container>
        </div>
      )}
      {isPostPage && <Advertisement />}
      <Outlet context={{ searching, setSearching }} />
    </div>
  );
};

export default HospitalReview;
