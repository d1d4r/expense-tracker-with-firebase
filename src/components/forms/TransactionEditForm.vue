<template>
  <form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col>
          <v-radio-group inline v-model="state.type">
            <v-radio label="income" value="income" variant="outlined"></v-radio>
            <v-radio
              label="expense"
              value="expense"
              variant="outlined"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="state.date"
            type="date"
            label="date"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-combobox
            v-model="state.category"
            clearable
            chips
            multiple
            label="Category"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            variant="outlined"
          ></v-combobox>
        </v-col>
        <v-col>
          <v-text-field
            v-model="state.amount"
            type="number"
            label="enter amount"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="state.description"
            label="description"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row> </v-container
    ><v-card-actions>
      <v-btn color="primary" type="submit">Submit</v-btn>
      <v-btn color="primary">close & reset</v-btn>
    </v-card-actions>
  </form>
</template>
<script setup>
import { defineProps } from "vue";
import { reactive, onMounted } from "vue";
import { getTransactionById } from "@/service/data/transactions/getTransactionById";
const props = defineProps({
  itemId: {
    type: String,
    default: "",
  },
});
const state = reactive({
  type: "",
  amount: null,
  date: "",
  category: [],
  description: "",
});

onMounted(async () => {
  const transaction = await getTransactionById(props.itemId);
  console.log(
    "🚀 ~ file: TransactionEditForm.vue:94 ~ onMounted ~ transaction:",
    transaction
  );
  state.type = transaction.type;
  state.amount = transaction.amount;
  state.date = transaction.date;
  state.category = transaction.category;
  state.description = transaction.description;
});
</script>
<style lang=""></style>
