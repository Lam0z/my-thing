<script setup>
import Header from "./Theheader.vue";
import Main from "./TheMain.vue";
import Footer from "./TheFooter.vue";
</script>

<template>
    <Header></Header>
    <Main>
        <slot></slot>
    </Main>
    <Footer></Footer>
</template>

<style lang="scss" scoped></style>
