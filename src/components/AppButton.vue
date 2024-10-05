<script setup>
const props = defineProps({
    type: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        default: "Button",
    },
    size: {
        type: String,
        default: "",
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    outline: {
        type: Boolean,
        default: false,
    },
});

const actionBtn = (e) => alert(`clicked tag name is ${e.target.tagName}`);
</script>

<template>
    <button
        :class="[
            'btn',
            type ? `btn-${type}` : '',
            size ? ('big' ? size : 'small') : '',
            { disabled: disabled },
            { rounded: rounded },
            { outline: outline },
        ]"
        @click="actionBtn"
    >
        <slot>{{ text }}</slot>
    </button>
</template>

<style lang="scss" scoped>
.button {
}
.btn {
    padding: 0.5rem;
    font-size: 1rem;
    color: #000;
    border: none;
    border-radius: 0;
    transition: 0.3s all ease;

    .btn-prymary {
        background: skyblue;
        color: white;
    }
    &.big {
        font-size: 2rem;
        padding: 1rem;
    }
    &.small {
        font-size: 0.5rem;
        padding: 0.3rem;
    }
    &.rounded {
        border-radius: 50%;
    }
    &.outline {
        border: 1px solid #000;
        background: none;
        color: #000;
        &:hover {
            background: skyblue;
            color: white;
            border: 1px solid white;
        }
    }
    &:hover {
        opacity: 0.7;
    }
    &:active {
        opacity: 1;
    }
}
.container {
}
</style>
