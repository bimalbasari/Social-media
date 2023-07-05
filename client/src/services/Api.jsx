import axios from "axios";

const URL = `http://localhost:3000`;

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

export const userEvents = async (data, config) => {
    try {
        const userData = await axios.post(`${URL}/api/user/newflatmate`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: config
            },
        });
        // document.cookies = `token=${userData.data.token}`
        // return userData
    } catch (error) {
        console.log("userEvents", error)

    }
}

export const createPost = async (data, config) => {
    console.log(data)
    try {
         await axios.post(`${URL}/api/user/createevent`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                authorization: config
            },
        });
    } catch (error) {
        console.log("createPost", error)

    }
}