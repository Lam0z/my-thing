<script setup></script>

<template>
    <main class="main">
        <slot></slot>
    </main>
</template>

<style lang="scss" scoped>
@import "@/assets/vars.scss";
.main {
    outline: 1px solid $bg;
}
</style>
