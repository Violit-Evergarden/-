<template>
  <div id="container">
    <div class="left">
      <Menu
        :is-collapse="isCollapse"
        :isAdministrator="isAdministrator"
        @menuChange="menuChange"
      />
    </div>
    <div class="right">
      <Header
        v-model:isCollapse="isCollapse"
        :userinfo="userinfo"
        :breadsArray="breadsArray" 
        v-model:historyPageArray="historyPageArray"
      />
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,computed,getCurrentInstance} from 'vue'
import Header from './Header/Index.vue'
import Menu from './Menu/Index.vue'
import useUserInfoStore from '@/stores/userinfo';
import { storeToRefs } from 'pinia';
import { isEmptyObj } from '@/utils';
import adminRoutes from '@/router/adminRoutes';

const {$router} = getCurrentInstance().proxy
const isCollapse = ref(false)
const store = useUserInfoStore()
const {userinfo} = storeToRefs(store)
const {getUserInfoData} = store
const isAdministrator = computed(()=>userinfo.value.HighestPrivilege)
const breadsArray = ref([])
const historyPageArray = ref(['首页'])

function menuChange(item){
  const breads = item.split('-')
  if(breads[0]!=='首页'){
    breadsArray.value = breads
  }else{
    breadsArray.value = []
  }
  historyPageArray.value.push(breads[breads.length-1])
  historyPageArray.value = Array.from(new Set(historyPageArray.value))
}

async function main(){
  if(isEmptyObj(userinfo.value)){
    await getUserInfoData()
  }
  // if(userinfo.value.HighestPrivilege){
  //   $router.addRoute({
  //     path: '/',
  //     name: 'layout',
  //     component: () => import('./Index.vue'),
  //     children:adminRoutes
  //   })
  // }
}

main()

</script>

<style lang="scss" scoped>
#container{
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  user-select: none;
  .left{}
  .right{
    width: 100%;
    height: 100%;
    .main{
      background-color: rgb(245 245 245);
      height: calc(100% - 130px);
      padding: 16px;
      // overflow: scroll;
      overflow: hidden;
    }
  }
}
</style>