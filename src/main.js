import "./assets/base.scss";

import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";

// highlight code library

const app = createApp(App);

app.use(router).mount("#app");
