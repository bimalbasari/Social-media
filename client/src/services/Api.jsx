import axios from "axios";

const URL = `http://localhost:3000`;

// user api calling
export const authenticationLogin = async (data) => {
    try {
        const userData = await axios.post(`${URL}/api/user/login`, data);
        console.log(userData)
        document.cookies = `token=${userData.data.token}`
        return userData
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const createAccount = async (data) => {
    try {
        const createUser = await axios.post(`${URL}/api/user/signup`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }

        );
        return createUser
    } catch (error) {
        console.log(error)
    }

}

// flatmate api calling
export const addFlat = async (data, config) => {

    const { pictures } = data;
    console.log(data)


    try {
        const flatAdded = await axios.post(`${URL}/api/user/newflatmate`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: config
            },
        });
        console.log(flatAdded)
    } catch (error) {
        console.log("userEvents", error)

    }
}

// Social api calling

export const createPost = async (data, config) => {
    try {
        const post = await axios.post(`${URL}/api/user/post`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: config
            },
        });
        console.log(post)
    } catch (error) {
        console.log("createPost", error)

    }
}

export const fetchPost = async (config) => {
    try {
        const allPost = await axios.get(`${URL}/api/user/social`, {
            headers: {
                authorization: config
            },
        });
        // console.log(allPost.data)
        return allPost.data
    } catch (error) {
        console.log("allPost", error)

    }
}
export const commentPost = async (data, config) => {
    console.log(data)
    try {
        const comment = await axios.post(`${URL}/api/user/post/comment`, data, {
            headers: {
                authorization: config
            }
        })
        console.log(comment)
    } catch (e) {
        console.log(e)
    }

}
export const likePost = async (data, config) => {
    console.log(data)
    try {
        const like = await axios.post(`${URL}/api/user/post/like`, data, {
            headers: {
                authorization: config
            }
        })
        console.log(like)
    } catch (e) {
        console.log(e)
    }

}
export const getAllcomment = async (postId, config) => {
    console.log(postId, config)
    try {
        const likesUserDetails = await axios.get(`${URL}/api/user/post/comment/${postId}`, {
            headers: {
                Authorization: config,
            },
        })
        // Handle the response data
        console.log('comment user details:', likesUserDetails);
    } catch (error) {
        // Handle the error
        console.error('Error retrieving comment user details:', error.message);
    };
}
export const getAllLike = async (postId, config) => {
    console.log(postId, config)
    try {
        const likesUserDetails = await axios.get(`${URL}/api/user/post/like/${postId}`, {
            headers: {
                Authorization: config,
            },
        })
        // Handle the response data
        console.log('Likes user details:', likesUserDetails);
    } catch (error) {
        // Handle the error
        console.error('Error retrieving likes user details:', error.message);
    };
}