import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  width: 70rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.75rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const MenuName = styled.span`
  color: ${({ color, theme }) => color || "white"};
  font-size: 2.5rem;
  font-weight: bold;
`;

const Detail = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

const Banner = ({ image, menuName, detail, color }) => {
  // 여기에서 color prop 추가
  return (
    <BannerWrapper>
      <Image src={image} alt="Banner" />
      <Container>
        <DetailWrapper>
          <MenuName color={color}>{menuName}</MenuName>
          <Detail>{detail}</Detail>
        </DetailWrapper>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
