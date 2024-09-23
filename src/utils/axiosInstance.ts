import axios from "axios";
import { HOST_API_KEY } from "./globalConfig";

const axisInstance = axios.create({ baseURL:HOST_API_KEY});

axisInstance.interceptors.response.use(
    (response)=>response,
    (error)=>Promise.reject((error.response && error.response) || "General Axios Error Happend")
);

export default axisInstance;