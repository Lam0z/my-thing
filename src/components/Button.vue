<script setup>
const props = defineProps({
    color: {
        type: String,
        default: "primary",
    },
    outline: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <button
        class="btn"
        :class="[
            outline ? `btn-outline-${color}` : `btn-${color}`,
            { 'rounded-circle': rounded },
        ]"
        :disabled="disabled"
        :outline="outline"
    >
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped></style>
