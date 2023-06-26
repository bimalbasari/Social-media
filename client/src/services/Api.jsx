import axios from "axios";

const URL = `http://localhost:3000`;

export const authenticationLogin = async (data) => {
    try {
        const userData = await axios.post(`${URL}/api/user/login`, data);
        document.cookies = `token=${userData.data.token}`
        return userData
    } catch (error) {
        return error.response.data.message
    }
}


export const listing = async (data) => {
    try {
        console.log("front end ", data)
        const userData = await axios.post(`${URL}/api/user/listings`, data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        document.cookies = `token=${userData.data.token}`
        return userData
    } catch (error) {
        console.log("fontend",error)

    }
}