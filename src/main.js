import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify' // Import Vuetify to your project

Vue.use(Vuetify) // Add Vuetify as a plugin
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
