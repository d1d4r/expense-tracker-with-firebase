<template lang="">
  <apexchart :options="chartOptions" :series="series"></apexchart>
</template>
<script setup>
import { reactive } from "vue";

const series = reactive([44, 55, 13, 43, 22]);
const chartOptions = reactive({
  chart: {
    width: 380,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 0,
    height: 230,
  },
});
</script>
<style lang=""></style>
