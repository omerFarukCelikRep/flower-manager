import Env from "../env/env";

const axios = require("axios");

const getAsync = (endpoint) => {
  return axios.get(`${Env.api}${endpoint}`);
};

const postAsync = (endpoint, data) => {
  data.createdDate = new Date();
  return axios.post(`${Env.api}${endpoint}`, data);
};

const putAsync = (endpoint, data) => {
  data.updatedDate = new Date();
  return axios.put(`${Env.api}${endpoint}`, data);
};

const deleteAsync = (endpoint, id) => {
  return axios.delete(`${Env.api}${endpoint}/${id}`);
};

const ApiService = { getAsync, postAsync, putAsync, deleteAsync };

export default ApiService;
