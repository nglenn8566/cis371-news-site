<template>
  <div class="tech">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/HomeComponent.vue'

export default {
  name: 'tech',
  components: {
    Home
  }
}
</script>
