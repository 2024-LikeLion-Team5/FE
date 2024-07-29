// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://122.39.34.214:8080",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // 질환고민 글 작성
// export const postDisease = async (data) => {
//   try {
//     const response = await instance.post("/communities/concerns", data);
//     return response;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       alert(error.response.data.message);
//     }
//     console.log(error);
//     throw error;
//   }
// };

// // 질환고민 글 상세조회
// export const getDiseasePostId = async (postId) => {
//   try {
//     const response = await instance.get(`/communities/concerns/${postId}`);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// // 질환고민 글 목록조회
// export const getDiseasePosts = async () => {
//   try {
//     const response = await instance.get(
//       "/communities/concerns?disease=IMPOTENCE&page=0"
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// // 질환 목록 (발기부전, 조루/지루 등) 써도 안 써도 그만일 수도,..?
// export const getDiseases = async () => {
//   try {
//     const response = await instance.get("/diseases");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// // 커뮤니티 전체 조회(질환고민)
// export const getCommunityPosts = async () => {
//   try {
//     const response = await instance.get("/communities");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://122.39.34.214:8080",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // 질환고민 글 작성
// export const postDisease = async (data) => {
//   try {
//     const response = await instance.post("/communities/concerns", data);
//     console.log('Post Response:', response.data); // 응답 데이터 확인
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       alert(error.response.data.message);
//     }
//     console.log(error);
//     throw error;
//   }
// };

// // 질환고민 글 상세조회
// export const getDiseasePostId = async (postId) => {
//   try {
//     const response = await instance.get(`/communities/concerns/${postId}`);
//     console.log('Get Response:', response); // 응답 객체 전체를 확인
//     console.log('Get Response Data:', response.data); // 응답 데이터 확인
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };



// // 질환고민 글 목록조회
// export const getDiseasePosts = async () => {
//   try {
//     const response = await instance.get(
//       "/communities/concerns?disease=IMPOTENCE&page=0"
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// // 질환 목록 (발기부전, 조루/지루 등) 써도 안 써도 그만일 수도,..?
// export const getDiseases = async () => {
//   try {
//     const response = await instance.get("/diseases");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// // 커뮤니티 전체 조회(질환고민)
// export const getCommunityPosts = async () => {
//   try {
//     const response = await instance.get("/communities");
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

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
    return response.data; // 응답 데이터를 반환
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
export const getDiseasePosts = async () => {
  try {
    const response = await instance.get(
      "/communities/concerns?disease=IMPOTENCE&page=0"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 질환 목록 (발기부전, 조루/지루 등) 써도 안 써도 그만일 수도,..?
export const getDiseases = async () => {
  try {
    const response = await instance.get("/diseases");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 커뮤니티 전체 조회(질환고민)
export const getCommunityPosts = async () => {
  try {
    const response = await instance.get("/communities");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
