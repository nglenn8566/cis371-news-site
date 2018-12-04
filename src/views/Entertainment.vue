<template>
  <div class="home">
  
    <EntertainmentView class="pt-5" />
  </div>
</template>

<script>
// @ is an alias to /src
import EntertainmentView from '@/components/EntertainmentComponent.vue'

export default {
  name: 'entertainmentView',
  components: {
    EntertainmentView
  }
}
</script>