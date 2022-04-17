import axios from "axios";
import { User } from "../types/User"

const URL = "http://localhost:7000/"

const api = axios.create(
    {
        baseURL: URL,
    }); 


export const singUpAPI = async (user: User) => {
    const response = await api.post("/auth/signup", user);
    return response.data;

}

export const signInAPI = async (email:string, password:string) => {
    const response = await api.post("/auth/login", {email, password});
    return response.data;
} 

