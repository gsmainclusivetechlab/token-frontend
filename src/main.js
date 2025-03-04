import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from './router'
import Notifications from 'vue-notification';
import VueGtag from "vue-gtag";
import { IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(Notifications)

Vue.use(VueGtag, {
  config: { id: "G-SYN09MW98X" }
});

Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
