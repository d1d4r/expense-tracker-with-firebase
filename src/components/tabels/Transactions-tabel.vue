<template>
  <EasyDataTable
    :headers="state.headers"
    :items="state.transactions"
    :loading="state.loading"
  >
    <template #loading>
      <p>loading...</p>
    </template>
    <template #item-operation="item">
      <v-icon name="ri-edit-box-line"  />
      <v-icon name="ri-delete-bin-line" />
    </template>
  </EasyDataTable>
</template>

<script setup>
import { getAllTransactions } from "@/service/data/transactions/getAllTransactions";
//import { count } from "firebase/firestore";
import { onMounted, reactive } from "vue";

const state = reactive({
  transactions: [],
  headers: [],
  loading: false,
  error: null,
});

const edit = () => {
  console.log("edit");
};

onMounted(async () => {
  state.loading = true;
  try {
    const transactions = await getAllTransactions();

    state.transactions = transactions;

    const headers = Object.keys(state.transactions[0]).map((key) => {
      return {
        text: key.toUpperCase(),
        value: key,
      };
    });

    headers.push({
      text: "OPERATION",
      value: "operation",
    });

    state.headers = headers;
  } catch (error) {
    state.error = error;
  } finally {
    state.loading = false;
  }
});
</script>
<style>
.customize-table {
  width: 100%;
}
</style>

<!-- // const headers = computed(() => { // const computedHeaders = []; //
state.transactions.forEach((transaction) => { //
Object.keys(transaction).forEach((key) => { // if
(!computedHeaders.includes(key)) { // computedHeaders.push({ // text:
key.toUpperCase(), // value: key, // }); // } // }); // }); // return
computedHeaders; // }); // const headers = computed(() => { // const
computedHeaders = []; // state.transactions.map((transaction) => { //
computedHeaders.push({ // text: Object.keys(transaction)[0].toUpperCase(), //
value: Object.keys(transaction)[0], // }); // }); // return computedHeaders; //
}); //console.log(Object.keys(x)); -->
