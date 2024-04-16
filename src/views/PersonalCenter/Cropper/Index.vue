<template>
  <div id="mini-cropper" @mousedown="(e)=>e.preventDefault()" :style="`z-index:${modalIndex};`">
    <div class="head">
      <span class="title">{{title}}</span>
      <span class="close" @click="modalIndex=-100">×</span>
    </div>
    <div class="cropperBox">
      <div class="cropper">
        <div @wheel="sizeChange" @mousedown="readyMove" @mouseup="endMove" class="cover" :style="{width:canvasSize*2/3+'px',height:canvasSize*2/3+'px',border:`${canvasSize/6}px solid rgba(0, 0, 0, 0.5)`}">
        </div>
        <canvas  :width='canvasSize' :height='canvasSize' ref="canvas"></canvas>
      </div>
      <div class="preview">
        <span>预览</span>
        <div class="imgBox">
          <canvas ref="preCan"></canvas>
        </div>
      </div>
    </div>
    <div class="bottom">
      <el-button @click="saveImg" type="primary">保存</el-button>
    </div>
  </div>
</template>



<script setup>
import useUserInfoStore from '@/stores/userinfo';
import { onMounted, ref,watchEffect,reactive,watch,getCurrentInstance } from 'vue';
import {storeToRefs} from 'pinia'
import { editEmployee } from '@/api';
const props = defineProps({
  title:{
    type:String,
    default:'更换头像'
  },
  imgBase:{
    type:String
  }
})

const {$message} = getCurrentInstance().proxy
const modalIndex = defineModel('modalIndex',{required:true})
const store = useUserInfoStore()
const {userinfo} = storeToRefs(store)
const {getUserInfoData} = store

const canvasSize = ref()
const img = new Image()
const canvas = ref()
const preCan = ref()
let preCtx
let ctx

let sizeRate=ref()
let imgPosiX=ref()
let imgPosiY= ref()
let imgHeight=ref()
let imgWidth=ref()
let imgNatureWidth=ref()
let imgNatureHeight=ref()
let size = ref()
let squareSize =ref()
let startPosiX = ref()
let startPosiY = ref()
let originX=0
let originY=0


function readyMove(e){
  document.addEventListener('mousemove',startMove)
  document.addEventListener('mouseup',function(){
    document.removeEventListener('mousemove',startMove)
    document.removeEventListener('mouseup',arguments.callee)
  })
  startPosiX.value = e.clientX
  startPosiY.value = e.clientY
  originX=imgPosiX.value
  originY=imgPosiY.value
}

function startMove(e){
    ctx.clearRect(imgPosiX.value,imgPosiY.value,imgWidth.value,imgHeight.value)
    imgPosiX.value=originX+ e.clientX-startPosiX.value
    imgPosiY.value=originY+ e.clientY-startPosiY.value
    ctx.drawImage(img,imgPosiX.value,imgPosiY.value,imgWidth.value,imgHeight.value)
    changePreview()
}

function sizeChange(e){
  ctx.clearRect(imgPosiX.value,imgPosiY.value,imgWidth.value,imgHeight.value)
  let addWidth = imgWidth.value*0.1
  let addHeight = imgHeight.value*0.1
  if(e.deltaY>0) {
    imgWidth.value-=addWidth
    imgHeight.value-=addHeight
    imgPosiX.value+=addWidth/2
    imgPosiY.value+=addHeight/2
  }
  else if(e.deltaY<0) {
    imgWidth.value+=addWidth
    imgHeight.value+=addHeight
    imgPosiX.value-=addWidth/2
    imgPosiY.value-=addHeight/2
  }
  ctx.drawImage(img,imgPosiX.value,imgPosiY.value,imgWidth.value,imgHeight.value)
  changePreview()
}

onMounted(()=>{
  setTimeout(() => {
    ctx = canvas.value.getContext('2d')
    preCtx = preCan.value.getContext('2d')
    canvasSize.value=canvas.value.parentElement.clientHeight
  }, 300);
})

watchEffect(()=>{
  img.src=props.imgBase
  img.onload=function(){
    size = canvasSize.value
    squareSize = size/6
    imgNatureWidth = img.naturalWidth
    imgNatureHeight=img.naturalHeight
    sizeRate.value = Math.max(imgNatureHeight,imgNatureWidth)/size
    drawImg()
    changePreview()
  }
})

watch(modalIndex,()=>{
  if(modalIndex.value<0){
    ctx.clearRect(0,0,canvas.value.width,canvas.value.height)
  }
})

function drawImg(){
  imgHeight.value = imgNatureHeight/sizeRate.value
  imgWidth.value = imgNatureWidth/sizeRate.value
  imgPosiX.value  = (size-imgWidth.value)/2
  imgPosiY.value = (size-imgHeight.value)/2
  ctx.drawImage(img,imgPosiX.value,imgPosiY.value,imgWidth.value,imgHeight.value)
}

function drawBlock(){
  ctx.fillStyle = "black"
  ctx.globalAlpha = 0.6
  const blockLIst=[
    [0,0,size,squareSize],
    [0,squareSize,squareSize,size-2*squareSize],
    [0,size-squareSize,size,squareSize],
    [size-squareSize,squareSize,squareSize,size-2*squareSize]
  ]
  for(let arr of blockLIst){
    ctx.fillRect(...arr)
  }
}

function changePreview(){
  let result= ctx.getImageData(squareSize,squareSize,size-2*squareSize,size-2*squareSize)
  preCan.value.width=result.width
  preCan.value.height=result.height
  preCtx.putImageData(result,0,0)
}

async function saveImg(){
  const imgBase = preCan.value.toDataURL()
  const {EmployeeID} = userinfo.value
  const result = await editEmployee({EmployeeID,Base64Str:imgBase})
  if(result.status!==0) return $message.error('修改失败')
  $message.success('修改成功')
  modalIndex.value = -100
  getUserInfoData()
}


</script>

<style scoped lang="scss">
#mini-cropper{
  width: 900px;
  height: 600px;
  padding: 16px;
  font-size: 20px;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 18px rgb(59, 59, 59);
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1000;
}
.head{
  height: 4rem;
  line-height: 4rem;
  padding: 0 16px;
  border-bottom: 1px solid rgba(93, 93, 93, 0.178);
  display: flex;
  justify-content: space-between;
  .title{
    color:rgba(19, 19, 19, 0.733)
  }
}
.close{
  font-size: 40px;
  cursor: pointer;
  transition:.2s;
  &:hover{
    opacity: .8;
  }
}
.cropperBox{
  flex: 1;
  padding: 1rem 0;
  display: flex;
}
.preview{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span{
    transform: translateY(-16px);
    font-size: 16px;
    color:rgb(66, 66, 66);
    font-weight:600;
  }
}
.cropper{
  flex: 1.5;
  cursor: move;
  position: relative;
}
.cover{
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
}
.imgBox canvas{
  border-radius: 50%;
  box-shadow: 1px 1px 18px rgb(91, 126, 145);
}
.bottom{
  height: 4rem;
  line-height: 4rem;
  padding: 0 16px;
  text-align: right;
}
button{
  display: inline-block;
  width: 120px;
  height: 50px;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background-color: rgb(71, 135, 231);
}
</style>