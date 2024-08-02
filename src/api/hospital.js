import axios from "axios";

const url = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

//메인 페이지 의사 상담 후기 목록 & 검색
export const getDoctorReviewList = async (keyword) => {
  try {
    const params = {};
    if (keyword) {
      params.keyword = keyword;
    }
    const response = await instance.get("/total-reviews/doctors", { params });
    return response.data;
  } catch (error) {
    console.log("의사 상담 후기 가져오기 실패", error);
    throw error;
  }
};

//메인 페이지 병원별 후기 목록
export const getHospitalReviewList = async () => {
  try {
    const response = await instance.get("/total-reviews/hospitals");
    return response.data;
  } catch (error) {
    console.log("병원별 후기 가져오기 실패", error);
    throw error;
  }
};

//병원명 또는 지역 검색
export const getSearchHospitalReviews = async (keyword) => {
  try {
    const params = {};
    if (keyword) {
      params.keyword = keyword;
    }
    const response = await instance.get("/hospital-search/hospitals", {
      params,
    });
    return response.data;
  } catch (error) {
    console.log("병원 검색 결과 가져오기 실패", error);
    throw error;
  }
};

//병원 정보 가져오기
export const getHospitalInfo = async (hospitalId) => {
  try {
    const response = await instance.get(`/hospital-reviews/${hospitalId}`);
    return response.data;
  } catch (error) {
    console.log("병원 정보 가져오기 실패", error);
    throw error;
  }
};

//의사 상담 후기 글 작성
export const postDoctorReview = async (content) => {
  try {
    const response = await instance.post(
      "/hospital-reviews/doctor-reviews",
      content
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//의사 상담 후기 글 상세조회
export const getDetailDoctorReview = async (postId) => {
  try {
    const response = await instance.get(
      `/hospital-reviews/doctor-reviews/${postId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//의사 찾기
export const getDoctorByHospital = async (hospitalId) => {
  try {
    const response = await instance.get(`/hospitals/${hospitalId}/doctors`);
    return response.data;
  } catch (error) {
    console.log("의사 찾기 실패", error);
  }
};

//의사 상담 후기 글 목록 조회(병원 정보와 함께 떠 있는 목록)
export const getDoctorReviewByHospital = async (
  hospitalId,
  page = 0,
  doctorId
) => {
  try {
    const response = await instance.get(
      `/hospital-reviews/${hospitalId}/doctor-reviews/${doctorId}`,
      {
        params: { page },
      }
    );
    return response.data;
  } catch (error) {
    console.log("의사 리뷰 가져오기 실패", error);
    throw error;
  }
};

//병원별 후기 글 작성
export const postHospitalReview = async (content) => {
  try {
    const response = await instance.post(
      "/hospital-reviews/by-hospital-reviews",
      content
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//병원별 후기 글 상세조회
export const getDetailHospitalReview = async (postId) => {
  try {
    const response = await instance.get(
      `/hospital-reviews/by-hospital-reviews/${postId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//병원별 후기 글 목록 조회(병원 정보와 함께 떠 있는 그 부분)
export const getHospitalReviewByHospital = async (hospitalId, page = 0) => {
  try {
    const response = await instance.get(
      `/hospital-reviews/${hospitalId}/by-hospital-reviews`,
      {
        params: { page },
      }
    );
    return response.data;
  } catch (error) {
    console.log("병원 리뷰 가져오기 실패", error);
    throw error;
  }
};

//전문의 상담 글 작성
export const postCounsel = async (content) => {
  try {
    const response = await instance.post("/consultings", content);
    return response.data.postId;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// //좋아요 버튼
// export const patchLike = async (postId) => {
//   try {
//     const response = await instance.patch(`/posts/${postId}/like`);
//     return response;
//   } catch (error) {
//     console.log("좋아요 버튼 에러", error);
//     throw error;
//   }
// };

// //싫어요 버튼
// export const patchDisLike = async (postId) => {
//   try {
//     const response = await instance.patch(`/posts/${postId}/dislike`);
//     return response;
//   } catch (error) {
//     console.log("싫어요 버튼 에러", error);
//   }
// };

//좋실 수정
// 좋아요 버튼
export const patchLike = async (postId, postType) => {
  try {
    console.log("좋아요 요청:", { postType });
    const response = await instance.patch(`/posts/${postId}/like`, {
      postType,
    });
    return response;
  } catch (error) {
    console.log("좋아요 버튼 에러", error);
    throw error;
  }
};

// 싫어요 버튼
export const patchDisLike = async (postId, postType) => {
  try {
    console.log("싫어요 요청:", { postType });
    const response = await instance.patch(`/posts/${postId}/dislike`, {
      postType,
    });
    return response;
  } catch (error) {
    console.log("싫어요 버튼 에러", error);
    throw error;
  }
};
