import axios from 'axios';

const mainAxios = axios.create({
  baseURL: "https://twitter-clone-be.herokuapp.com",
})

export default mainAxios