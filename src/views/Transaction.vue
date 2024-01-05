<template lang="">
  <v-container>
    <v-row>
      <v-col cols="8"> <v-text-field label="serach"></v-text-field></v-col>
      <v-col cols="3">
        <v-btn @click="open">Add Transactions</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <TransactionsTabel />
    </v-row>
  </v-container>
  <Modal />
  <RightSide />
</template>
<script setup>
import RightSide from "@/layouts/RightSide.vue";
import TransactionsTabel from "@/components/tabels/Transactions-tabel.vue";
import Modal from "@/components/Modal.vue";
import { useModalStore } from "@/stores/modal";

const { open } = useModalStore();
</script>
<style></style>
