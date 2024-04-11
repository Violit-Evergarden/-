<template>
  <div id="container">
    <div class="left">
      <Menu :is-collapse="isCollapse" />
    </div>
    <div class="right">
      <Header v-model:isCollapse="isCollapse" />
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,watch} from 'vue'
import Header from './Header/Index.vue'
import Menu from './Menu/Index.vue'

const isCollapse = ref(false)


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
      height: 100%;
      padding: 16px;
    }
  }
}
</style>