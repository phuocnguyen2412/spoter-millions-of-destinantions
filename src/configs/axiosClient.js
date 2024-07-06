// axiosClient.js
import axios from "axios";
import queryString from "query-string";
import { API_URL } from "@env";

const axiosClient = axios.create({
    baseURL: "http://10.0.2.2:3000/api/v1",
    headers: {
        "content-type": "application/json",
    },
});

axiosClient.interceptors.request.use(async (config) => {
    console.log(config.data);
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        console.log(response);
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error.message;
    }
);

export default axiosClient;
