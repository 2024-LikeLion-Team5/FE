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
            </Routes>
          </ContentWrapper>
          <Footer />
        </PageWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
