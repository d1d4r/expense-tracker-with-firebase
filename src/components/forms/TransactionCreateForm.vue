<template>
  <form @submit.prevent="submit">
    <v-container>
      <v-row>
        <v-col>
          <v-radio-group inline v-model="transaction.type">
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
            v-model="transaction.date"
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
            v-model="transaction.category"
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
            v-model="transaction.amount"
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
            v-model="transaction.description"
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
import { useModalStore } from "@/stores/modal";
import { reactive } from "vue";
import { createTrnsaction } from "@/service/data/transactions/createTransaction";

const submit = async () => {
  const x = await createTrnsaction(transaction);
  //rest form empty fields
  transaction.type = "";
  transaction.amount = null;
  transaction.date = "";
  transaction.category = [];
  transaction.description = "";

  
};

const transaction = reactive({
  type: "",
  amount: null,
  date: "",
  category: [],
  description: "",
});

const { close, isOpen } = useModalStore();
</script>
<style lang=""></style>
