import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/styles/app.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLock,faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate'    
import  VueScrollTo from 'vue-scrollto';
window.jQuery = window.$ =  require('jquery');
import AOS from 'aos';
import "aos/dist/aos.css";
import vSelect from 'vue-select'
import VueMatchHeights from 'vue-match-heights';

Vue.use(VueMatchHeights, {
  // Optional: default viewports widths to disabled resizing on. Can be overridden per usage
});
Vue.use(VueScrollTo)
Vue.use(VeeValidate);
library.add(faLock,faArrowRight, faArrowLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)
new Vue({
  created(){
    AOS.init({
      easing: 'ease-in-out-sine',
      duration: 1200,
    });
  },
  el: '#app',
  render (h){
    return h(App);
}
})

