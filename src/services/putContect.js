import http from "./htttpServices";

export const putContect=(id,data)=>{
 return http.put(`/contacts/${id}` ,data)
}