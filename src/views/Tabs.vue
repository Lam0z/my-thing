<script setup>
import { ref } from "vue";
import AppTabs from "@/components/AppTabs.vue";
import TheTemplate from "@/components/TheTemplate.vue";

import { useStore } from "@/store/store";
const store = useStore();

const listItems = ref([
    {
        title: "tab - 1 ",
        text: "tab content - 1 !",
        isActive: true,
    },
    {
        title: "tab - 2",
        text: "tab content - 2 !",
        isActive: false,
    },
    {
        title: "tab - 3",
        text: "tab content - 3 !",
        isActive: false,
    },
    {
        title: "tab - 4",
        text: "tab content - 4 !",
        isActive: false,
    },
    {
        title: "tab - 5",
        text: "tab content - 5 !",
        isActive: false,
    },
]);

const toggle = (item) => {
    listItems.value.forEach((element) => {
        element.isActive = false;
    });
    item.isActive = !item.isActive;
};
</script>
<template>
    <TheTemplate>
        <AppTabs :items="listItems" column @toggleActive="toggle" />
    </TheTemplate>
</template>

<style lang="scss" scoped></style>
