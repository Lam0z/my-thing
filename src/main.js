import "./assets/base.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/router";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).mount("#app");
