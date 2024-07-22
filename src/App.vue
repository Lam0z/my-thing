<script setup>
import TheTemplate from "@/components/TheTemplate.vue";
const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Buttons",
        href: "/buttons",
    },
    {
        name: "Accordion",
        href: "/accordion",
    },
];
</script>

<template>
    <the-template :navLinks="navLinks">
        <RouterView />
    </the-template>
</template>

<style scoped lang="scss">
@import "./assets/base.scss";
</style>
