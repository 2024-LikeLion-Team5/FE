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
import CommunityMain from "./pages/CommunityMain";
import DiseaseMain from "./pages/Disease/DiseaseMain";
import DiseaseWrite from "./pages/Disease/DiseaseWrite";
import DetailDiseasePost from "./pages/Disease/DetailDiseasePost";
import SurgeryMain from "./pages/Surgery/SurgeryMain";
import SurgeryWrite from "./pages/Surgery/SurgeryWrite";
import DetailSurgeryPost from "./pages/Surgery/DetailSurgeryPost";
import DailyMain from "./pages/Daily/DailyMain";
import DailyWrite from "./pages/Daily/DailyWrite";
import DetailDailyPost from "./pages/Daily/DetailDailyPost";
import Header from "./components/Header";
import CounselMain from "./pages/Counsel/CounselMain";
import Library from "./pages/Library";
import PostCounsel from "./pages/Counsel/PostCounsel";
import SearchResultsPage from "./pages/UnifiedSearch/SearchResultsPage";
import CommunitySearchResultsPage from "./pages/UnifiedSearch/CommunitySearchResultsPage";
import DoctorSearchResultsPage from "./pages/UnifiedSearch/DoctorSearchResultsPage";
import HospitalSearchResultsPage from "./pages/UnifiedSearch/HospitalSearchResultsPage";
import CardNewsMain from "./pages/CardNewsMain";

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
              <Route path="/cardnews" element={<CardNewsMain />} />
              <Route path="/hospital-review" element={<HospitalReview />}>
                <Route index element={<HospitalReviewList />} />
                <Route path="search-results" element={<ReviewSearchResult />} />
                <Route path="hospital/:id" element={<HospitalReviewDetail />} />
                <Route
                  path="post/:id/doctor-review"
                  element={<PostDoctorReview />}
                />
                <Route
                  path="post/:id/hospital-review"
                  element={<PostHospitalReview />}
                />
                <Route
                  path="doctor-review/:id"
                  element={<DetailDoctorReview />}
                />
                <Route
                  path="hospital-review/:id"
                  element={<DetailHospitalReview />}
                />
              </Route>

              <Route path="/community" element={<CommunityMain />} />
              <Route path="/disease" element={<DiseaseMain />} />
              <Route path="/disease/write" element={<DiseaseWrite />} />
              <Route
                path="/disease/detail/:id"
                element={<DetailDiseasePost />}
              />
              <Route path="/surgery" element={<SurgeryMain />} />
              <Route path="/surgery/write" element={<SurgeryWrite />} />
              <Route
                path="/surgery/detail/:id"
                element={<DetailSurgeryPost />}
              />
              <Route path="/daily" element={<DailyMain />} />
              <Route path="/daily/write" element={<DailyWrite />} />

              <Route
                path="/communities/dailies/:id"
                element={<DetailDailyPost />}
              />
              <Route path="/counsel" element={<CounselMain />} />
              <Route
                path="/counsel/:id/write-counsel"
                element={<PostCounsel />}
              />
              <Route path="/library" element={<Library />} />
              <Route path="/search-results" element={<SearchResultsPage />} />
              <Route
                path="/community/search-results"
                element={<CommunitySearchResultsPage />}
              />
              <Route
                path="/doctor-search-results"
                element={<DoctorSearchResultsPage />}
              />
              <Route
                path="/hospital-search-results"
                element={<HospitalSearchResultsPage />}
              />
            </Routes>
          </ContentWrapper>
          <Footer />
        </PageWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
