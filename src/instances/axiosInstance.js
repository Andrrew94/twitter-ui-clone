import axios from 'axios';

const mainAxios = axios.create({
  baseURL: "https://twitter-clone-be.herokuapp.com",
})

const BASE_URL = "https://twitter-clone-be.herokuapp.com";

export {mainAxios, BASE_URL}