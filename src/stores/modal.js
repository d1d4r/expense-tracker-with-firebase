import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref(false);
  const open = () => {
    console.log("open");
    isOpen.value = true;
  };
  const close = () => (isOpen.value = false);

  return { isOpen, open, close };
});
