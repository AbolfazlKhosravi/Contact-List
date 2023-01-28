
import http from "./htttpServices";

export const getAllContects=()=>{
    return http.get('/contacts');
}