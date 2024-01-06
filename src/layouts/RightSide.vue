<template lang="">
  <NavigationDrawer location="right">
    <v-container>
      <v-text-field
        clearable
        label="date"
        type="date"
        variant="outlined"
      ></v-text-field>
      <v-combobox
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
      <v-row>
        <v-col cols="6">
          <v-checkbox label="on"></v-checkbox>
        </v-col>
        <v-col cols="6">
          <v-checkbox label="of"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-checkbox label="both" ></v-checkbox>
        </v-col>
        <v-col cols="6">
          <v-checkbox label="Checkbox"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-checkbox label="Checkbox"></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
  </NavigationDrawer>
</template>
<script setup>
import NavigationDrawer from "@/components/Navigation-drawer.vue";
</script>
<style lang=""></style>
