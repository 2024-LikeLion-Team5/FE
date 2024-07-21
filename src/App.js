import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/Home";
import HospitalReview from "./pages/HospitalReview";
import theme from "./Theme";
import Footer from "./components/Footer";

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
              <Route path="/hospital-review" element={<HospitalReview />} />
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
