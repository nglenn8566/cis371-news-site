<template>
  <div> 
    <b-container>

    <b-row class="  mb-2">
        <b-col class="text-white" >
            <h2 >Update Article</h2>
           <b-form class="m-5 pb-3">
              <b-alert :show="error"
                  dismissible
                  variant="danger"
                 class="sticky-top">
                  <p>Please fill out all required fields.</p>

                </b-alert>
                <b-form-group id="titleInputGroup"
                    label="Article Title:"
                    label-for="titleInput"
                    description="Enter a title for the article." >
                <b-form-input id="titleInput"
                      type="text"
                    :state="Boolean(article.title)"
                      v-model="article.title"
                      required
                      placeholder="Enter title">
                </b-form-input>
                </b-form-group> 
                <b-form-group id="descInputGroup"
                    label="Description:"
                    label-for="descInput"
                    description="Enter a description for the article." >
                        <b-form-textarea id="descInput"
                        :state="Boolean(article.description)"
                        v-model="article.description"
                        placeholder="Enter a description for the article."
                        :rows="3"
                        :max-rows="6">
                        </b-form-textarea>
                </b-form-group> 
                <b-form-group id="contentInputGroup"
                    label="Content:"
                    label-for="contentInput"
                    description="Enter the body of the article." >
                <b-form-textarea id="contentInput"
                        :state="Boolean(article.content)"
                      v-model="article.content"
                      required
                      :rows="7"
                      placeholder="Enter the body of the article">
                </b-form-textarea>
                </b-form-group >  
                 
            </b-form>
            <b-button class="w-100 fixed-bottom" size="lg" variant="success" v-on:click="submitArticle()">Update Article</b-button>
          </b-col>
         
      </b-row>
    </b-container>
  </div>
</template>
<script>
import * as firebase from 'firebase';
import router from '../router'
const moment = require('moment')



export default {
  name: 'editArticle',
  data(){
    return {
      loading: false,
      article: {},
      error: null,
      imgUpError: null
    }
  },
  async created(){
    this.getArticles()
  },
  methods:{
   async submitArticle(){
      if(this.article.title == '' || this.article.description == '' || this.article.content =='' ){
        this.error = true;

      }
      else{
        var fireEmail = firebase.auth().currentUser.email
        var atLoc = fireEmail.indexOf('@')
        this.article.author = fireEmail.substring(0, atLoc)
        this.article.publishedAt =  moment().utc().format()
       
         this.uploadArticle(this.article)
 
      }

    },
    async uploadArticle(articleOut){
        var updates ={}
        updates['/userArticles/'+this.$route.params.uid] = articleOut
        console.log(updates)
         firebase.database().ref().update(updates).then(function(snapshot){
    
         if(snapshot){
           alert('There was a problem updating the article. Please Try Again')
         }
         else{
          router.go('/')
          alert('Success! Returning to the homepage.')
         }
        })
    },
     getArticles(){
        this.userInfo = firebase.auth().currentUser;

        this.articles =[]
        firebase.database().ref().child('userArticles').orderByKey().equalTo(this.$route.params.uid).on("value", (snap)=>{
        const snapval = snap.val()
        for(var g in snapval){
           this.article = snapval[g]
        }
      })

  }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h2{
        text-align: center;
    }

</style>
