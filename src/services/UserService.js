import ApiService from "./ApiService";

const { getAsync, postAsync, getLastIdAsync } = ApiService;
const endpoint = "/users";

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
  getByEmailAsync,
  addAsync,
};

export default UserService;
