<template>
  <div> 
    <b-container>

    <b-row class="justify-content-md-center d-flex align-items-stretch justify-content-center pb-2">
           <b-col class="  w-100 text-white">
            <!-- <img :src="article.urlToImage">            -->

            <template>{{articles.content}}</template>
          </b-col>
         
      </b-row>
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
  name: 'articleView',
  data(){
    return {
      loading: false,
      articles: {},
      error: null,
      articleUrl: this.$route.query.url
    }
  },
  async created(){
    this.getArticle()
  },
  methods:{
    getArticle(){
      var rootRef = firebase.database().ref("topArticles")
      rootRef.orderByChild('url').equalTo(this.articleUrl).on("value", (snap) =>{
        var snapval= snap.val();
        for(var value in snapval){
          this.articles = snapval[value]
        }
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
