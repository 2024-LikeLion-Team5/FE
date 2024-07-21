import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #d9d9d9;
  height: 7.375rem;
  width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Advertisement = () => {
  return (
    <div>
      <Wrapper>광고</Wrapper>
    </div>
  );
};

export default Advertisement;
