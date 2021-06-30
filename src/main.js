import Vue from "vue";
import App from "./App.vue";

import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/* https://router.vuejs.org/ */
//npm i vue-router
import { router } from "./routes";

import axios from "axios";
import VueAxios from "vue-axios";

import VueForm from "vue-form";
Vue.use(VueForm);
Vue.use(VueAxios, axios);

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
