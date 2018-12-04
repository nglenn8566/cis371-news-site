<template>
  <div class="home">
  
    <BusinessView class="pt-5" />
  </div>
</template>

<script>
// @ is an alias to /src
import BusinessView from '@/components/BusinessComponent.vue'

export default {
  name: 'businessView',
  components: {
    BusinessView
  }
}
</script>
