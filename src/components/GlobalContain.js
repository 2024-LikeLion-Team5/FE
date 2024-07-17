import { createGlobalStyle } from "styled-components";

export const GlobalContain = createGlobalStyle`
  .container {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 32px;
    padding: 0 16px;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
