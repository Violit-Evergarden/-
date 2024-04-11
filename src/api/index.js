import request from "./request";


export const register = (data)=>request.post('/api/register',data)

export const login = data=>request.post('/api/login',data)