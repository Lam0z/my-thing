<script setup>
import { ref } from "vue";
const props = defineProps({
    navLinks: {
        type: Array,
        require: true,
    },
});
const isActive = ref(true);
const toggleIsActive = () => (isActive.value = !isActive.value);
</script>

<template>
    <header class="header" :class="{ 'header--active': isActive }">
        <nav class="header__nav">
            <div v-for="link in navLinks" :key="link.name">
                <RouterLink :to="link.href" class="header__link">{{
                    link.name
                }}</RouterLink>
            </div>
        </nav>
        <div class="header__back" @click="toggleIsActive">
            <img src="@/assets/img/arrow-right-solid.svg" alt="icon" />
        </div>
    </header>
    <main class="main" :class="{ 'main--active': isActive }">
        <slot></slot>
    </main>
</template>

<style lang="scss" scoped>
.header {
    width: 320px;
    background: paleturquoise;
    display: flex;
    // justify-content: space-between;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.3s ease transform;
    transform: translateX(-310px);

    &--active {
        transform: translateX(0);
        img {
            transform: rotate(180deg);
        }
    }
    &__nav {
        flex-grow: 1;
        padding: 20px;
    }
    &__link {
        color: white;
    }
    &__back {
        transition: 1s all ease;
        background: orange;
        // color: white;
        // font-weight: bold;
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
            opacity: 0.3;
        }
        img {
            width: 10px;
            height: 10px;
            transition: 0.3s all ease;
        }
    }
}
.main {
    flex-grow: 1;
    padding-left: 20px;

    transition: 0.3s ease padding-left;
    &--active {
        padding-left: 330px;
    }
}
</style>
