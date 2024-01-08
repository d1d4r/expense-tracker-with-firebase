<template>
  <EasyDataTable
    :headers="headers"
    :items="state.transactions"
    :loading="state.loading"
  >
    <template #loading>
      <p>loading...</p>
    </template>
    <template #item-operation="item">
      <div class="operation-wrapper">
        <img
          src="./images/delete.png"
          class="operation-icon"
          @click="deleteItem(item)"
        />
        <img
          src="./images/edit.png"
          class="operation-icon"
          @click="editItem(item)"
        />
      </div>
    </template>
  </EasyDataTable>
</template>

<script setup>
import { getAllTransactions } from "@/service/data/transactions/getAllTransactions";
//import { count } from "firebase/firestore";
import { onMounted, reactive, computed } from "vue";

const state = reactive({
  transactions: [],

  loading: false,
  error: null,
});

const headers = computed(() => {
  const computedHeaders = [];
  state.transactions.forEach((transaction) => {
    Object.keys(transaction).forEach((key) => {
      if (!computedHeaders.includes(key)) {
        computedHeaders.push({
          text: key.toUpperCase(),
          value: key,
        });
      }
    });
  });
  return computedHeaders;
});

onMounted(async () => {
  state.loading = true;
  try {
    const transactionData = await getAllTransactions();

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
