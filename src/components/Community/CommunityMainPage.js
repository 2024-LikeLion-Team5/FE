//select 없애기 전

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { getTotalDiseaseCommunities, getTotalDailyCommunities, getTotalSurgeryCommunities } from "../../api/community";
// import Banner from "../Banner";
// import Notice from "../Notice";
// import SelectCategory from "../SelectCategory"; // SelectCategory를 가져옵니다.
// import bannerImg from "../../assets/community_img.png";

// const Container = styled.div`
//   width: 100%;
//   max-width: 1120px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-top: 2rem;
// `;

// const CategoryListWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 132px; /* 상단 마진을 132px로 설정 */
// `;

// const CategoryWrapper = styled.div`
//   flex: 1;
//   margin: 1rem;
// `;

// const MoreButtonWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   position: absolute;
//   top: 40px;
//   right: 10px;
// `;

// const MoreButton = styled.button`
//   background-color: transparent;
//   border: none;
//   color: ${({ theme }) => theme.colors.nv};
//   font-weight: bold;
//   font-size: 1rem;
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const ListWrapper = styled.div`
//   border: 1px solid ${({ theme }) => theme.colors.b4};
//   border-radius: 8px;
//   padding: 1rem;
//   margin-top: 1rem;
//   padding-top: 80px;
//   padding-bottom: 60px;
//   position: relative;
// `;

// const ListItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem 0;
//   border-top: 1px solid ${({ theme }) => theme.colors.g2};
//   cursor: pointer;

//   &:last-child {
//     border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
//   }

//   span:first-child {
//     color: ${({ theme }) => theme.colors.b1}; /* 질환 명칭은 b1 색상 */
//   }

//   &.daily span:first-child {
//     color: ${({ theme }) => theme.colors.nv}; /* 일상 게시글의 텍스트는 nv 색상 */
//   }
// `;

// const SurgerySection = styled.div`
//   margin-top: 2rem;
// `;

// const SelectWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const CustomSelectCategory = styled(SelectCategory)`
//   width: 256px;
//   height: 40px;
//   margin-left: 10px;
// `;

// const SurgeryListWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 1rem;
//   border: 1px solid ${({ theme }) => theme.colors.b4};
//   border-radius: 8px;
//   padding: 1rem;
//   margin-top: 1rem;
//   padding-top: 80px;
//   padding-bottom: 60px;
//   position: relative;
//   cursor: pointer;
// `;

// const SurgeryListItem = styled.div`
//   border-radius: 8px;
//   padding: 1rem;
//   background-color: ${({ theme }) => theme.colors.g3};
//   height: 120px;
//   box-shadow: none;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.b4};
//   }

//   span {
//     display: block;
//     &:first-child {
//       font-weight: bold;
//       color: ${({ theme }) => theme.colors.b1};
//     }
//     &:nth-child(2) {
//       margin-top: 0.5rem;
//       color: ${({ theme }) => theme.colors.nv};
//     }
//   }
// `;

// const CommunityMainPage = () => {
//   const [diseasePosts, setDiseasePosts] = useState([]);
//   const [dailyPosts, setDailyPosts] = useState([]);
//   const [surgeryPosts, setSurgeryPosts] = useState([]);
//   const [selectedDisease, setSelectedDisease] = useState("IMPOTENCE");
//   const navigate = useNavigate();

//   const diseaseMap = {
//     "IMPOTENCE": "발기부전",
//     "PENIS_ENLARGEMENT": "음경확대",
//     "VASECTOMY": "정관수술",
//     "URINARY_STONE": "요로결석",
//     "PREMATURE_AND_DELAYED_EJACULATION": "조루/지루",
//     "PROSTATITIS": "전립선염",
//     "ETC": "기타"
//   };

//   useEffect(() => {
//     const fetchDiseasePosts = async () => {
//       try {
//         const data = await getTotalDiseaseCommunities();
//         setDiseasePosts(data);
//       } catch (error) {
//         console.error("Failed to fetch disease posts:", error);
//       }
//     };

//     const fetchDailyPosts = async () => {
//       try {
//         const data = await getTotalDailyCommunities();
//         setDailyPosts(data);
//       } catch (error) {
//         console.error("Failed to fetch daily posts:", error);
//       }
//     };

//     const fetchSurgeryPosts = async () => {
//       try {
//         const data = await getTotalSurgeryCommunities(selectedDisease);
//         setSurgeryPosts(data);
//       } catch (error) {
//         console.error("Failed to fetch surgery posts:", error);
//       }
//     };

//     fetchDiseasePosts();
//     fetchDailyPosts();
//     fetchSurgeryPosts();
//   }, [selectedDisease]);

//   const handleSelectDisease = (disease) => {
//     setSelectedDisease(disease);
//   };

//   const goToDiseaseDetail = (postId) => {
//     navigate(`/disease/detail/${postId}`);
//   };

//   const goToDailyDetail = (postId) => {
//     navigate(`/communities/dailies/${postId}`);
//   };

//   const goToSurgeryDetail = (postId) => {
//     navigate(`/surgery/detail/${postId}`);
//   };

//   return (
//     <div>
//       <Banner image={bannerImg} menuName="커뮤니티" color="#002357" />
//       <Container>
//         <Notice />
//         <CategoryListWrapper>
//           <CategoryWrapper>
//             <SectionTitle>질환 고민</SectionTitle>
//             <ListWrapper>
//               <MoreButtonWrapper>
//                 <MoreButton onClick={() => navigate("/disease")}>
//                   질환 고민 더 보기 &gt;
//                 </MoreButton>
//               </MoreButtonWrapper>
//               {diseasePosts.map((item) => (
//                 <ListItem key={item.postId} onClick={() => goToDiseaseDetail(item.postId)}>
//                   <span>{diseaseMap[item.disease]}</span>
//                   <span>{item.title}</span>
//                 </ListItem>
//               ))}
//             </ListWrapper>
//           </CategoryWrapper>
//           <CategoryWrapper>
//             <SectionTitle>일상</SectionTitle>
//             <ListWrapper>
//               <MoreButtonWrapper>
//                 <MoreButton onClick={() => navigate("/daily")}>
//                   일상 더 보기 &gt;
//                 </MoreButton>
//               </MoreButtonWrapper>
//               {dailyPosts.map((item) => (
//                 <ListItem key={item.postId} className="daily" onClick={() => goToDailyDetail(item.postId)}>
//                   <span>{item.title}</span>
//                 </ListItem>
//               ))}
//             </ListWrapper>
//           </CategoryWrapper>
//         </CategoryListWrapper>
//         <SurgerySection>
//           <SelectWrapper>
//             <SectionTitle>수술 후기</SectionTitle>
//             <SelectCategory onSelect={handleSelectDisease} />
//           </SelectWrapper>
//           <SurgeryListWrapper>
//             <MoreButtonWrapper>
//               <MoreButton onClick={() => navigate("/surgery")}>
//                 수술 후기 더 보기 &gt;
//               </MoreButton>
//             </MoreButtonWrapper>
//             {surgeryPosts.map((item) => (
//               <SurgeryListItem key={item.postId} onClick={() => goToSurgeryDetail(item.postId)}>
//                 <span>{diseaseMap[item.disease]}</span>
//                 <span>{item.title}</span>
//                 <span>{item.content}</span>
//               </SurgeryListItem>
//             ))}
//           </SurgeryListWrapper>
//         </SurgerySection>
//       </Container>
//     </div>
//   );
// };

// export default CommunityMainPage;

//select 없앤거
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  getTotalDiseaseCommunities,
  getTotalDailyCommunities,
  getTotalSurgeryCommunities,
} from "../../api/community";
import Banner from "../Banner";
import Notice from "../Notice";
import bannerImg from "../../assets/community_img.png";

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 7.25rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 2rem;
`;

const CategoryListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 132px; /* 상단 마진을 132px로 설정 */
`;

const CategoryWrapper = styled.div`
  flex: 1;
  margin: 1rem;
`;

const MoreButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 40px;
  right: 10px;
`;

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.nv};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ListWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  padding-top: 80px;
  padding-bottom: 60px;
  position: relative;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  }

  span:first-child {
    color: ${({ theme }) => theme.colors.b1}; /* 질환 명칭은 b1 색상 */
  }

  &.daily span:first-child {
    color: ${({ theme }) =>
      theme.colors.nv}; /* 일상 게시글의 텍스트는 nv 색상 */
  }
`;

const SurgerySection = styled.div`
  margin-top: 2rem;
`;

const SurgeryListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.b4};
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  padding-top: 80px;
  padding-bottom: 60px;
  position: relative;
  cursor: pointer;
`;

const SurgeryListItem = styled.div`
  border-radius: 8px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.g3};
  height: 120px;
  box-shadow: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.b4};
  }

  span {
    display: block;
    &:first-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.b1};
    }
    &:nth-child(2) {
      font-family: "pretendard";
      font-size: 1.1rem;
      font-weight: bold;
      line-height: auto;
      margin: 0.5rem 0;
      color: ${({ theme }) => theme.colors.nv};
    }
  }
`;

const CommunityMainPage = () => {
  const [diseasePosts, setDiseasePosts] = useState([]);
  const [dailyPosts, setDailyPosts] = useState([]);
  const [surgeryPosts, setSurgeryPosts] = useState([]);
  const navigate = useNavigate();

  const diseaseMap = {
    IMPOTENCE: "발기부전",
    PENIS_ENLARGEMENT: "음경확대",
    VASECTOMY: "정관수술",
    URINARY_STONE: "요로결석",
    PREMATURE_AND_DELAYED_EJACULATION: "조루/지루",
    PROSTATITIS: "전립선염",
    ETC: "기타",
  };

  useEffect(() => {
    const fetchDiseasePosts = async () => {
      try {
        const data = await getTotalDiseaseCommunities();
        setDiseasePosts(data);
      } catch (error) {
        console.error("Failed to fetch disease posts:", error);
      }
    };

    const fetchDailyPosts = async () => {
      try {
        const data = await getTotalDailyCommunities();
        setDailyPosts(data);
      } catch (error) {
        console.error("Failed to fetch daily posts:", error);
      }
    };

    const fetchSurgeryPosts = async () => {
      try {
        const data = await getTotalSurgeryCommunities();
        setSurgeryPosts(data);
      } catch (error) {
        console.error("Failed to fetch surgery posts:", error);
      }
    };

    fetchDiseasePosts();
    fetchDailyPosts();
    fetchSurgeryPosts();
  }, []);

  const goToDiseaseDetail = (postId) => {
    navigate(`/disease/detail/${postId}`);
  };

  const goToDailyDetail = (postId) => {
    navigate(`/communities/dailies/${postId}`);
  };

  const goToSurgeryDetail = (postId) => {
    navigate(`/surgery/detail/${postId}`);
  };

  return (
    <div>
      <Banner image={bannerImg} menuName="커뮤니티" color="#002357" />
      <Container>
        <Notice />
        <CategoryListWrapper>
          <CategoryWrapper>
            <SectionTitle>질환 고민</SectionTitle>
            <ListWrapper>
              <MoreButtonWrapper>
                <MoreButton onClick={() => navigate("/disease")}>
                  질환 고민 더 보기 &gt;
                </MoreButton>
              </MoreButtonWrapper>
              {diseasePosts.map((item) => (
                <ListItem
                  key={item.postId}
                  onClick={() => goToDiseaseDetail(item.postId)}
                >
                  <span>{diseaseMap[item.disease]}</span>
                  <span>{item.title}</span>
                </ListItem>
              ))}
            </ListWrapper>
          </CategoryWrapper>
          <CategoryWrapper>
            <SectionTitle>일상</SectionTitle>
            <ListWrapper>
              <MoreButtonWrapper>
                <MoreButton onClick={() => navigate("/daily")}>
                  일상 더 보기 &gt;
                </MoreButton>
              </MoreButtonWrapper>
              {dailyPosts.map((item) => (
                <ListItem
                  key={item.postId}
                  className="daily"
                  onClick={() => goToDailyDetail(item.postId)}
                >
                  <span>{item.title}</span>
                </ListItem>
              ))}
            </ListWrapper>
          </CategoryWrapper>
        </CategoryListWrapper>
        <SurgerySection>
          <SectionTitle>수술 후기</SectionTitle>
          <SurgeryListWrapper>
            <MoreButtonWrapper>
              <MoreButton onClick={() => navigate("/surgery")}>
                수술 후기 더 보기 &gt;
              </MoreButton>
            </MoreButtonWrapper>
            {surgeryPosts.map((item) => (
              <SurgeryListItem
                key={item.postId}
                onClick={() => goToSurgeryDetail(item.postId)}
              >
                <span>{diseaseMap[item.disease]}</span>
                <span>{item.title}</span>
                <span>{item.content}</span>
              </SurgeryListItem>
            ))}
          </SurgeryListWrapper>
        </SurgerySection>
      </Container>
    </div>
  );
};

export default CommunityMainPage;
