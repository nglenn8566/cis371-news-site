<template>
  <div class="home">
  
    <create-component  />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateComponent from '@/components/CreateComponent.vue'

export default {
  name: 'create',
  components: {
    CreateComponent
  }
}
</script>
