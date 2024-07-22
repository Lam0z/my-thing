<script setup>
import accordion from "@/components/Accordion.vue";
import { ref } from "vue";

const toggleItem = (idx, all) => {
    if (all) {
        accordionItems.value.forEach((item) => {
            item.isActive = false;
        });
        accordionItems.value[idx].isActive = true;
    } else {
        accordionItems.value[idx].isActive = accordionItems.value[idx].isActive
            ? false
            : true;
    }
};
const accordionItems = ref([
    {
        title: "Some title",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, iusto.",
        isActive: true,
    },
    {
        title: "Some title 2",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, iusto.",
        isActive: false,
    },
    {
        title: "Some title 3",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, iusto.",
        isActive: false,
    },
    {
        title: "Some title 4",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, iusto.",
        isActive: false,
    },
]);
</script>

<template>
    <accordion
        :listItems="accordionItems"
        @toggleActive="toggleItem"
        :collapseAll="false"
    />
</template>
<style lang="scss" scoped></style>
