<template lang="">
  <v-dialog :v-model="isOpen" activator="parent">
    <v-card>
      <v-toolbar color="primary" title="ADD TRANSACTION">
        <v-spacer></v-spacer>
        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-container>
            <v-row>
              <v-col>
                <v-radio-group inline v-model="transaction.type">
                  <v-radio
                    label="income"
                    value="income"
                    variant="outlined"
                  ></v-radio>
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
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" type="submit">Submit</v-btn>
        <v-btn color="primary">close & reset</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { useModalStore } from "@/stores/modal";
import { reactive } from "vue";

const onSubmit = () => {
  console.log(transaction);
};

const transaction = reactive({
  type: "",
  amount: "",
  date: "",
  category: [],
  description: "",
});
const { close, isOpen } = useModalStore();
</script>
<style></style>
