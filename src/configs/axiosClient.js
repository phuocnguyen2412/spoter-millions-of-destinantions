import axios from "axios";
import { API_URL } from "@env";
import { getDataFromStorage } from "../helpers/storage";

const axiosClient = axios.create({
    baseURL: "https://wm8bvp79-3000.asse.devtunnels.ms/api/v1",
    headers: {
        "content-type": "application/json",
    },
});

axiosClient.interceptors.request.use(
    async (config) => {
        const accessToken = await getDataFromStorage("account");
        if (accessToken && accessToken.accessToken) {
            config.headers["Authorization"] =
                "Bearer " + accessToken.accessToken;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        console.log(error);
        if (error.response) {
            console.error("API error:", error.response.data);
            throw error.response.data;
        } else {
            console.error("API error:", error.message);
            throw error.message;
        }
    }
);

export default axiosClient;
