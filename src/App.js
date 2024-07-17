import styled from "styled-components";
import "./App.css";
import { GlobalContain } from "./components/GlobalContain";
import Home from "./pages/Home";
import HospitalReview from "./pages/HospitalReview";

function App() {
  return (
    <div>
      <GlobalContain />
      <HospitalReview />
    </div>
  );
}

export default App;
