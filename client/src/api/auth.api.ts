import { ENDPOINTS } from "@/services/endpoints";
import http from "@/services/http";



export const register = async (data: any) => {
    try {
        const response = await http.post(ENDPOINTS.AUTH.REGISTER, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}



export const login = async(data: any) => {
    try {
        const response = await http.post(ENDPOINTS.AUTH.LOGIN, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}



export const getMe = async() => {
    try {
        const response = await http.get(ENDPOINTS.AUTH.ME);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}