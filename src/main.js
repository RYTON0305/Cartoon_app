import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
//swiper end
import 'reset-css'
import './utils/vant'
// axios 
import axios from 'axios'
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'https://www.fastmock.site/mock/158a03ec1280c564753d8f62f15c1a52/api';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
