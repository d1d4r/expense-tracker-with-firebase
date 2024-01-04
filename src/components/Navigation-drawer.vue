<template lang="">
  <v-navigation-drawer :location="props.location">
    <v-list>
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="`${route.path}`"
      >
        <v-list-item>{{ route.name }}</v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  location: {
    type: String,
    required: true,
  },
});

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
