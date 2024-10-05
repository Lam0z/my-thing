<script setup>
import { ref } from "vue";
const emit = defineEmits(["toggleActive"]);
const props = defineProps({
    items: {
        type: Array,
        default: [
            {
                title: "tab - 1",
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
        ],
    },
    column: {
        type: Boolean,
    },
});

const toggle = (item) => emit("toggleActive", item);
</script>

<template>
    <div class="tabs" :class="{ 'tabs--column': column }">
        <div class="tabs__header">
            <div
                class="tabs__header-item"
                :class="{ active: item.isActive }"
                v-for="(item, idx) in items"
                :key="idx"
                @click="toggle(item)"
            >
                {{ item.title }}
            </div>
        </div>
        <div class="tabs__content">
            <template v-for="(item, idx) in items" :key="idx">
                <div v-show="item.isActive" class="tabs__content-item">
                    {{ item.text }}
                </div>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tabs {
    &--column {
        display: flex;
        // flex-direction: column;
        .tabs__content-item {
            margin-top: 0;
        }
        .tabs__header {
            flex-direction: column;
        }
        .tabs__header-item {
            &:not(:first-child) {
                margin-top: -1px;
                margin-left: 0;
            }
        }
        .tabs__content {
            flex-grow: 1;
            display: flex;
            margin-left: -1px;
        }
        .tabs__content-item {
            flex-grow: 1;
        }
    }

    &__header {
        display: flex;
    }

    &__header-item {
        padding: 1rem;
        flex-grow: 1;
        display: flex;
        text-align: center;
        justify-content: center;
        border: 1px solid #000;
        &:not(:first-child) {
            margin-left: -1px;
        }
        &.active {
            // display: none;
            background: skyblue;
        }
        &:hover {
            cursor: pointer;
        }
    }

    &__content {
    }

    &__content-item {
        border: 1px solid #000;
        margin-top: -1px;
        padding: 1rem;
    }
}
</style>
