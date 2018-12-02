<template>
  <div class="home">
  
    <ArticleList class="pt-5" />
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleList from '@/components/ArticleListComponent.vue'

export default {
  name: 'articleList',
  components: {
    ArticleList
  }
}
</script>
