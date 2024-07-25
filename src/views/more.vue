<script setup>
import { ref, computed } from "vue";
import more from "@/components/More.vue";
const listItems = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"];
const showCount = ref(3);
const addPerClick = ref(2);
const list = computed(() => {
    return listItems.slice(0, showCount.value);
});
const changeCount = () => (showCount.value += addPerClick.value);
</script>

<template>
    <more
        :listItems="list"
        :showCount="showCount"
        :addPerClick="addPerClick"
        @add="changeCount"
    />
</template>

<style lang="scss" scoped></style>
