import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/Home";
import HospitalReview from "./pages/HospitalReview/HospitalReviewLayout";
import theme from "./Theme";
import Footer from "./components/Footer";
import HospitalReviewList from "./pages/HospitalReview/HospitalReviewList";
import ReviewSearchResult from "./components/HospitalReview/ReviewSearchResult";
import HospitalReviewDetail from "./pages/HospitalReview/HospitalReviewDetail";
import PostDoctorReview from "./pages/HospitalReview/PostDoctorReview";
import PostHospitalReview from "./pages/HospitalReview/PostHospitalReview";
import DetailDoctorReview from "./pages/HospitalReview/DetailDoctorReview";
import DetailHospitalReview from "./pages/HospitalReview/DetailHospitalReview";
//규리가 추가
import CommunityMain from "./pages/CommunityMain";
import DiseaseMain from "./pages/Disease/DiseaseMain";
import DiseaseWrite from "./pages/Disease/DiseaseWrite";
// import DiseaseDetail from "./pages/Disease/DiseaseDetail";
import DetailDiseasePost from "./pages/Disease/DetailDiseasePost";
import SurgeryMain from "./pages/Surgery/SurgeryMain";
import SurgeryWrite from "./pages/Surgery/SurgeryWrite";
// import SurgeryDetail from "./pages/Surgery/SurgeryDetail";
import DetailSurgeryPost from "./pages/Surgery/DetailSurgeryPost";
import DailyMain from "./pages/Daily/DailyMain";
import DailyWrite from "./pages/Daily/DailyWrite";
// import DailyDetail from "./pages/Daily/DailyDetail";
import DetailDailyPost from "./pages/Daily/DetailDailyPost";
import Header from "./components/Header";
import CounselMain from "./pages/Counsel/CounselMain";
import Library from "./pages/Library";
import PostCounsel from "./pages/Counsel/PostCounsel";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <PageWrapper>
          <Header />
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hospital-review" element={<HospitalReview />}>
                <Route index element={<HospitalReviewList />} />
                <Route path="search" element={<ReviewSearchResult />} />
                <Route path=":id" element={<HospitalReviewDetail />} />
                <Route
                  path="post-doctor-review"
                  element={<PostDoctorReview />}
                />
                <Route
                  path="post-hospital-review"
                  element={<PostHospitalReview />}
                />
                <Route
                  path="doctor-review/id"
                  element={<DetailDoctorReview />}
                />
                <Route
                  path="hospital-review/id"
                  element={<DetailHospitalReview />}
                />
              </Route>
              <Route path="/community" element={<CommunityMain />} />
              <Route path="/disease" element={<DiseaseMain />} />
              <Route path="/disease/write" element={<DiseaseWrite />} />
              <Route path="/disease/detail/:id" element={<DetailDiseasePost />} />
              <Route path="/surgery" element={<SurgeryMain />} />
              <Route path="/surgery/write" element={<SurgeryWrite />} />
              <Route path="/surgery/detail/:id" element={<DetailSurgeryPost />} />
              <Route path="/daily" element={<DailyMain />} />
              <Route path="/daily/write" element={<DailyWrite />} />
              <Route path="/daily/detail/:id" element={<DetailDailyPost />} />
              <Route path="/counsel" element={<CounselMain />} />
              <Route path="/counsel/write-counsel" element={<PostCounsel />} />
              <Route path="/library" element={<Library />} />
            </Routes>
          </ContentWrapper>
          <Footer />
        </PageWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
