<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-text-field
          label="serach"
          variant="outlined"
          dense
          clearable
        ></v-text-field
      ></v-col>
      <v-col cols="3">
        <v-btn @click="open" variant="outlined">
          Add Transactions
          <Modal> <TransactionCreateForm /> </Modal
        ></v-btn>
      </v-col>
    </v-row>
    <v-row>
      <TransactionsTabel />
    </v-row>
  </v-container>
  <RightSide />
</template>
<script setup>
import RightSide from "@/layouts/RightSide.vue";
import TransactionsTabel from "@/components/tabels/Transactions-tabel.vue";
import Modal from "@/components/Modal.vue";
import { useModalStore } from "@/stores/modal";
import TransactionCreateForm from "@/components/forms/TransactionCreateForm.vue";

const { open } = useModalStore();
</script>
<style></style>
