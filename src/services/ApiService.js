import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

const getAsync = (endpoint) => instance.get(endpoint);

const postAsync = (endpoint, data) => {
  data.createdDate = new Date();

  return instance.post(endpoint, data);
};

const putAsync = (endpoint, data) => {
  data.updatedDate = new Date();

  return instance.put(endpoint, data);
};

const deleteAsync = (endpoint, id) => instance.delete(`${endpoint}/${id}`);

const ApiService = { getAsync, postAsync, putAsync, deleteAsync };

export default ApiService;
