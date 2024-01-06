<template lang="">
  <v-navigation-drawer :location="props.location">
    <slot></slot>
  </v-navigation-drawer>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  location: {
    type: String,
    required: true,
  },
});
</script>
<style lang=""></style>
