import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const baseURL= 'http://localhost:3000/data.json'

export default{
    getCommonApi(){
        return Vue.axios.get(baseURL).then((response) => response.data)
    }

    
}