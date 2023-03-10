import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
//import mdbvue from "mdbvue";

Vue.use(vuetify);
Vue.use(router);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//Vue.use(mdbvue);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  BootstrapVue,
  IconsPlugin,
  render: (h) => h(App),
}).$mount("#app");
