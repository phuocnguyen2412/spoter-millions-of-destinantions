// authService.js
import axiosClient from "../configs/axiosClient";

const attractionService = {
    getAllAttractions: async (offset, limit) =>
        axiosClient.get("/attractions", {
            params: { offset, limit },
        }),
    getPostsOfAttraction: async (offset, limit, attractionId) => {
        return axiosClient.get("/posts", {
            params: { offset, limit, attractionId },
        });
    },
};

export default attractionService;
