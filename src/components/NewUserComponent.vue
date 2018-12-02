<template>
<div>
<b-container>
    <b-row class="  mb-2">
        <b-col class="text-white" >
            <h2 >Create a New User Account</h2>
           <b-form class="m-5 pb-3">
              <b-alert :show="error"
                  dismissible
                  variant="danger"
                 class="sticky-top">
                  <p>Please fill out all required fields.</p>

                </b-alert>
                <b-form-group id="emailInputGroup"
                    label="Email:"
                    label-for="email"
                    description="Enter an email." >
                <b-form-input id="emailInput"
                      type="text"
                    :state="Boolean(account.email)"
                      v-model="account.email"
                      required
                      placeholder="Email">
                </b-form-input>
                </b-form-group> 

                <b-form-group id="pwInputGroup"
                    label="Password:"
                    label-for="password"
                    description="Enter a password." >
                <b-form-input id="pwInput"
                      type="password"
                    :state="Boolean(account.password)"
                      v-model="account.password"
                      required
                      placeholder="Password">
                </b-form-input>
                </b-form-group> 

                <b-form-group id="titleInputGroup"
                    label="Verify Password:"
                    label-for="verpassword"
                    description="Enter the same password." >
                <b-form-input id="verPw"
                      type="password"
                    :state="Boolean(account.verPassword)"
                      v-model="account.verPassword"
                      required
                      placeholder="Verrified Password">
                </b-form-input>
                </b-form-group>                 
            </b-form>
            <b-button class="w-100 fixed-bottom" size="lg" variant="success" v-on:click="createUser()">Submit</b-button>
          </b-col>
         
      </b-row>
       
</b-container>
</div>
</template>

<script>
import * as firebase from 'firebase';
import router from '../router'

export default {
  name: 'NewUser',
  data(){
    return {
        account: {
            email: null,
            password: null,
            verPassword: null
        },
      loading: false,
      error: null
    }
  },
  methods:{
    createUser(){
        if(this.account.email == '' || this.account.password == '' || this.account.verPassword =='' || this.account.password != this.account.verPassword){
        this.error = true;
      }
      else{
        firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password).then(function(){
            router.go('/')
            alert('Success! Returning to the homepage.')

        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardBtn{
  color: white !important;
}
h2{
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card{
  border: none !important;
}

</style>
