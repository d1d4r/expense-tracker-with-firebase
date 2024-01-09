import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false);
  const open = () => {
    isOpen.value = !isOpen.value;
  };
  const close = () => {
    isOpen.value = false;
  };

  return { isOpen, open, close };
});
