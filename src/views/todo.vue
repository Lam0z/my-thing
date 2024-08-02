<script setup>
import { ref } from "vue";
const input = ref("");
const listItems = ref([]);
const addItem = () => {
    listItems.value.push(input.value);
    input.value = "";
};
</script>
<template>
    <input
        type="text"
        class="form-control"
        placeholder="into text"
        v-model="input"
        @keyup.enter="addItem"
    />
    <ul>
        <li v-for="(item, idx) in listItems" :key="idx">
            {{ item }}
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>
