import { createWebHistory, createRouter } from "vue-router";

import main from "@/views/main.vue";
import typography from "@/views/typography.vue";
import buttons from "@/views/buttons.vue";
import accordion from "@/views/accordion.vue";
import tabs from "@/views/tabs.vue";
import more from "@/views/more.vue";

const routes = [
    { path: "/", component: main },
    { path: "/about", component: typography },
    { path: "/buttons", component: buttons },
    { path: "/accordion", component: accordion },
    { path: "/tabs", component: tabs },
    { path: "/more", component: more },
];

const router = createRouter({
    history: createWebHistory("/my-thing/"),
    routes,
});
export default router;
