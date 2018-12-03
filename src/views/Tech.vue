<template>
  <div class="tech">
    <img alt="Vue logo" src="../assets/logo.png">
    <Tech />
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
