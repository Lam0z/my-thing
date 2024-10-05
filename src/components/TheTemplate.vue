<script setup>
import Aside from "./TheAside.vue";
import Header from "./Theheader.vue";
import Main from "./TheMain.vue";
import Footer from "./TheFooter.vue";

const links = [
    {
        href: "/",
        name: "Home",
    },
    {
        href: "/button",
        name: "Button",
    },
    {
        href: "/tabs",
        name: "Tabs",
    },
];
</script>

<template>
    <Aside :links="links" />
    <Header></Header>
    <Main>
        <div class="container"><slot></slot></div>
    </Main>
    <Footer></Footer>
</template>

<style lang="scss" scoped></style>
