<template>
  <div class="headerbox">
    <div class="topline">
      <div class="left">
        <div class="osimg">
          <svg v-if="!isCollapse" @click="collapse" focusable="false" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path></svg>
          <svg v-else focusable="false" @click="expand" data-icon="menu-unfold" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"></path></svg>`
        </div>
        <div class="bread">
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item class="bread-item">首页</el-breadcrumb-item>
            <el-breadcrumb-item class="bread-item">系统管理</el-breadcrumb-item>
            <el-breadcrumb-item class="bread-item">用户管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="right">
        <div class="icons">
          <div class="icon">
            <svg focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
          </div>
          <div class="icon">
            <svg focusable="false" data-icon="bell" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path></svg>
          </div>
          <div class="icon">
            <svg focusable="false" data-icon="fullscreen" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"></path></svg>
          </div>
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 512 512" class="iconify iconify--ion"><path fill="currentColor" d="m478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362L368 281.65L401.17 362Zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z"></path></svg>
          </div>
        </div>
        <div class="userbox">
          <el-dropdown>
            <div class="user">
              <img class="avator" src="./images/avator.jpg" alt="">
              <span class="name">欢迎您，古月</span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="toMyCenter">
                  <i class="iconfont icon-geren"></i>
                  <span>个人中心</span>
                </el-dropdown-item>
                <el-dropdown-item @click="logout">
                  <i class="iconfont icon-h"></i>
                  <span>退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="history-block">
      <div @click="historyBlockClick(idx,item)" class="block" v-for="(item,idx) in historyBlock" :key="idx" :class="{'active-blcok':idx===activeBlockIdx}">
        <i class="dot"></i>
        <span>{{ item }}</span>
        <el-icon @click.stop="closeHistoryBlock(idx)" class="close"><close /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight,ArrowDown,Close  } from '@element-plus/icons-vue'
import {ref,reactive,getCurrentInstance} from 'vue'

const {$router} = getCurrentInstance().proxy 
const isCollapse = defineModel('isCollapse',{required:true})
const historyBlock = reactive(['首页','系统管理','员工能力画像','员工基本数据'])
const activeBlockIdx = ref(0)

const collapse = () =>isCollapse.value = true
const expand = () =>isCollapse.value = false

function historyBlockClick(idx,item){
  activeBlockIdx.value = idx
}

function closeHistoryBlock(idx){
  historyBlock.splice(idx,1)
}

function toMyCenter(){
  $router.push('/personalCenter')
}

function logout(){
  $router.replace('/login')
  localStorage.removeItem('token')
}




</script>

<style lang="scss" scoped>

.headerbox{
  .topline{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    border-bottom: 1px solid #dcdfe6;
    .left,.right{
      display: flex;
      align-items: center;
      height: 100%;
    }
    .osimg{
      padding: 5px 10px 0;
      svg{
        width: 18px;
        height: 18px;
        cursor: pointer;
      }
    }
    .bread{
      margin-left: 4px;
      .bread-item{
        font-size: 16px;
        color: #000000A6;
        .el-breadcrumb__inner{
          cursor: pointer !important;
        }
      }
    }
    .icons{
      display: flex;
      align-items: center;
      height: 100%;
      .icon{
        width: 42px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: .3s;
        &:hover{
          background-color: rgba(179, 179, 179, 0.187);
        }
      }
    }
    .userbox{
      .user{
        display: flex;
        align-items: center;
        align-self:self-end;
        margin-right: 14px;
        margin-left: 20px;
        cursor: pointer;
        outline: none;
        .avator{
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .name{
          font-size: 14px;
          color: #606266;
          margin-left: 10px;
        }
      }
    }
  }
  .history-block{
    display: flex;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #dcdfe6;
    .block{
      display: flex;
      align-items: center;
      border-left: 1px solid #dcdfe6;
      height: 100%;
      padding: 0 16px;
      color: #333333;
      cursor: pointer;
      transition: .2s;
      &:hover{
        // color: #4D70FF;
      }
      &:hover>.close{
        visibility: visible;
      }
      span{
        font-size: 14px;
      }
      .dot{
        width: 9px;
        height: 9px;
        margin-right: 8px;
        border-radius: 50%;
        background-color: #DDDDDD;
      }
      .close{
        width: 12px;
        height: 12px;
        margin-left: 8px;
        margin-top: 2px;
        border-radius: 50%;
        transition: .3s;
        visibility: hidden;
        &:hover{
          background-color: #868789;
          color: white;
        }
      }
    }
    .active-blcok{
      span{
        color: #4D70FF;
      }
      .dot{
        background-color: #4D70FF;
      }
    }
  }
}
</style>