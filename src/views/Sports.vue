<template>
  <div class="home">
  
    <SportsView class="pt-5" />
  </div>
</template>

<script>
// @ is an alias to /src
import SportsView from '@/components/SportsComponent.vue'

export default {
  name: 'sportsView',
  components: {
    SportsView
  }
}
</script>
