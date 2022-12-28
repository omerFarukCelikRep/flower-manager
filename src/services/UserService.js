import ApiService from "./ApiService";

const { getAsync } = ApiService;

const getByEmail = async email => {
    const res = await getAsync("users");

    return res.data.find(user => user.email === email); 
}

const UserService = {
    getByEmail
}

export default UserService;