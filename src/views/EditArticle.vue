<template>
  <div class="home">
  
    <EditArticleComponent class="pt-5" />
  </div>
</template>

<script>
// @ is an alias to /src
import EditArticleComponent from '@/components/EditArticleComponent.vue'

export default {
  name: 'editArticle',
  components: {
    EditArticleComponent
  }
}
</script>
