import axios from "axios";

const instance = axios.create({
  baseURL: "http://122.39.34.214:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

//메인 페이지 의사 상담 후기 목록
export const getDoctorReviewList = async () => {
  try {
    const response = await instance.get("/total-reviews/doctors");
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

//병원별 후기 검색

//의사 상담 후기 검색

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
    return response.data.postId;
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

//의사 상담 후기 글 목록 조회(메인 or 검색 페이지에서 누르고 들어갔을 때의 목록)
export const getDoctorReviewByHospital = async (hospitalId, doctorId) => {
  try {
    const response = await instance.get(
      `/hospital-reviews/${hospitalId}/doctor-reviews/${doctorId}?page=0`
    );
    return response.data;
  } catch (error) {
    console.log(error);
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
    return response.data.postId;
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

//병원별 후기 글 목록 조회(메인 or 검색 페이지에서 누르고 들어갔을 때의 목록)
export const getHospitalReviewByHospital = async (hospitalId) => {
  try {
    const response = await instance.get(
      `/hospital-reviews/${hospitalId}/by-hospital-reviews/?page=0`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//전문의 상담 글 작성
export const postCounsel = async (content) => {
  try {
    const response = await instance.post("/consultings", content);
    return response.data.postId;
  } catch (error) {
    console.log(error);
  }
};
