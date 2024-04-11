import axios from 'axios'
import baseInfo from './config'


const request = axios.create(baseInfo)

request.interceptors.request.use(config=>{
  const token = localStorage.getItem('token')
  if(token) config.headers.Authorization = token
  return config
})

request.interceptors.response.use(res=>{
  return res.data
},err=>{
  return Promise.reject(new Error(err))
})

export default request