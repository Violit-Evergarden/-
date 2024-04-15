<template>
  <div id="nfbox">
    <img src="./images/notfound.png" alt="">
    <el-button @click="$router.go(-1)" class="returnBtn" size="large" type="primary">返回上一页</el-button>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';
const {$router} = getCurrentInstance().proxy

</script>

<style lang="scss" scoped>
#nfbox{
  background-color: white;
  user-select: none;
  overflow: hidden;
  height: 100%;
  text-align: center;
  img{
    width: 80%;
  }
  .returnBtn{
    display: block;
    margin: auto;
    margin-top: 70px;
  }
}
</style>