<template>
  <div class="tech">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Tech from '@/components/TechComponent.vue'

export default {
  name: 'tech',
  components: {
    Tech
  }
}
</script>
