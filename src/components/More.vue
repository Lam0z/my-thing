<script setup>
import { computed } from "vue";
const emit = defineEmits(["add"]);
const props = defineProps({
    listItems: {
        type: Array,
    },
    showCount: {
        type: Number,
    },
    addPerClick: {
        type: Number,
    },
});
</script>

<template>
    <ul>
        <li v-for="(item, idx) in listItems" :key="idx">
            {{ item }}
        </li>
    </ul>
    <button
        class="btn btn-success"
        @click="$emit('add')"
        v-show="showCount == listItems.length"
    >
        MORE
    </button>
</template>

<style lang="scss" scoped></style>
