import http from "./htttpServices";

export const deleteContect=(id)=>{
 return  http.delete(`/contacts/${id}` )
}