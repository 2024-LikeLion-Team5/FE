import axios from "axios";

const instance = axios.create({
  baseURL: "http://122.39.34.214:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

// 질환고민 글 작성
export const postDisease = async (data) => {
  try {
    const response = await instance.post("/communities/concerns", data);
    console.log('Post Response:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      alert(error.response.data.message);
    }
    console.log(error);
    throw error;
  }
};

// 질환고민 글 상세조회
export const getDiseasePostId = async (postId) => {
  try {
    const response = await instance.get(`/communities/concerns/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


// 질환고민 글 목록조회
export const getDiseasePosts = async (disease, page) => {
  try {
    const response = await instance.get(
      `/communities/concerns?disease=${disease.toUpperCase()}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 질환 목록 (발기부전, 조루/지루 등)
export const getDiseases = async () => {
  try {
    const response = await instance.get("/diseases");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 수술 후기 글 작성
export const postSurgery = async (data) => {
  try {
    const response = await instance.post("/communities/surgery-reviews", data);
    console.log('Post Response:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      alert(error.response.data.message);
    }
    console.log(error);
    throw error;
  }
};

// 수술 후기 글 상세 조회
export const getSurgeryPostId = async (postId) => {
  try {
    const response = await instance.get(`/communities/surgery-reviews/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 수술 후기 글 목록 조회
export const getSurgeryPosts = async (disease = "IMPOTENCE", page = 0) => {
  try {
    const response = await instance.get(`/communities/surgery-reviews`, {
      params: { disease, page } // disease와 page 파라미터를 포함하여 요청
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 일상 글 작성
export const postDaily = async (data) => {
  try {
    const response = await instance.post("/communities/dailies", data);
    console.log('Post Response:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      alert(error.response.data.message);
    }
    console.log(error);
    throw error;
  }
};


// 일상 글 상세조회
export const getDailyPostId = async (postId) => {
  try {
    const response = await instance.get(`/communities/dailies/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//  일상 글 목록조회
export const getDailyPosts = async (page = 0) => {
  try {
    const response = await instance.get(`/communities/dailies?page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 커뮤니티 전체 조회(질환고민)
export const getTotalDiseaseCommunities = async () => {
  try {
    const response = await instance.get("/total-communities/concerns");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 커뮤니티 전체 조회(일상)
export const getTotalDailyCommunities = async () => {
  try {
    const response = await instance.get("/total-communities/dailies");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// 커뮤니티 전체 조회(수술후기)
export const getTotalSurgeryCommunities = async () => {
  try {
    const response = await instance.get("/total-communities/surgery-reviews");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


// 커뮤니티 통합검색 - 6개 넘겨주기
export const getCommunityIntegration = async (keyword) => {
  try {
    const response = await instance.get(`/communities/integration?keyword=${keyword}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 커뮤니티 통합검색 목록 조회
export const getCommunityIntegrationList = async (keyword) => {
  try {
    const response = await instance.get(`/communities/integration?keyword=${keyword}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 의사 후기 통합검색 - 3개 넘겨주기
export const getDoctorReviewIntegration = async (keyword) => {
  try {
    const response = await instance.get(`/doctor-reviews/integration?keyword=${keyword}`); // URL 수정
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 의사 후기 통합검색 목록 조회
export const getDoctorReviewIntegrationList = async (keyword) => {
  try {
    const response = await instance.get(`/communities/integration?keyword=${keyword}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 병원 통합검색 - 3개 넘겨주기
export const getHospitalIntegration = async (keyword) => {
  try {
    const response = await instance.get(`/hospitals/integration?keyword=${keyword}`); // URL 수정
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 병원 통합검색 목록 조회
export const getHospitalIntegrationList = async (keyword) => {
  try {
    const response = await instance.get(`/communities/integration?keyword=${keyword}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 특정 게시글 댓글 목록 조회
export const getComments = async (postId, communityType) => {
  try {
    const response = await instance.get(`/posts/${postId}/comments`, {
      params: { communityType }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 특정 게시글 댓글 작성
export const postComment = async (postId, data) => {
  try {
    const response = await instance.post(`/posts/${postId}/comments`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};