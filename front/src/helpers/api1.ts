import axios from "axios";


const baseUrl = process.env.BACKEND_URL;
export const api = {

    get: async function(url: string){
        return await axios.get(baseUrl + url, {withCredentials: true});
    },
    post: async function(url: string,  values: unknown){
        return await axios.post(baseUrl + url, values,{ withCredentials: true});
    },
    put: async function(url: string,  values: unknown){
        return await axios.put(baseUrl + url, values,{ withCredentials: true});
    },
    delete: async function(url: string){
        return await axios.delete(baseUrl + url,{ withCredentials: true});
    },
}

