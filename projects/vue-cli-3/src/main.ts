import { createApp, h } from "vue";
import App from "./App.vue";
// import './registerServiceWorker'
import router from "./router";
console.log(12312);
const app = createApp({
  render: () => h(App),
});
app.use(router).mount("#app");
