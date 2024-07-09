// authService.js
import axiosClient from "../configs/axiosClient";

const feedService = {
    createPost: (data) => {
        return axiosClient.post("/posts", data);
    },
};

export default feedService;
