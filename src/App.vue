<template>

  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand to="/" class="mx-auto">Michigan News</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item  to="/tech">Technology</b-nav-item>
      <b-nav-item to="/entertainment">Entertainment</b-nav-item>
      <b-nav-item to="/sports">Sports</b-nav-item>
      <b-nav-item to="/politics">Politics</b-nav-item>
       <!-- <b-nav-item-dropdown text="Regional News" right>
        <b-dropdown-item to="/news/GrandRapids">Grand Rapids</b-dropdown-item>
        <b-dropdown-item to="/news/Lansing">Lansing</b-dropdown-item>
        <b-dropdown-item to="/news/Holland">Holland</b-dropdown-item>
        <b-dropdown-item to="/news/Flint">Flint</b-dropdown-item>
        <b-dropdown-item to="/news/Detroit">Detroit</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-form v-if="userStatus()">
      <b-button size="sm" class="mr-sm-2" variant="success" to="/create">Create Article</b-button>
      </b-nav-form>
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="dark">Search</b-button>
      </b-nav-form>



      <b-nav-item-dropdown size="lg" right >
        <template slot="button-content" size="lg" id="test" v-if="userStatus()">
          <em>{{userInfo.username}}</em>
        </template>
        <template slot="button-content" size="lg" id="test" v-if="!userStatus()">
            <em>Login</em>
        </template>
        <div v-if="userStatus()">
         <b-dropdown-item to="/edit/articles">Edit Articles</b-dropdown-item>
        <b-dropdown-item to="/profile">Profile</b-dropdown-item>
        <b-dropdown-item v-on:click="logOut()">Signout</b-dropdown-item>
          </div>

        <div v-if="userStatus() == false">
          <b-form class="w-atuo">
            <b-form-input class="dropForm m-2" v-model="email" type="text" placeholder="Email"></b-form-input>
           <b-form-input class="dropForm m-2" v-model="password" type="password" placeholder="Password"></b-form-input>
           <b-alert variant="danger" v-show="invalidCreds" >Invalid email or password.</b-alert>

            <b-button type="button" variant="success" class="form-control" v-on:click="loginUser()">Login</b-button>
          </b-form>
        </div>
      
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
    <router-view/>
  </div>
</template>
<script>
import * as firebase from 'firebase';

// ****************************************************************
// DO NOT DELETE THIS SECTION
//API key for newai.org is contained below. DO NOT DELETE
// ee1f76f3df2e4e4796b69628a5398c46
//*****************************************************************



export default {
  name: 'recent-news',
  data(){
    return {
      loading: false,
      error: null,
      email: '',
      password: '',
      loginValid: false,
      userInfo: {},
      invalidCreds: false
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user =>{
     if(user!= null){
       this.userInfo.email = user.email
       var atLoc = user.email.indexOf('@')
       this.userInfo.username = user.email.substring(0,atLoc)
       this.loginValid = true;
       this.invalidCreds = false;
     }
     else{
       this.invalidCreds = false;
       this.loginValid = false;
       this.user = {};
     }
    })
  },
  methods:{
    loginUser(){ 
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch( error => {
          if(error.code == 'auth/wrong-password' || error.code=='auth/user-not-found' || error.code =='auth/invalid-email' ){
            this.invalidCreds = true;
            this.loginValid = false;
          }

          
    });
  },
  userStatus(){
    return this.loginValid
  },
  logOut(){
    firebase.auth().signOut();
  }
  }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  // color: #2c3e50;
  background-color: rgb(27, 27, 27);
}
html{
  background-color: rgb(27, 27, 27);

}

.dropForm{
  width: 250px !important;
}

.card{
  border: none !important;
}

</style>
