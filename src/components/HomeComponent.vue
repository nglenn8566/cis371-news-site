<template>
<div>
<b-container>
  <h2 class="text-center white">Top Headlines</h2>
      <div v-for="(value,key) in articles" v-bind:key="key">
    <b-row class="justify-content-md-center d-flex align-items-stretch justify-content-center pb-2">
        <div v-for="(value2,key2) in value" v-bind:key="key2">

           <b-col class=" h-100 mb-4 pb-2 justify-content-center">
           <b-card :title="value2.title"
            :img-src="value2.urlToImage"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 h-100">
            <p class="card-text">
            {{value2.description}}
            </p>
            <div class="text-center">
              <!--  click event that routes to the articles page needed here -->
            <b-button class="cardBtn " variant="info" target="_blank" :href="value2.url"> Read More</b-button>
            </div>
          </b-card>
          </b-col>
         
        </div>
      </b-row>
      </div>

       <h2 class="text-center white">New Articles</h2>
      <div v-for="(value3,key3) in userArticles" v-bind:key="'A'+key3">
    <b-row class="justify-content-md-center d-flex align-items-stretch justify-content-center pb-2">
      <div v-for="(value4,key4) in value3" v-bind:key="'A'+key4">

           <b-col class=" h-100 mb-4 pb-2 justify-content-center">
           <b-card :title="value4.title"
            :img-src="'https://firebasestorage.googleapis.com/v0/b/michigan-news-cis371.appspot.com/o/'+value4.urlToImage+'?alt=media&token=9736c27e-33c8-4dc7-8420-539163898c6b'"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 h-100">
            <p class="card-text">
            {{value4.description}}
            </p>
            <div class="text-center">
              <!--  click event that routes to the articles page needed here -->
            <b-button class="cardBtn " variant="info"  :to="'/article/'+value4.uid"> Read More</b-button>
            </div>
          </b-card>
          </b-col>
         </div>
      </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import _ from 'lodash'
import * as firebase from 'firebase';
const moment = require('moment')

var config = {
  apiKey: "AIzaSyCZQaBpxbIzlFQdTIupobI2jQYydx1ZOQ8",
  authDomain: "michigan-news-cis371.firebaseapp.com",
  databaseURL: "https://michigan-news-cis371.firebaseio.com",
  projectId: "michigan-news-cis371",
  storageBucket: "michigan-news-cis371.appspot.com",
  messagingSenderId: "32986651741"
};
firebase.initializeApp(config);
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
      articles: [],
      userArticles:[],
      error: null,
      fullArtArray:[],
      articlesGot: false,
      slide: 0,
      sliding: null
    }
  },
  async created(){
    this.recentNews()
    this.getUserArticles()
    firebase.database().ref('userArticles').on('child_added', snapshot =>{
    var flatArticles = _.flatten(this.userArticles)
        if(this.articlesGot){
          firebase.database().ref('userArticles').child(snapshot.key).on('value', snap =>{
            flatArticles.push(snap.val())
            this.userArticles = _.chunk(flatArticles, 3)
          })
        
        }
    })
    firebase.database().ref('userArticles').on('child_removed', snapshot =>{
    var flatArticles = _.flatten(this.userArticles)
    var tempArticle
      tempArticle = _.filter(flatArticles, function(arti){return arti.uid != snapshot.key})
    
    this.userArticles = _.chunk(tempArticle, 3)
    })
    
  },
  methods:{
    recentNews(){
      
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      var dateQuery = year+'-'+month+'-'+day;
      var url = 'https://newsapi.org/v2/everything?language=en&' +
          'q="Michigan"AND("detroit"OR"Grand Rapids"OR"Lansing")&' +
          'from='+dateQuery+'&' + 'pageSize=9&'+
          'sortBy=popularity&' +
          'apiKey=ee1f76f3df2e4e4796b69628a5398c46';

      var req = new Request(url);
      fetch(req)
        .then((response) => {
          //this creates the promise
          return response.json();
        }).then((jsonData)=>{
        //this gets the data from the promise and puts it into the articles data item
        // with the data that comes in and posts the articles to firebase

        var lastTopUpdate;
        var timeDif;
        var currentMoment = moment();
        //this is a template for all pages to use that limit the frequencies in which articles can be posted 
       firebase.database().ref().child("timeUpdated").limitToFirst(1).once('value',function(snapshot){
          lastTopUpdate = moment(snapshot.val().topArticles)
          timeDif = currentMoment.diff(lastTopUpdate,'hours',true)
          if(timeDif >= 6){
            for(var item of jsonData.articles){
              firebase.database().ref().child("topArticles").push().set(item)
              var updates ={};
              updates['/timeUpdated/topArticles'] = moment().utc().format()
              firebase.database().ref().update(updates)

            }
          }
        })
   
        this.articles = _.chunk(jsonData.articles, 3)
          
        })
    },
    getUserArticles(){
      firebase.database().ref().child("userArticles").limitToLast(10).once('value', (snap)=>{
        const snapval = snap.val()
        for(var g in snapval){
          var gOut = snapval[g]
          gOut.uid = g
          this.userArticles.push(gOut)
          this.articlesGot = true
        }
        this.userArticles = _.chunk(this.userArticles, 3)

      })
    },
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
