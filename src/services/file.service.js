// authService.js
import axiosClient from "../configs/axiosClient";

const fileService = {
    uploadFile: (data) => {
        return axiosClient.post("/upload", data);
    },
};

export default fileService;
