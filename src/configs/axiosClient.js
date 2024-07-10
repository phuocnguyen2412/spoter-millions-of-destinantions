import axios from "axios";
import queryString from "query-string";
import { API_URL } from "@env";
import { getDataFromStorage } from "../helpers/storage";

const axiosClient = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        "content-type": "application/json",
    },
});

axiosClient.interceptors.request.use(async (config) => {
    config.headers["Authorization"] = getDataFromStorage("account").accessToken;

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
