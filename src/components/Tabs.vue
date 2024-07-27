<script setup>
import { ref } from "vue";
const emit = defineEmits(["selected"]);
const props = defineProps({
    selectedItem: {
        type: Number,
    },
    tabsItems: {
        type: Array,
    },
});
const selected = (item) => emit("selected", item);
</script>
<template>
    <div class="tabs">
        <div class="tabs__header d-flex justify-content-between">
            <div
                class="tabs__header-item"
                v-for="(item, idx) in tabsItems"
                :key="idx"
                @click="selected(item)"
            >
                {{ item.title }}
            </div>
        </div>
        <div class="tabs__content">
            <template v-for="(item, idx) in tabsItems" :key="idx">
                <div class="tabs__content-item" v-show="item.isActive">
                    {{ item.content }}
                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
