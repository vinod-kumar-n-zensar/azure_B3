<template>
<header>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#"><img  v-bind:src="logo.logo" alt="MS Azure Cosmos DB"/></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item" v-for="(item,index) in data" @click="changeActive($event)">
          <a class="nav-link"  v-bind:href="'#'+item.link" v-if="signed == 'true'" v-scroll-to="{el: '#'+item.link, offset: -66,duration: 500}">
          {{item.title}}
        </a>
          <a class="nav-link"  @click="changeActive" v-bind:href="'#'+item.link" v-scroll-to="{el: '#'+item.link, offset: -66,duration: 500}" v-else>
          <span v-if="item.title != 'Reimagine' && item.title != 'Leap'"  data-toggle="modal" data-target="#SignInModal">
           <font-awesome-icon size="xs" icon="lock" /> {{item.title}}<span class="sr-only">(current)</span>
          </span>
           <span v-else>
             {{item.title}}<span class="sr-only">(current)</span>
          </span>
          </a>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</header>
</template>

<script>
import jq from 'jquery';
import AOS from 'aos';
export default {
    props:{
        data: Object,
        logo: Object,
        signed: String
    },
    methods:{
      changeActive: (that)=>{
        jq(".navbar .nav-item").removeClass("active");
        let ele = that.currentTarget
        jq(ele).find('.navbar-nav .nav-link,.navbar-nav li').removeClass('active')                                            
        jq(ele).addClass('active')
      },
      handleScroll: ()=>{
        let scrollDistance = jq(window).scrollTop() + 100;
		    // Assign active class to nav links while scolling
		    jq('.page-section').each(function(i) {
				if (jq(this).position().top <= scrollDistance) {
						jq('.navbar-nav li a.active,.navbar-nav li').removeClass('active');
						jq('.navbar-nav li a').eq(i).addClass('active');
        }
        })
        AOS.refresh();
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
}

</script>