import "./assets/base.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";

// highlight code library

const app = createApp(App);

app.use(router).mount("#app");
