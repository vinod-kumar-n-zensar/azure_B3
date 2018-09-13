<template>
  <div v-if="data != undefined && data != '' ">
    <ms-header
    :data="data.navigation"
    :logo="data.general"
    :signed.sync="signedIn"
    ></ms-header>
    
    <ms-banner
    :banner="data.banner"
    :windowHeight.sync="windowHeight"
    ></ms-banner>


    <ms-reimagine
    :info="data.reimagine">
    </ms-reimagine>

   <ms-leap
    :info="data.leap"
    :signed.sync="signedIn">
    </ms-leap>

    <div v-if="signedIn == 'true'">
      <ms-meet
      :meetInfo="data.meet">
      </ms-meet>

      <ms-control
      :controlInfo="data.control">
      </ms-control>

      <ms-deliver
      :deliverInfo="data.deliver">
      </ms-deliver>

      <ms-cosmos
      :cosmosInfo="data.cosmos">
      </ms-cosmos>
    </div>

    <ms-footer
    :info="data.footer"
    :modalInfo="data.signinmodal"
    :signed.sync="signedIn"
    :windowHeight.sync="windowHeight"
    ></ms-footer>
  </div>
  <div v-else-if="data == undefined">
    <div class="jumbotron">
        <h1 class="display-4"></h1>
    </div>
  </div>
</template>

<script>
    import MsHeader from './components/Header.vue';
    import CommonApi from './services/api/apiservice';
    import MsBanner from './components/Banner.vue';
    import MsReimagine from './pages/Reimagine.vue';
    import MsLeap from './pages/Leap.vue';
    import MsMeet from './pages/Meet.vue';
    import MsControl from './pages/Control.vue';
    import MsDeliver from './pages/Deliver.vue';
    import MsCosmos from './pages/AzureCosmosDb.vue';
    import MsFooter from './components/Footer.vue'
    export default {
  components: {
    MsHeader,
    MsBanner,
    MsReimagine,
    MsLeap,
    MsFooter,
    MsMeet,
    MsControl,
    MsDeliver,
    MsCosmos
  },
  props:{
    
  },
  data(){
    return {
      data: '',
      signedIn: "false",
      windowHeight: window.innerHeight,
    }
  },
    beforeMount(){
      this.signedIn = this.getCookie('signedIn');
      CommonApi.getCommonApi()
         .then(data =>{
           console.log("Hi the data is here",data);
             this.data = data
         })
    },
    watch: {
            windowHeight(newHeight, oldHeight) {
            this.txt = `it changed to ${newHeight} from ${oldHeight}`;
        }
    },
    methods:{
      getCookie: function(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
      }
    },
    mounted() {
            this.$nextTick(() => {
            window.addEventListener('resize', () => {
            this.windowHeight = window.innerHeight
        });
        })
      }
}
</script>