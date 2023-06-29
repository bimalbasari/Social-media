import axios from "axios";

const URL = `http://localhost:3000`;

export const authenticationLogin = async (data) => {
    try {
        const userData = await axios.post(`${URL}/api/user/login`, data);
        document.cookies = `token=${userData.data.token}`
        return userData
    } catch (error) {
        throw new Error(error.response.data.message)
    }
}

export const createAccount = async (data) => {
    console.log(data, "dataApi")
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
export const listing = async (data, config) => {
    try {
        console.log("front end ", data)
        const userData = await axios.post(`${URL}/api/user/listings`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                config
            },
        });
        document.cookies = `token=${userData.data.token}`
        return userData
    } catch (error) {
        console.log("LIstining", error)

    }
}

