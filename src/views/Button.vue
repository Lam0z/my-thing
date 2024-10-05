<script setup>
import AppButton from "@/components/AppButton.vue";
import TheTemplate from "@/components/TheTemplate.vue";
import { useStore } from "@/store/store";

const store = useStore();
</script>
<template>
    <TheTemplate>
        <app-button text="My Button" outline size="big" type="secondary" rounded
            >BUTTOn</app-button
        >
    </TheTemplate>
</template>

<style lang="scss" scoped></style>
