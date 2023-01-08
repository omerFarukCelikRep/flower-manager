import ApiService from "./ApiService";

const { getAsync, postAsync, getLastIdAsync } = ApiService;
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
  const res = await getAsync(`${endpoint}/${id}`);
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
  user.createdDate = new Date();

  const res = await postAsync(endpoint, user);
  if (res.status > 199 && res.status < 300) {
    return res.data;
  }

  return {}; //TODO: Dönüş verisini düzelt
};

const UserService = {
  getAllAsync,
  getByEmailAsync,
  addAsync,
  getByIdAsync,
};

export default UserService;
