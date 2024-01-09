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
      <v-icon name="ri-edit-box-line" @click="() => edit(item)"> </v-icon>
      <v-icon name="ri-delete-bin-line" />
    </template>
  </EasyDataTable>
  <Modal title="EDIT TRANSACTION">
    <TransactionEditForm :itemId="itemId" />
  </Modal>
</template>

<script setup>
import { getAllTransactions } from "@/service/data/transactions/getAllTransactions";
import { onMounted, reactive, ref } from "vue";
import Modal from "@/components/Modal.vue";
import { useModalStore } from "@/stores/modal";
import TransactionEditForm from "@/components/forms/TransactionEditForm.vue";

const { open } = useModalStore();

const state = reactive({
  transactions: [],
  headers: [],
  loading: false,
  error: null,
});
const itemId = ref(null);

const edit = ({ id }) => {
  open();
  itemId.value = id;
};

onMounted(async () => {
  state.loading = true;
  try {
    const transactions = await getAllTransactions();
    console.log(
      "🚀 ~ file: Transactions-tabel.vue:44 ~ onMounted ~ transactions:",
      transactions
    );

    state.transactions = transactions;

    const headers = Object.keys(state.transactions[0]).map((key) => {
      return {
        text: key !== "id" ? key.toUpperCase() : "",
        value: key !== "id" ? key : "",
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
