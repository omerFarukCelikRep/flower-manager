
const axios = require("axios");
const api = process.env.API_URL;

const getAsync = (endpoint) => axios.get(`${api}${endpoint}`);

const postAsync = (endpoint, data) => {
  data.createdDate = new Date();
  return axios.post(`${api}${endpoint}`, data);
};

const putAsync = (endpoint, data) => {
  data.updatedDate = new Date();
  return axios.put(`${api}${endpoint}`, data);
};

const deleteAsync = (endpoint, id) => axios.delete(`${api}${endpoint}/${id}`);

const ApiService = { getAsync, postAsync, putAsync, deleteAsync };

export default ApiService;
