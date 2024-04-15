<template>
  <div id="personbox">
    <div class="infoCard">
      <div class="intro">
        <img :src="userinfo.Avator" alt="">
        <div class="uploader">
          <el-icon class="edit"><UploadFilled /></el-icon>
        </div>
        <div class="nickname">
          <span>Serati Ma</span>
          <el-icon class="edit"><EditPen /></el-icon>
        </div>
        <div class="signature">
          <span>海纳百川，有容乃大</span>
          <el-icon class="edit"><EditPen /></el-icon>
        </div>
      </div>
      <div class="compInfo">
        <div class="post">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="contacts" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M594.3 601.5a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1 8 8 0 008 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z"></path></svg>
          <span>交互专家</span>
        </div>
        <div class="positon">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="cluster" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M888 680h-54V540H546v-92h238c8.8 0 16-7.2 16-16V168c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h238v92H190v140h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8zM256 805.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zm288 0c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM288 384V216h448v168H288zm544 421.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM360 300a40 40 0 1080 0 40 40 0 10-80 0z"></path></svg>
          <span>蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</span>
        </div>
        <div class="home">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="home" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
          <span>浙江省杭州市</span>
        </div>
      </div>
      <div class="labelbox">
        <span class="tit">标签</span>
        <div class="labels">
          <div v-for="(item,idx) in signatures" :key="idx">
            <span>{{ item }}</span>
          </div>
          <div>
            <svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useUserInfoStore from '@/stores/userinfo';
import {UploadFilled,EditPen} from '@element-plus/icons-vue' 

const store = useUserInfoStore()
const {userinfo} = storeToRefs(store)

const signatures = ['很有想法的','专注设计','辣~','大长腿','川妹子','海纳百川','房贷首付']

</script>

<style lang="scss" scoped>
#personbox{
  height: 100%;
  .infoCard{
    width: 300px;
    background-color: white;
    padding: 16px;
    .intro{
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .uploader{
        width: 104px;
        height: 104px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.267);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 34px;
        position: absolute;
        margin-top: 16px;
        transition: .2s;
        opacity: 0;
        cursor: pointer;
        &:hover{
          opacity: 1;
        }
      }
      img{
        width: 104px;
        height: 104px;
        border-radius: 50%;
        margin: 16px 0;
      }
      .edit{
        visibility: hidden;
        cursor: pointer;
      }
      .nickname{
        &:hover>.edit{
          visibility: inherit;
        }
        span{
          color: rgba(0, 0, 0, 0.88);
          font-weight: bold;
          font-size: 20px;
          margin-right: 4px;
        }
        
      }
      .signature{
        &:hover>.edit{
          visibility: inherit;
        }
        span{
          color: rgba(0, 0, 0, 0.88);
          font-size: 14px;
          margin-top: 8px;
          margin-right: 4px;
        }
      }
    }
    .compInfo{
      margin-top: 24px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.88);
      padding-left: 16px;
      padding-bottom: 24px;
      font-weight: 500;
      border-bottom: 1px solid rgba(100, 98, 98, 0.103);
      div{
        margin-top: 12px;
        svg{
          transform: translateY(2px);
        }
        span{
          margin-left: 8px;
        }
      }
      .post{

      }
      .position{

      }
      .home{}
    }
    .labelbox{
      margin-top: 24px;
      .tit{
        font-size: 14px;
        color: rgba(0, 0, 0, 0.88);
      }
      .labels{
        font-size: 12px;
        color: rgba(0, 0, 0, 0.88);
        display: flex;
        flex-wrap: wrap;
        margin-top: 16px;
        padding-bottom: 16px;
        div{
          background-color: #FAFAFA;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          padding: 2px 7px;
          white-space: nowrap;
          margin-right: 6px;
          margin-bottom: 8px;
        }
      }
    }
  }
}
</style>