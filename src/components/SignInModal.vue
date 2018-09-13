<template>
<div class="modal" id="SignInModal" tabindex="-1" role="dialog" refs="SignInModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title text-center">{{modalData.headerInfo}}</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form @submit.prevent="onSubmit">
      <div class="modal-body">
          <div class="form-group">
             <div class="field" :class="{error: errors.has('FirstName')}">
                <input class="form-control" v-validate="'required|alpha'" name="FirstName" type="text" placeholder="First Name" v-model="FirstName">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('LastName')}">
                <input class="form-control" v-validate="'required|alpha'" name="LastName" type="text" placeholder="Last Name" v-model="LastName">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('Email')}">
                <input class="form-control" type="Email" name="Email" placeholder="Work Email" v-validate="'required|email'" v-model="Email">
              </div>
          </div>
           <div class="form-group">
             <div class="field" :class="{error: errors.has('phone')}">
                <input class="form-control" v-validate="'required|max:40'" name="phone" type="number" placeholder="Work Phone" v-model="phone">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('Country')}">
               <select class="custom-select form-control" v-validate="'required'" name="Country" v-model="Country">
                  <option selected="selected" value="">Choose Country</option>
                  <option v-for="CountryItem in modalData.coutryList" v-bind:value="CountryItem.name">{{CountryItem.name}}</option>
               </select>
              </div>
          </div>
           <div class="form-group">
             <div class="field" :class="{error: errors.has('Company')}">
                <input class="form-control" v-validate="'required|alpha'" name="Company" type="text" placeholder="Company" v-model="Company">
              </div>
          </div>
          <div class="form-group">
             <div class="field" :class="{error: errors.has('jobRole')}">
               <select class="custom-select form-control" v-validate="'required'" name="jobRole" v-model="jobRole">
                  <option selected="selected" value="">Choose Job Role</option>
                  <option v-for="jobRole in modalData.jobRole" v-bind:value="jobRole.name">{{jobRole.name}}</option>
               </select>
              </div>
          </div>
          <div class="">
          <p>{{modalData.footerInfo}} <a v-bind:href="modalData.link.url" target="_blank"><span>{{modalData.link.text}}</span></a></p>
        </div> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" :disabled="errors.any()" ref="btnSubmit" class="btn btn-primary">Get Started</button>
      </div>
      </form>
      <form id="mktoForm_14282"></form>
    </div>
  </div>
</div>
</template>
<script>MktoForms2.loadForm("//app-sj18.marketo.com", "157-GQE-382", 10595);</script>
import func from "./vue-temp/vue-editor-bridge";

<script>
  import Vue from 'vue';
  import jq from 'jquery';
    export default{
        props:{
            modalData: Object,
        },
        data() {
          return {
            FirstName:'',
            LastName:'',
            Email: '',
            phone:'',
            Company:'',
            Country:'',
            jobRole:'',
            signed:''
          }
        },
        methods:{
          onSubmit() {
            this.$validator.validateAll().then(
              result =>{
                 if (!this.errors.any()) {
                    jq('.mktoForm  #FirstName').val(this.FirstName);
                    jq('.mktoForm  #LastName').val(this.LastName);
                    jq('.mktoForm  #Email').val(this.Email);
                    jq('.mktoForm  #Company').val(this.Company);
                    jq('.mktoForm  #Country option[value="' + this.Country + '"]').attr("selected", "selected");
                    jq('.mktoForm  #Title option[value="' + this.jobRole + '"]').attr("selected", "selected");
                    jq('.mktoButton').trigger('click');
                  } else{
                    document.cookie = "signedIn = false";
                    this.$emit('update:signed','false');
                  }
              }
            )
          },
          callMktoForms(){
            let that = this;
            MktoForms2.loadForm("//app-sj18.marketo.com", "157-GQE-382", 14282,
                    function(form){
                      form.onSuccess(function(){
                        document.cookie = "signedIn = true";
                        jq('#SignInModal').modal('hide');
                        that.$emit('update:signed','true'); 

                        return false;
                      });
                    })
          },
        },
        beforeMount(){
          this.callMktoForms();
        }
    }
</script>
