<template lang="">
  <v-container>
    <v-row>
      <v-col>
        <v-sheet :height="80" :width="250" color="success" class="text-center">
          <v-card-title>Card Title</v-card-title>
          <v-card-subtitle>Card Subtitle</v-card-subtitle>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet :height="80" :width="250" color="success">
          <v-card-title>Card Title</v-card-title>
          <v-card-subtitle>Card Subtitle</v-card-subtitle>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet :height="80" :width="250" color="success">
          <v-card-title>Card Title</v-card-title>
          <v-card-subtitle>Card Subtitle</v-card-subtitle>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet :height="80" :width="250" color="success">
          <v-card-title>Card Title</v-card-title>
          <v-card-subtitle>Card Subtitle</v-card-subtitle>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <PieChart />
</template>
<script setup>
import PieChart from "@/components/charts/Pie-chart.vue";
</script>
<style lang=""></style>
