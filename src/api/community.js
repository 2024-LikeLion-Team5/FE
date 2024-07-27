import axios from "axios";

const instance = axios.create({
  baseURL: "http://122.39.34.214:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

//질환고민 글 작성
export const postDisease = async (content) => {
  try {
    const response = await instance.post("/communities/concerns", content);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      alert(error.response.data.message);
    }
    console.log(error);
    throw error;
  }
};

//질환고민 글 상세조회
export const getDiseasePostId = async (postId) => {
  try {
    const response = await instance.get(`/communities/concerns/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//질환고민 글 목록조회
export const getDiseasePosts = async () => {
  try {
    const response = await instance.get(
      "/communities/concerns?disease=impotence&page=0"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//질환 목록 (발기부전, 조루/지루 등) 써도 안 써도 그만일 수도,..?
export const getDiseases = async () => {
  try {
    const response = await instance.get("/diseases");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

//이런 식으로 하시면 됩니다
//get, post, delete, put에 맞춰서 쓰면 되는데, post,delete의 경우엔 파라터를 보내야 해서
//위에 처럼 구현이 되구요.
//GET의 경우에도 id를 사용하는 경우엔 id를 받와서 url에 넣어주면 됩니다~!
