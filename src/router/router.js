import { createWebHistory, createRouter } from "vue-router";

import main from "@/views/main.vue";
import typography from "@/views/typography.vue";
import buttons from "@/views/buttons.vue";
import accordion from "@/views/accordion.vue";

const routes = [
    { path: "/", component: main },
    { path: "/about", component: typography },
    { path: "/buttons", component: buttons },
    { path: "/accordion", component: accordion },
];

const router = createRouter({
    history: createWebHistory("/my-thing/"),
    routes,
});
export default router;
