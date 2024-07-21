import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  .container {
    display: grid;
    width: 1120px;
    grid-template-columns: repeat(8, 1fr);
    gap: 2rem;
    margin: 0 auto;
    align-items: center;
  }
  color: #002357;
`;
