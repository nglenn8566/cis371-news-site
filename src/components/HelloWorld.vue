<template>
  <div >


    <!-- <p id="articles">{{articles[0]}}</p> -->
    <!-- if v-bind:key="the key of the " -->
    <b-container>
    <b-row class="justify-content-md-center">

      <div v-for="(value,key) in articles" v-bind:key="key">
        <div class="d-flex align-items-stretch ">
        <div v-for="(value2,key2) in value" v-bind:key="key2">
         <!-- <p>{{key}}</p> -->

           <b-col class="d-flex align-items-stretch mx-autp">
           <b-card :title="value2.title"
            :img-src="value2.urlToImage"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
            {{value2.description}}
            </p>
            <b-button variant="info">Read More</b-button>
          </b-card>
          </b-col>
          <!-- <b-col>
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{{value.title}}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </b-col> -->
        </div>
        </div>
      </div>
      </b-row>
    </b-container>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
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
    console.log(this.articles)
  },
  methods:{
    recentNews(){
      var url = 'https://newsapi.org/v2/everything?' +
          'q=Michigan&' +
          'from=2018-11-07&' +
          'sortBy=popularity&' +
          'apiKey=ee1f76f3df2e4e4796b69628a5398c46';

      var req = new Request(url);
      // var out;
      fetch(req)
        .then((response) => {
          //this creates the promise
          return response.json();
        }).then((jsonData)=>{
        //this gets the data from the promise and puts it into the articles data item
        this.articles = _.chunk(jsonData.articles, 3)
        console.log(this.articles)
          
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
</style>
