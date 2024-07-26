// import React from "react";
// import styled from "styled-components";
// import bannerImg from "../assets/main_img.png";

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 4rem;
// `;

// const Image = styled.img`
//   width: 1376px;
//   margin-bottom: 2rem;
// `;

// const Title = styled.h1`
//   font-size: 3rem;
//   color: white;
// `;

// const SubTitle = styled.h2`
//   font-size: 1.5rem;
//   color: white;
//   margin-bottom: 2rem;
// `;

// const Description = styled.p`
//   font-size: 1.125rem;
//   color: ${({ theme }) => theme.colors.nv};
//   text-align: center;
//   margin-bottom: 2rem;
//   line-height: 1.5;
// `;

// const Home = () => {
//   return (
//     <Wrapper>
//       <Image src={bannerImg} alt="Main" />
//       <Title>MOMENTUM</Title>
//       <SubTitle>모멘텀</SubTitle>
//       <Description>
//         More-Momentum 모멘텀은 남성들이 가진 낭설을 파악하고 
//         자신감을 회복할 수 있도록 성 건강에 관련한 다양한 이야기를 나누는 공간입니다. <br />
//         모멘텀에서 긍정적인 경험을 얻고 앞으로 추진해 나아갈 수 있기를 응원합니다.
//       </Description>
//     </Wrapper>
//   );
// };

// export default Home;

import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/main_img.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 42px 0 124px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1376px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  color: white;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3vw; /* 뷰포트 너비의 3% */
  color: white;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.5vw; /* 뷰포트 너비의 1.5% */
  color: white;
  margin: 0;
  margin-top: 1rem;
`;

const Description = styled.div`
  position: absolute;
  bottom: 10%;
  left: 4%;
  font-size: 16px; /* 16pt는 16px로 변환 */
  color: ${({ theme }) => theme.colors.nv};
  text-align: left;
  line-height: 1.5;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={bannerImg} alt="Main" />
        <TextContainer>
          <Title>MOMENTUM</Title>
          <SubTitle>모멘텀</SubTitle>
        </TextContainer>
        <Description>
          More-Momentum 모멘텀은 남성들이 가진 남모를 고민을 파악하고<br/>
          자신감을 회복할 수 있도록 성 건강에 관련한 다양한 이야기를 나누는 공간입니다.
          <br/><br/>
          모멘텀에서 긍정적인 경험을 얻고 앞으로 추진해 나아갈 수 있기를 응원합니다.
        </Description>
      </ImageContainer>
    </Wrapper>
  );
};

export default Home;


