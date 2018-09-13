import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/styles/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate'    
import  VueScrollTo from 'vue-scrollto';
window.jQuery = window.$ =  require('jquery');

Vue.use(VueScrollTo)
Vue.use(VeeValidate);
library.add(faLock)
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  el: '#app',
  render (h){
    return h(App);
}
})

