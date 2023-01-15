import ApiService from "./ApiService";

const { getAsync, postAsync, getLastIdAsync, putAsync } = ApiService;
const endpoint = "/users";

const getAllAsync = async () => {
  const res = await getAsync(endpoint);
  if (res.status > 199 && res.status < 300) {
    return {
      isSuccess: true,
      data: res.data,
    };
  }

  return {
    isSuccess: false,
    message: res.status,
    data: [],
  };
};

const getByIdAsync = async (id) => {
  let res;
  try {
    res = await getAsync(`${endpoint}/${id}`);
  } catch (error) {
    res = error.response;
  }
  if (res.status > 199 && res.status < 300) {
    return {
      isSuccess: true,
      data: res.data,
    };
  }

  return {
    isSuccess: false,
    message: res.status,
    data: {},
  };
};

const getByEmailAsync = async (email) => {
  const res = await getAsync(endpoint);

  return res?.data?.find((user) => user.email === email);
};

const addAsync = async (user) => {
  let lastId = await getLastIdAsync(endpoint);

  user.id = lastId + 1;
  user.roles = ["Member"];
  user.createdDate = new Date();

  const res = await postAsync(endpoint, user);
  if (res.status > 199 && res.status < 300) {
    return res.data;
  }

  return {}; //TODO: Dönüş verisini düzelt
};

const addToRoleAsync = async (id, roles) => {
  try {
    const res = await getAsync(`${endpoint}/${id}`);
    if (res.status < 200 && res.status > 299) {
      return {
        isSuccess: false,
        message: res.status,
      };
    }

    const user = res.data;
    user.roles = roles;

    const putResponse = await putAsync(`${endpoint}/${id}`, user);
    if (putResponse.status < 200 && putResponse.status > 299) {
      return {
        isSuccess: false,
        message: putResponse.status,
      };
    }

    return {
      isSuccess: true,
      data: user,
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: error.response.status,
    };
  }
};

const UserService = {
  getAllAsync,
  getByEmailAsync,
  addAsync,
  getByIdAsync,
  addToRoleAsync,
};

export default UserService;
