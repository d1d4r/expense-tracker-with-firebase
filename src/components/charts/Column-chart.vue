<template lang="">
  <div id="chart">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const series = reactive([
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
]);

const chartOptions = reactive({
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
});
</script>
<style lang=""></style>
