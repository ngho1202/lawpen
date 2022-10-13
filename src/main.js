import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
<<<<<<< HEAD
=======
//Vue.prototype.$eventBus = new Vue();
>>>>>>> ec1a5d254a87261bb3857e549229e1bafa1e8d95
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
<<<<<<< HEAD

=======
>>>>>>> ec1a5d254a87261bb3857e549229e1bafa1e8d95
