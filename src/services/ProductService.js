import ApiService from "./ApiService";

const { postAsync, getLastIdAsync } = ApiService;
const endpoint = "/flowers";

const addAsync = async (flower) => {
    console.log(flower);
  let lastId = await getLastIdAsync(endpoint);

  flower.id = lastId + 1;
  flower.createdDate = new Date();

  const restart = await postAsync(endpoint, flower);
  if (restart.status > 199 && restart.status < 300) {
    return restart.data;
  }

  return {}; //TODO: Dönüş verisini düzelt
};

const UserService = {
  addAsync
};

export default UserService;