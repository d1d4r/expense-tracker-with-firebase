<template>
  <EasyDataTable :headers="headers" :items="state.transactions">
    <template #loading v-if="true">
      <p>Loading...</p>
    </template>
  </EasyDataTable>
</template>

<script setup>
import { getAllTransactions } from "@/service/data/transactions/getAllTransactions";
import { onMounted, reactive } from "vue";

const state = reactive({
  transactions: [],
  loading: false,
  error: null,
});

const headers = [{ text: "Name", value: "name" }];

onMounted(async () => {
  state.loading = true;
  try {
    const transactionData = await getAllTransactions();
    console.log(transactionData);
    state.transactions = transactionData;
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
