import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
    history: createWebHistory("/my-thing/"),
    routes,
});
export default router;
