import axios from "axios";

export const API_KEY = "6e4112b6aebb269d61baeb14171b9714";
const instance = axios.create({
   baseURL: "https://api.themoviedb.org/3",
});

export default instance;
