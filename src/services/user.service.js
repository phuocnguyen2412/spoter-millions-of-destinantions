// authService.js
import axiosClient from "../configs/axiosClient";

const userService = {
    getMyInfo: () => {
        return axiosClient.get("/users/me");
    },
};

export default userService;
