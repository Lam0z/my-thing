<script setup>
import { useStore } from "@/store/store";

const store = useStore();
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__menu" @click="store.toggleMenu">
                <img src="@/assets/img/bars-solid.svg" alt="Menu Icon" />
                <!-- <span>Menu</span> -->
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
.header {
    // outline: 1px solid $bg;
    &__menu {
        max-width: 2rem;
    }
}
</style>
