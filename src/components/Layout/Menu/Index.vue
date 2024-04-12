<template>
  <div class="menu-box">
    <div class="logobox">
      <img src="./images/logo.svg" alt="">
      <span :class="{'title-collapse':isCollapse}">PureAdmin</span>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color="#606266"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="$router.push('/home')">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          <span class="menu-title">首页</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span class="menu-title">系统管理</span>
        </template>
        <el-menu-item class="menu-title" index="2-1" @click="$router.push('/employeeManagement')">员工管理</el-menu-item>
        <el-menu-item class="menu-title" index="2-2">角色管理</el-menu-item>
        <el-menu-item class="menu-title" index="2-3">岗位管理</el-menu-item>
        
      </el-sub-menu>
      
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <template #title>
          <span class="menu-title">员工基本数据</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><setting /></el-icon>
          <span class="menu-title">员工能力画像</span>
        </template>
        <el-menu-item class="menu-title" index="4-1">技能分析</el-menu-item>
        <el-menu-item class="menu-title" index="4-2">绩效评估</el-menu-item>
        <el-menu-item class="menu-title" index="4-3">成长轨迹</el-menu-item>
        <el-menu-item class="menu-title" index="4-4">潜力评估</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="5">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          <span class="menu-title">个人分析</span>
        </template>
      </el-menu-item>
      <el-menu-item index="6" @click="toMyCenter">
        <el-icon><user /></el-icon>
        <template #title>
          <span class="menu-title">个人中心</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref,getCurrentInstance } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  User
} from '@element-plus/icons-vue'

const {$router} = getCurrentInstance().proxy
const props = defineProps({isCollapse:Boolean})
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath)
}

function handleSelect(idx,idxPath,item){
  console.log(idx,idxPath,item)
}

function toMyCenter(){
  $router.push('/personalCenter')
}

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: calc(100vh - 56px);
}
.menu-title{
  font-size: 14px;
}

.title-collapse{
  width: 0px;
}
.menu-box{
  .logobox{
    display: flex;
    align-items: center;
    height: 56px;
    border-right: 1px solid #dcdfe6;
    overflow: hidden;
    img{
      width: 32px;
      height: 32px;
      margin-left: 16px;
    }
    span{
      font-size: 18px;
      color: #000000D9;
      font-weight: bold;
      margin-top: 2px;
      margin-left: 14px;
    }
  }
}
</style>