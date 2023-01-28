
import http from "./htttpServices";

export const getOneContect=(id)=>{
    return http.get(`/contacts/${id}`);
}