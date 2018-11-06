<template>
  <div class="tech">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="This is a test of the tech page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'tech',
  components: {
    HelloWorld
  }
}
</script>
