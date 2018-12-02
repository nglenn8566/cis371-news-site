<template>
<div>
<b-container>
  <h2 class="text-center white">New User</h2>
      
       
</b-container>
</div>
</template>

<script>
//import _ from 'lodash'
import * as firebase from 'firebase';
import router from '../router'

export default {
  name: 'new-user',
  data(){
    return {
      loading: false,
      error: null,
      email: null,
      password: null,
      verPassword: null
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardBtn{
  color: white !important;
}
h2{
  color: white;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.card{
  border: none !important;
}

</style>
