<script setup>
import { useStore } from "@/store/store";
import { RouterLink } from "vue-router";

const store = useStore();

const props = defineProps({
    links: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <aside
        :class="['aside', { open: store.isMenu }]"
        @click.self="store.toggleMenu"
    >
        <div :class="['aside__menu', { open: store.isMenu }]">
            <RouterLink
                class="aside__item"
                v-for="(item, idx) in links"
                :key="idx"
                :to="item.href"
                @click="store.toggleMenu"
                >{{ item.name }}</RouterLink
            >
        </div>
    </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
.aside {
    position: fixed;
    inset: 0;
    height: 100%;
    width: 100%;
    background: $bg;

    // display: none;
    opacity: 0;
    transform: translateX(-100%);
    transition: 0.3s ease all;
    &.open {
        transform: translateX(0);
        // display: block;
        opacity: 1;
    }
    &__menu {
        max-width: 20rem;
        height: 100%;
        padding: 1rem;
        background: white;
        transform: translateX(-22rem);
        transition: 0.3s ease all;
        display: flex;
        flex-direction: column;
        &.open {
            transform: translateX(0);
        }
    }

    &__item {
        padding: 1rem;
        transition: 0.3s all ease;
        border-radius: 0.5rem;
        &:hover {
            background: skyblue;
        }
    }
}
</style>
