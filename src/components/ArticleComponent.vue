<template>
  <div> 
    <b-container>

    <b-row class="justify-content-md-center d-flex align-items-stretch justify-content-center pb-2">
           <b-col class="  w-100 text-white">
             <h1 class="text-center text-uppercase">{{article.title}}</h1>
            <b-img class="mb-3"  center fluid :src="'https://firebasestorage.googleapis.com/v0/b/michigan-news-cis371.appspot.com/o/'+article.urlToImage+'?alt=media&token=9736c27e-33c8-4dc7-8420-539163898c6b'"/>           
            <b-jumbotron bg-variant="dark" text-variant="white" border-variant="white">

          <template slot="lead">
             <p class="text-uppercase" >By: {{article.author}}</p>
             
          </template>
          <p>{{article.publishedAt}}</p>
          <hr class="my-4">
          <p v-html="article.content">
            </p>
          </b-jumbotron>
          </b-col>
         
      </b-row>
    </b-container>
  </div>
</template>
<script>
// import _ from 'lodash'
import * as firebase from 'firebase';
const moment = require('moment')


// ****************************************************************
// DO NOT DELETE THIS SECTION
//API key for newai.org is contained below. DO NOT DELETE
// ee1f76f3df2e4e4796b69628a5398c46
//*****************************************************************
    

export default {
  name: 'articleView',
  data(){
    return {
      loading: false,
      article: {},
      error: null,
      articleUrl: this.$route.query.url
    }
  },
  async created(){
    this.getArticle()
  },
  methods:{
    getArticle(){
     firebase.database().ref("userArticles").child(this.$route.params.uid).on("value", (snap)=>{
        this.article = snap.val()
        this.article.publishedAt = moment(this.article.publishedAt).format("dddd, MMMM Do YYYY, h:mm:ss a")
      })

      //use firbase to get the article
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
