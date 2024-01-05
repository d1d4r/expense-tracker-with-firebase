<template lang="">
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-text-field v-model="firstName" label="serach"></v-text-field
      ></v-col>
      <v-col cols="3"> <v-btn type="submit">Add Transactions</v-btn> </v-col>
    </v-row>
  </v-container>
  <RightSide />
</template>
<script setup>
import RightSide from "@/layouts/RightSide.vue";
</script>
<style ></style>
