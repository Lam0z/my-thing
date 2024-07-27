<script setup>
const emit = defineEmits(["delItem"]);
const props = defineProps({
    list: {
        type: Array,
    },
});
</script>

<template>
    <ul>
        <TransitionGroup name="list" tag="ul">
            <li v-for="(item, idx) in list" :key="idx">
                {{ item }} <span @click="$emit('delItem', item)">X</span>
            </li>
        </TransitionGroup>
    </ul>
</template>

<style lang="scss" scoped></style>
