import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("stores", () => {
    const isMenu = ref(false);

    const toggleMenu = () => (isMenu.value = !isMenu.value);
    return { isMenu, toggleMenu };
});
