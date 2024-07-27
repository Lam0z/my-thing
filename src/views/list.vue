<script setup>
import { ref, computed } from "vue";
import List from "@/components/List.vue";
const listItems = ref(["item 1", "item 2", "item 3", "item 4", "item 5"]);
const list = computed(() => {
    return listItems.value;
});
const removeItem = (item) => {
    listItems.value = listItems.value.filter((i, idx) => i != item);
};
</script>
<template>
    <List :list="list" @delItem="removeItem" />
</template>

<style lang="scss" scoped></style>
