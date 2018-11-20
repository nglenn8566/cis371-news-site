<template>
  <div> 
    <b-container>

    <b-row class="  mb-2">
        <b-col class="text-white" >
            <h2 >Create New Article</h2>
           <b-form class="m-5">
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
                </b-form-group>    
                  <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..."></b-form-file>
                    <div class="mt-3">Selected file: {{file && file.name}}</div>    
            </b-form>
            <b-button class="w-100 fixed-bottom" size="lg" variant="success" v-on:click="submitArticle()">Submit Article</b-button>
          </b-col>
         
      </b-row>
    </b-container>
  </div>
</template>
<script>
// import _ from 'lodash'
// import * as firebase from 'firebase';


// ****************************************************************
// DO NOT DELETE THIS SECTION
//API key for newai.org is contained below. DO NOT DELETE
// ee1f76f3df2e4e4796b69628a5398c46
//*****************************************************************
    

export default {
  name: 'create',
  data(){
    return {
      loading: false,
      article: {
          title: '',
          description: '',
          author:'',
          content:'',
          urlToImage:'',
          publishedAt:''
      },
      file: null,
      error: null,
    }
  },
  async created(){
 
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h2{
        text-align: center;
    }

</style>
