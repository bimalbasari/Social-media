import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.withCredentials = true;


// user api calling
export const authenticationLogin = async (data) => {
    try {
        const userData = await axios.post(`api/user/login`, data);
        console.log(userData)
        document.cookies = `token=${userData.data.token}`
        return userData
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const createAccount = async (data) => {
    try {
        const createUser = await axios.post(`api/user/signup`, data, {
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
        const flatAdded = await axios.post(`api/user/newflatmate`, data, {
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
        const post = await axios.post(`api/user/post`, data, {
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
        const allPost = await axios.get(`api/user/social`, {
            headers: {
                authorization: config
            },
        });
        console.log(allPost.data.posts)
        return allPost.data.posts
    } catch (error) {
        console.log("allPost", error)

    }
}

export const commentPost = async (data, config) => {
    console.log(data)
    try {
        const comment = await axios.post(`api/user/post/comment`, data, {
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
        const like = await axios.post(`api/user/post/like`, data, {
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
        const likesUserDetails = await axios.get(`api/user/post/comment/${postId}`, {
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
        const likesUserDetails = await axios.get(`api/user/post/like/${postId}`, {
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