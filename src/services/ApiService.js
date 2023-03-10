import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

const getAsync = (endpoint) => instance.get(endpoint);

const postAsync = (endpoint, data) => instance.post(endpoint, data);

const putAsync = (endpoint, data) => instance.put(endpoint, data);

const deleteAsync = (endpoint, id) => instance.delete(`${endpoint}/${id}`);

const getLastIdAsync = async (endpoint) => {
  const res = await getAsync(endpoint);
  return res.data[res.data.length - 1].id;
};

const ApiService = {
  getAsync,
  postAsync,
  putAsync,
  deleteAsync,
  getLastIdAsync,
};

export default ApiService;
