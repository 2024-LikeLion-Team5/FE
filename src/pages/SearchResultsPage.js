// import React from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import seeMore from '../assets/see_more.png';
// import HospitalSearchItem from '../components/HospitalReview/HospitalSearchItem';
// import DoctorReviewItem from '../components/HospitalReview/DoctorReviewItem';

// const Container = styled.div`
//   width: 100%;
//   max-width: 1120px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const KeyWord = styled.div`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin: 0 auto;
//   border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
//   width: 52rem;
//   text-align: center;
//   padding-bottom: 2.5rem;
//   margin-top: 5.75rem;
// `;

// const SectionWrapper = styled.div`
//   margin: 5.25rem 0;
// `;

// const Result = styled.div`
//   display: flex;
//   gap: 1rem;
//   align-items: center;
//   margin-bottom: 1.5rem;
// `;

// const ResultTitle = styled.div`
//   font-size: 1rem;
//   font-weight: bold;
// `;

// const Text = styled.span`
//   font-size: 0.9375rem;
//   font-weight: bold;
//   margin-right: 0.5rem; /* 간격 추가 */
// `;

// const Btn = styled.img`
//   height: 13px;
// `;

// const Reviews = styled.div`
//   display: flex;
//   gap: 1rem;
//   border-top: 1px solid ${({ theme }) => theme.colors.g2};
//   border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
//   padding: 1.625rem 0;
// `;

// const HospitalReviews = styled(Reviews)`
//   display: flex;
//   justify-content: space-between; /* 항목 간 간격 추가 */
// `;

// const CommunityResult = styled.div`
//   border-top: 1px solid ${({ theme }) => theme.colors.g2};
//   border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
//   display: flex;
//   margin: 5.25rem 0;
// `;

// const CommunitySummary = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 8px;
//   padding: 1rem;
//   margin-right: 1rem;
// `;

// const ListWrapper = styled.div`
//   flex: 2;
//   border-radius: 8px;
//   padding: 2rem;
//   position: relative;
// `;

// const ListItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem 0.5rem;
//   border-top: 1px solid ${({ theme }) => theme.colors.g2};
//   border-left: none;
//   border-right: none;

//   &:last-child {
//     border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
//   }

//   span:first-child {
//     color: ${({ theme }) => theme.colors.b1};
//   }

//   &.daily span:first-child {
//     color: ${({ theme }) => theme.colors.nv};
//   }
// `;

// const SearchResultsPage = () => {
//   const navigate = useNavigate();

//   const handleSelectHospitalReview = (id) => {
//     navigate(`/hospital-review/${id}?tab=hospital`);
//   };

//   const handleSelectDoctorReview = (id) => {
//     navigate(`/hospital-review/${id}?tab=doctor`);
//   };

//   const communityPosts = [
//     { id: 1, category: '질환 고민', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
//     { id: 2, category: '일상', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
//     { id: 3, category: '수술 후기', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
//     { id: 4, category: '수술 후기', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
//     { id: 5, category: '수술 후기', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
//     { id: 6, category: '질환 고민', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
//   ];

//   return (
//     <Container>
//       <KeyWord>검색 : 멘텀비뇨기과</KeyWord>

//       <CommunityResult>
//         <CommunitySummary>
//           <ResultTitle>커뮤니티 검색 결과 (9)</ResultTitle>
//           <br/>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Text>더보기</Text>
//             <Btn src={seeMore} alt="더보기" />
//           </div>
//         </CommunitySummary>
//         <ListWrapper>
//           {communityPosts.map(post => (
//             <ListItem key={post.id} className={post.category === '일상' ? 'daily' : ''}>
//               <span>{post.category}</span>
//               <span>{post.title}</span>
//             </ListItem>
//           ))}
//         </ListWrapper>
//       </CommunityResult>

//       <SectionWrapper>
//         <Result>
//           <ResultTitle>병원 검색 결과 (3)</ResultTitle>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Text>더보기</Text>
//             <Btn src={seeMore} alt="더보기" />
//           </div>
//         </Result>
//         <HospitalReviews>
//           <HospitalSearchItem onSelect={handleSelectHospitalReview} reviewId={1} />
//           <HospitalSearchItem onSelect={handleSelectHospitalReview} reviewId={2} />
//           <HospitalSearchItem onSelect={handleSelectHospitalReview} reviewId={3} />
//         </HospitalReviews>
//       </SectionWrapper>

//       <SectionWrapper>
//         <Result>
//           <ResultTitle>의사 상담 후기 검색 결과 (3)</ResultTitle>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Text>더보기</Text>
//             <Btn src={seeMore} alt="더보기" />
//           </div>
//         </Result>
//         <Reviews>
//           <DoctorReviewItem onSelect={handleSelectDoctorReview} reviewId={1} />
//           <DoctorReviewItem onSelect={handleSelectDoctorReview} reviewId={2} />
//           <DoctorReviewItem onSelect={handleSelectDoctorReview} reviewId={3} />
//         </Reviews>
//       </SectionWrapper>
//     </Container>
//   );
// };

// export default SearchResultsPage;

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import seeMore from '../assets/see_more.png';
import HospitalSearchItem from '../components/HospitalReview/HospitalSearchItem';
import DoctorReviewItem from '../components/HospitalReview/DoctorReviewItem';

const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const KeyWord = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 auto;
  border-bottom: 3px solid ${({ theme }) => theme.colors.nv};
  width: 52rem;
  text-align: center;
  padding-bottom: 2.5rem;
  margin-top: 5.75rem;
`;

const SectionWrapper = styled.div`
  margin: 5.25rem 0;
`;

const Result = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ResultTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Text = styled.span`
  font-size: 0.9375rem;
  font-weight: bold;
  margin-right: 0.5rem; /* 간격 추가 */
`;

const Btn = styled.img`
  height: 13px;
`;

const Reviews = styled.div`
  display: flex;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  padding: 1.625rem 0;
`;

const HospitalReviews = styled(Reviews)`
  display: flex;
  justify-content: space-between; /* 항목 간 간격 추가 */
`;

const HospitalSearchItemWrapper = styled.div`
  flex: 1;
  border: none; /* 감싸는 div의 border 제거 */
`;

const CommunityResult = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  display: flex;
  margin: 5.25rem 0;
`;

const CommunitySummary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  margin-right: 1rem;
`;

const ListWrapper = styled.div`
  flex: 2;
  border-radius: 8px;
  padding: 2rem;
  position: relative;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.g2};
  border-left: none;
  border-right: none;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.g2};
  }

  span:first-child {
    color: ${({ theme }) => theme.colors.b1};
  }

  &.daily span:first-child {
    color: ${({ theme }) => theme.colors.nv};
  }
`;

const SearchResultsPage = () => {
  const navigate = useNavigate();

  const handleSelectHospitalReview = (id) => {
    navigate(`/hospital-review/${id}?tab=hospital`);
  };

  const handleSelectDoctorReview = (id) => {
    navigate(`/hospital-review/${id}?tab=doctor`);
  };

  const communityPosts = [
    { id: 1, category: '질환 고민', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 2, category: '일상', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 3, category: '수술 후기', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 4, category: '수술 후기', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 5, category: '수술 후기', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 6, category: '질환 고민', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
  ];

  return (
    <Container>
      <KeyWord>검색 : 멘텀비뇨기과</KeyWord>

      <CommunityResult>
        <CommunitySummary>
          <ResultTitle>커뮤니티 검색 결과 (9)</ResultTitle>
          <br/>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text>더보기</Text>
            <Btn src={seeMore} alt="더보기" />
          </div>
        </CommunitySummary>
        <ListWrapper>
          {communityPosts.map(post => (
            <ListItem key={post.id} className={post.category === '일상' ? 'daily' : ''}>
              <span>{post.category}</span>
              <span>{post.title}</span>
            </ListItem>
          ))}
        </ListWrapper>
      </CommunityResult>

      <SectionWrapper>
        <Result>
          <ResultTitle>병원 검색 결과 (3)</ResultTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text>더보기</Text>
            <Btn src={seeMore} alt="더보기" />
          </div>
        </Result>
        <HospitalReviews>
          <HospitalSearchItemWrapper>
            <HospitalSearchItem onSelect={handleSelectHospitalReview} reviewId={1} />
          </HospitalSearchItemWrapper>
          <HospitalSearchItemWrapper>
            <HospitalSearchItem onSelect={handleSelectHospitalReview} reviewId={2} />
          </HospitalSearchItemWrapper>
          <HospitalSearchItemWrapper>
            <HospitalSearchItem onSelect={handleSelectHospitalReview} reviewId={3} />
          </HospitalSearchItemWrapper>
        </HospitalReviews>
      </SectionWrapper>

      <SectionWrapper>
        <Result>
          <ResultTitle>의사 상담 후기 검색 결과 (3)</ResultTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text>더보기</Text>
            <Btn src={seeMore} alt="더보기" />
          </div>
        </Result>
        <Reviews>
          <DoctorReviewItem onSelect={handleSelectDoctorReview} reviewId={1} />
          <DoctorReviewItem onSelect={handleSelectDoctorReview} reviewId={2} />
          <DoctorReviewItem onSelect={handleSelectDoctorReview} reviewId={3} />
        </Reviews>
      </SectionWrapper>
    </Container>
  );
};

export default SearchResultsPage;

