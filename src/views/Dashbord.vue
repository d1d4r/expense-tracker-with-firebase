<template lang="">
  <div class="main">
    <v-container>
      <v-row no-gutters>
        <v-col class="pa-0 ma-0">
          <v-sheet :height="80" :width="250">
            <v-card-title>Card Title</v-card-title>
            <v-card-subtitle>Card Subtitle</v-card-subtitle>
          </v-sheet>
        </v-col>
        <v-col class="pa-0 ma-0">
          <v-sheet :height="80" :width="250">
            <v-card-title>Card Title</v-card-title>
            <v-card-subtitle>Card Subtitle</v-card-subtitle>
          </v-sheet>
        </v-col>
        <v-col class="pa-0 ma-0">
          <v-sheet :height="80" :width="250">
            <v-card-title>Card Title</v-card-title>
            <v-card-subtitle>Card Subtitle</v-card-subtitle>
          </v-sheet>
        </v-col>
        <v-col class="pa-0 ma-0">
          <v-sheet :height="80" :width="250">
            <v-card-title>Card Title</v-card-title>
            <v-card-subtitle>Card Subtitle</v-card-subtitle>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <div class="pie">
      <PieChart />
    </div>

    <v-container>
      <v-row>
        <v-col class="pa-0 ma-0">
          <div class="area">
            <AreaChart />
          </div>
        </v-col>
        <v-col class="pa-0 ma-0">
          <div class="area">
            <ColumnChart />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import PieChart from "@/components/charts/Pie-chart.vue";
import AreaChart from "@/components/charts/Area-chart.vue";
import ColumnChart from "@/components/charts/Column-chart.vue";
</script>

<style>
.pie {
  width: 500px;
  height: 400px;
  background-color: white;
  border: 1px solid;
  margin-bottom: 10px;
}
.area {
  background-color: white;
  border: 1px solid;
  border-radius: 5px;
}
.v-col {
  padding: 0px;
}
.main {
  background-color: lightgray;
}
</style>
