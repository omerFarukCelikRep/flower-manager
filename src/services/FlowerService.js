import ApiService from "./ApiService";

const { postAsync, getLastIdAsync, getAsync, putAsync, deleteAsync } =
  ApiService;
const endpoint = "/flowers";

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

const addAsync = async (flower) => {
  let lastId = await getLastIdAsync(endpoint);

  flower.id = lastId + 1;
  flower.createdDate = new Date();

  const res = await postAsync(endpoint, flower);
  if (res.status > 199 && res.status < 300) {
    return {
      isSuccess: true,
      message: res.statusText,
      data: res.data,
    };
  }

  return {
    isSuccess: false,
    message: res.statusText,
    data: {},
  };
};

const updateAsync = async (flower) => {
  try {
    const res = await getAsync(`${endpoint}/${flower.id}`);
    if (res.status < 200 && res.status > 299) {
      return {
        isSuccess: false,
        message: res.status,
      };
    }

    let foundFlower = res.data;
    foundFlower = { ...flower };
    foundFlower.modifiedDate = new Date();

    const putResponse = await putAsync(
      `${endpoint}/${foundFlower.id}`,
      foundFlower
    );
    if (putResponse.status < 200 && putResponse.status > 299) {
      return {
        isSuccess: false,
        message: putResponse.status,
      };
    }

    return {
      isSuccess: true,
      data: putResponse.data,
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: error.response.status,
    };
  }
};

const deleteFlowerAsync = async (id) => {
  try {
    const res = await deleteAsync(endpoint, id);
    if (res.status < 200 && res.status > 299) {
      return {
        isSuccess: false,
        message: res.status,
      };
    }

    return {
      isSuccess: true,
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: error.response.status,
    };
  }
};

const FlowerService = {
  addAsync,
  getAllAsync,
  getByIdAsync,
  updateAsync,
  deleteAsync: deleteFlowerAsync,
};

export default FlowerService;
