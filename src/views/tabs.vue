<script setup>
import { ref } from "vue";
import tabs from "@/components/Tabs.vue";
const tabsContent = ref([
    {
        title: "item 1",
        content: "Content 1",
        isActive: true,
    },
    {
        title: "item 2",
        content: "Content 2",
        isActive: false,
    },
    {
        title: "item 3",
        content: "Content 3",
        isActive: false,
    },
    {
        title: "item 4",
        content: "Content 4",
        isActive: false,
    },
]);
const toggleActive = (item) => {
    tabsContent.value.forEach((item) => (item.isActive = false));
    tabsContent.value.find((i) => i.title == item.title).isActive = true;
    find.isActive = true;
    console.log(tabsContent.value);
};
</script>
<template>
    <tabs :tabsItems="tabsContent" @selected="toggleActive" />
</template>
<style lang="scss" scoped></style>
