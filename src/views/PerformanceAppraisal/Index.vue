<template>
  <div id="performanceBox">
    Performance appraisal
    <BarChart />
  </div>
</template>

<script setup>
import BarChart from '@/components/Echarts/Index.vue';

</script>

<style lang="scss" scoped>
#performanceBox{
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>