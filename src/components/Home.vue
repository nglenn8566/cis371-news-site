<template>
  <div>


 
    <b-container>
    <b-row class="justify-content-md-center">

      <div v-for="(value,key) in articles" v-bind:key="key">
        <div class="d-flex align-items-stretch mb-4">
        <div v-for="(value2,key2) in value" v-bind:key="key2">

           <b-col class="d-flex align-items-stretch h-100">
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
            <b-button class="cardBtn " variant="info">Read More</b-button>
            </div>
          </b-card>
          </b-col>
         
        </div>
        </div>
      </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import _ from 'lodash'
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
      error: null
    }
  },
  async created(){
    this.recentNews()
  },
  methods:{
    recentNews(){
      var url = 'https://newsapi.org/v2/everything?' +
          'q=Michigan&' +
          'from=2018-11-07&' + 'pageSize=9&'+
          'sortBy=popularity&' +
          'apiKey=ee1f76f3df2e4e4796b69628a5398c46';

      var req = new Request(url);
      fetch(req)
        .then((response) => {
          //this creates the promise
          return response.json();
        }).then((jsonData)=>{
        //this gets the data from the promise and puts it into the articles data item
        // with the data that comes in post it to firebase
        this.articles = _.chunk(jsonData.articles, 3)
          
        })
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

.cardBtn{
}
</style>
