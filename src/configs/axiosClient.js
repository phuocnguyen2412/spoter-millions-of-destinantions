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
    config.headers["Authorization"] =
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5ndXllbjEyMyIsInN1YiI6MTQsInJvbGVzIjpbIlVTRVIiXSwiaWF0IjoxNzIwNDU5NDU5LCJleHAiOjE3MjA0NjMwNTl9.GJcjA6d6u2ggi_vIZMbY09ooZN5TECqi0_EH8cdrqnKqUtuM0s2nVr6Mm8kY6xrcbAwb71wj-OQQs1YKLd4NElGD8NXS4Y4EEBJ0Cv9_w3CFOtu4idj_q-RAjoogk-bYLKqAy5bgUPuju2fT87CEHQWzvhXrtfThczpVbEKnOEoJtBYDkJMJE-ufNqYHNFZ0Hv4op15kYq1cPzLXmVdPfnB1RcqTzuZE40pq7u7i8RmaXN9yuqbHfWGT0t4gS-Przs3P0Egt8pT-FL_6uRHyLvJMXjTjmgWyHG2YzO64HALGaVaA2pbr8flaHImIe7W8H8MuGWcI4v1jhE8UzOIphg";
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
