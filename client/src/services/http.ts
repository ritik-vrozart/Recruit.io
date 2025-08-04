import axios from "axios";

const apiUrl = "http://localhost:8000";


const http = axios.create({
    baseURL: apiUrl,
});

http.interceptors.request.use((req) => {
    req.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`)
    return req
})

export default http;
