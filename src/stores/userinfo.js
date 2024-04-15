import { defineStore } from "pinia";
import {ref} from 'vue'
import { getUserInfo } from "@/api";

const useUserInfoStore = defineStore('userinfo',()=>{
  const userinfo = ref({})

  async function getUserInfoData(){
    const result = await getUserInfo()
    if(result.status===0){
      userinfo.value = result.data
    }
  }

  return {userinfo,getUserInfoData}
})



export default useUserInfoStore