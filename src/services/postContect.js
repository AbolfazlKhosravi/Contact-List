import http from "./htttpServices";

export default function postContect(data) {
return  http.post("/contacts",data)
}