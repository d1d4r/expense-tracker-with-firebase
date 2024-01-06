<template lang="">
  <NavigationDrawer location="left">
    <v-list>
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="`${route.path}`"
      >
        <v-list-item>{{ route.name }}</v-list-item>
      </router-link>
    </v-list>
  </NavigationDrawer>
</template>
<script setup>
import NavigationDrawer from "@/components/Navigation-drawer.vue";
import { ref } from "vue";

const routes = ref([
  {
    name: "Dashbord",
    icon: "mdi-home",
    path: "/",
  },
  {
    name: "Transactions",
    icon: "mdi-information",
    path: "/transactions",
  },
  {
    name: "Categories",
    icon: "mdi-phone",
    path: "/categories",
  },
]);
</script>
<style lang=""></style>
