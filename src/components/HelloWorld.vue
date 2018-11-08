<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->


    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>


    <p id="articles">{{articles}}</p>
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
// ****************************************************************
// DO NOT DELETE THIS SECTION
//API key for newai.org is contained below. DO NOT DELETE
// ee1f76f3df2e4e4796b69628a5398c46
//*****************************************************************

// var out;

// new Vue({
//     el:"#articles",
//     data:{
//        articles: [0]
//     },
//       computed:{
//       recentNews(){
//       var url = 'https://newsapi.org/v2/everything?' +
//           'q=Michigan&' +
//           'from=2018-11-07&' +
//           'sortBy=popularity&' +
//           'apiKey=ee1f76f3df2e4e4796b69628a5398c46';

//       var req = new Request(url);
//       fetch(req)
//         .then(function(response) {
//           //this creates the promise
//           return response.json();
//         }).then(function(jsonData){
//         //this gets the data from the promise and puts it into the articles prop
//           return jsonData.articles
          
//         })
//     }
//       }
//  })


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
        this.articles = jsonData.articles
          
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
