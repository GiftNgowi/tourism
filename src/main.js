import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2';


Vue.use(vuetify);
Vue.use(router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);



Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  BootstrapVue,
  IconsPlugin,
  render: (h) => h(App),
}).$mount("#app");
