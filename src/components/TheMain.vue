<script setup></script>

<template>
    <main class="main">
        <slot></slot>
    </main>
</template>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
.main {
    flex-grow: 1;
    outline: 1px solid $bg;
}
</style>
