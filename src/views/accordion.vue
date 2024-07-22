<script setup>
import { ref } from "vue";
import accordion from "@/components/Accordion.vue";

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
        title: "Some title 1",
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

// clip code
const toggleCode = `const toggleItem = (idx, all) => {
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
}`;

const accordionTemplate = `<accordion
    :listItems="accordionItems"
    @toggleActive="toggleItem"
    :collapseAll="false"
/>`;

const accordionComponent = `const props = defineProps({
    listItems: {
        type: Array,
    },
    collapseAll: {
        type: Boolean,
    },
});
const emit = defineEmits(["toggleActive"]);
const toggle = (idx) => {
    emit("toggleActive", idx, props.collapseAll);
};`;

const accordionComponentTemplate = `<div class="accordion">
    <div
        class="accordion__item"
        :class="{ active: item.isActive }"
        v-for="(item, idx) in listItems"
        :key="idx"
    >
        <div
            class="accordion__title d-flex justify-content-between"
            @click="toggle(idx)"
        >
            <span>{{ item.title }}</span>
            <span :class="['accordion__close', { active: item.isActive }]"
                >X</span
            >
        </div>
        <div class="accordion__description" v-show="item.isActive">
            {{ item.description }}
        </div>
    </div>
</div>`;
</script>

<template>
    <accordion
        :listItems="accordionItems"
        @toggleActive="toggleItem"
        :collapseAll="false"
        class="mb-3"
    />
    <VCodeBlock
        :code="toggleCode"
        highlightjs
        label="Accordion toggle"
        lang="javascript"
        theme="default"
    />
    <VCodeBlock
        :code="accordionTemplate"
        highlightjs
        label="Accordion template"
        lang="html"
        theme="default"
    />
    <VCodeBlock
        :code="accordionComponent"
        highlightjs
        label="Accordion component script"
        lang="javascript"
        theme="default"
    />
    <VCodeBlock
        :code="accordionComponentTemplate"
        highlightjs
        label="Accordion component template"
        lang="html"
        theme="default"
    />
</template>
<style lang="scss" scoped></style>
