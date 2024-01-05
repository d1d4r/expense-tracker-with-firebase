<template lang="">
  <apexchart :options="chartOptions" :series="series"></apexchart>
</template>
<script setup>
import { reactive } from "vue";

const series = reactive([44, 55, 13, 43, 22]);
const chartOptions = reactive({
  chart: {
    type: "donut",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 50,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
});
</script>
<style></style>
