<template>
  <div class="home">
  
    <BusinessView/>
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
