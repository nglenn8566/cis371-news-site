<template>
  <div> 
    <b-container>
      <div v-for="(value,key) in articles" v-bind:key="key">
    <b-row class=" pb-2">
           <b-col class=" w-100 text-black bg-white border-primary listCol">
                <b-row >
                    <b-col class="text-black">
                        <template>
                        <h3>{{value.title}}</h3>
                        <p class="text-uppercase" >By: {{value.author}}</p>
             
                        </template>
                        <p>{{value.publishedAt}}</p>
                    </b-col>

            <b-col class=" text-black p-5 align-content-end" cols="auto">
              <b-button size="sm" class="mr-sm-2" variant="warning" :to="'/edit/article/'+value.uid">Edit Article</b-button>
              <b-button size="sm" class="mr-sm-2" variant="danger" v-on:click="deleteArticle(value.uid)">Delete Article</b-button>

            </b-col>
                </b-row>
          </b-col>
         
      </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
// import _ from 'lodash'
import * as firebase from 'firebase';


// ****************************************************************
// DO NOT DELETE THIS SECTION
//API key for newai.org is contained below. DO NOT DELETE
// ee1f76f3df2e4e4796b69628a5398c46
//*****************************************************************
    

export default {
  name: 'articleList',
  data(){
    return {
      loading: false,
      articles: [],
      error: null,
    }
  },
  async created(){
    this.getArticles()
  },
  methods:{
    getArticles(){
        this.userInfo = firebase.auth().currentUser;
        var atLoc = this.userInfo.email.indexOf('@')
        var authSub = this.userInfo.email.substring(0,atLoc)
        this.articles =[]
     firebase.database().ref().child('userArticles').orderByChild('author').equalTo(authSub).on("value", (snap)=>{
        const snapval = snap.val()
        for(var g in snapval){
            var artHolder = snapval[g]
            artHolder.uid = g
            this.articles.push(artHolder)
        }
      })

    },
    deleteArticle(articleUid){
        firebase.database().ref('userArticles').child(articleUid).remove().then((response) =>{
            if(!response){
                this.articles=[]
                 this.getArticles()
            }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.listCol{
    border-radius: 10px;
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

.card{
  border: none !important;
}

</style>
