import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import Button from "@/views/Button.vue";
import Tabs from "@/views/Tabs.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/button", component: Button },
    { path: "/tabs", component: Tabs },
];

const router = createRouter({
    history: createWebHistory("/my-thing/"),
    routes,
});
export default router;
