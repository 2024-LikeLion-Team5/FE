import React from "react";
import styled from "styled-components";
import DoctorReviewItem from "./DoctorReviewItem";

const Wrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  padding: 1.625rem 0;
`;

const DoctorSeachItem = () => {
  return (
    <Wrapper>
      <DoctorReviewItem />
    </Wrapper>
  );
};

export default DoctorSeachItem;