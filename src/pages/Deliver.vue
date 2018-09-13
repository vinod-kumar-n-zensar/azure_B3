<template>
    <div class="deliver common-page-img-fix page-section" id="deliver">
        <div class="container-fluid common-page-head">
           
            <div class="container">
                <div>
                    <h3>{{deliverInfo.chapter}}</h3>
                </div>
                <div>
                    <h1>{{deliverInfo.title}}</h1>
                </div>
                <div class="d-lg-none imageContainer hidden-lg hidden-md hidden-sm">
                    <img v-bind:src="deliverInfo.urlsm" alt="">
                </div>
            </div> 
        </div>
        <div class="container-fluid common-page-subhead">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <h3>{{deliverInfo.head}}</h3>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 imageContainer hidden-xs">
                        <img data-aos="fade-left" v-bind:src="deliverInfo.url" alt="">
                    </div>
                </div>
                
            </div> 
        </div>
        <div class="container-fluid common-div">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p>{{deliverInfo.textPrimary}}</p>
                            <p v-html="deliverInfo.textContent">{{deliverInfo.textContent}}</p>
                            </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p v-html="deliverInfo.textSecondary">{{deliverInfo.textSecondary}}</p>
                            <p>{{deliverInfo.textSecondarySub}}</p>
                            </div>
                    </div>
                </div>
        </div>
        <div class="common-page-head  common-border-bottom">
                    <div class="container common-abs-container">
                    <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <p>{{deliverInfo.capData.contentPrimary}}</p>
                                <p>{{deliverInfo.capData.contentSecondary}}</p>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 imageContainer" >
                                <img v-bind:src="deliverInfo.capData.url" />
                            </div>
                    </div>
                    </div>
                </div>
    </div> 
</template>

<script>
    export default{
        props:{
            deliverInfo: Object
        }
    }
</script>