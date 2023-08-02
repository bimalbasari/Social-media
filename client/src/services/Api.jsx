import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.withCredentials = true;

// user api calling
export const authenticationLogin = async (data) => {
  try {
    const userData = await axios.post(`api/user/login`, data);
    return userData;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createAccount = async (data) => {
  try {
    const createUser = await axios.post(`api/user/signup`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return createUser;
  } catch (error) {
    console.log(error);
  }
};

// flatmate api calling

export const addFlat = async (data) => {
  console.log(data);
  try {
    const places = await axios.post("api/flat/add", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(places);
  } catch (error) {
    console.log("userEvents", error);
  }
};

export const fetchAllFlat = async () => {
  try {
    const places = await axios.get("api/flat/get");
    console.log(places);
    return places.data;
  } catch (error) {
    console.log("userEvents", error);
  }
};

// fetch  all post

export const fetchAllEvent = async () => {
  try {
    const allPost = await axios.get(`api/event/home`, {
      withCredentials: true,
    });
    console.log(allPost.data.posts);
    return allPost.data.posts;
  } catch (error) {
    console.log("allPost", error);
  }
};

//Post new event
export const createPost = async (data) => {
  try {
    const post = await axios.post(`api/event/add`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.log("createPost", error);
  }
};

// Like a a post

export const likePost = async (data) => {
  try {
    const like = await axios.post(`api/event/post/like`, data);
    console.log(like);
  } catch (e) {
    console.log(e);
  }
};
// comment in a post

export const getAllLike = async (postId) => {
  try {
    const likesUserDetails = await axios.get(`api/event/likes/:${postId}`);
    // Handle the response data
    console.log("Likes user details:", likesUserDetails);
  } catch (error) {
    // Handle the error
    console.error("Error retrieving likes user details:", error.message);
  }
};

// comment in a post

export const commentPost = async (data) => {
  try {
    const comment = await axios.post(`api/event/post/comment`, data);
    console.log(comment);
  } catch (e) {
    console.log(e);
  }
};
// fetch all comment singal postF
export const getAllcomment = async (postId) => {
  try {
    const likesUserDetails = await axios.get(`api/event/comments/:${postId}`);
    // Handle the response data
    console.log("comment user details:", likesUserDetails);
  } catch (error) {
    // Handle the error
    console.error("Error retrieving comment user details:", error.message);
  }
};
