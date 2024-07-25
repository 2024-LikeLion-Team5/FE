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
import DiseaseDetail from "./pages/Disease/DiseaseDetail";
import SurgeryMain from "./pages/Surgery/SurgeryMain";
import SurgeryWrite from "./pages/Surgery/SurgeryWrite";
import SurgeryDetail from "./pages/Surgery/SurgeryDetail";
import DailyMain from "./pages/Daily/DailyMain";
import DailyWrite from "./pages/Daily/DailyWrite";
import DailyDetail from "./pages/Daily/DailyDetail";
import Header from "./components/Header";

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
              {/* 다른 경로들을 여기에 추가할 수 있습니다. */}
              <Route path="/community" element={<CommunityMain />} />

              <Route path="/disease" element={<DiseaseMain />}>
                <Route index element={<DiseaseMain />} />
                <Route path="write" element={<DiseaseWrite />} />
                <Route path="detail/:id" element={<DiseaseDetail />} />
              </Route>

              <Route path="/surgery" element={<SurgeryMain />}>
                <Route index element={<SurgeryMain />} />
                <Route path="write" element={<SurgeryWrite />} />
                <Route path="detail/:id" element={<SurgeryDetail />} />
              </Route>

              <Route path="/daily" element={<DailyMain />}>
                <Route index element={<DailyMain />} />
                <Route path="write" element={<DailyWrite />} />
                <Route path="detail/:id" element={<DailyDetail />} />
              </Route>
            </Routes>
          </ContentWrapper>
          <Footer />
        </PageWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;