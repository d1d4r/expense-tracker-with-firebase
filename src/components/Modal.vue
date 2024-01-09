<template lang="">
  <v-dialog :v-model="isOpen" activator="parent">
    <v-card>
      <v-toolbar color="primary" title="ADD TRANSACTION">
        <v-spacer></v-spacer>
        <!-- <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn> -->
      </v-toolbar>
      <v-card-text>
        <TransactionCreateForm />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup>
import TransactionCreateForm from "@/components/forms/TransactionCreateForm.vue";
// import { useModalStore } from "@/stores/modal";
// import { reactive } from "vue";
// import { createTrnsaction } from "@/service/data/transactions/createTransaction";

// const submit = async () => {
//   const x = await createTrnsaction(transaction);
//   //rest form empty fields
//   transaction.type = "";
//   transaction.amount = null;
//   transaction.date = "";
//   transaction.category = [];
//   transaction.description = "";

//   close();
// };

// const transaction = reactive({
//   type: "",
//   amount: null,
//   date: "",
//   category: [],
//   description: "",
// });

// const { close, isOpen } = useModalStore();
</script>
<style></style>
