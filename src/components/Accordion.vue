<script setup>
const props = defineProps({
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
};
</script>

<template>
    <div class="accordion">
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
    </div>
</template>

<style lang="scss" scoped></style>
