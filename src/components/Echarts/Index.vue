<template>
  <div>
    <VCharts :option="option" :autoresize="autoResize" :style="{ width, height }"/>
  </div>
</template>

<script setup>
import {ref,reactive,nextTick} from 'vue'

defineProps({
  autoResize:{
    type:Boolean,
    default:true,
  },
  width:{
    type:String,
    default:"100%",
  },
  height:{
    type:String,
    default:'300px'
  }
})
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer
])

const option = reactive({
  textStyle: {
    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
  },
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: [
      'Direct',
      'Email',
      'Ad Networks',
      'Video Ads',
      'Search Engines',
    ],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
// const renderChart = ref(false)

// nextTick(() => {
//   renderChart.value = true
// })

</script>

<style lang="scss" scoped>

</style>