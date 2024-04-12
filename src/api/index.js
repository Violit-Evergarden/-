import request from "./request";


export const register = (data)=>request.post('/api/register',data)

export const login = data=>request.post('/api/login',data)

export const getEmployee = () =>request.get('/administrator/getEmployee')

export const addEmployee = data =>request.post('/administrator/addEmployee',data)

export const deleteEmployee = data =>request.post('/administrator/deleteEmployee',data)

export const editEmployee = data =>request.post('/administrator/editEmployee',data)