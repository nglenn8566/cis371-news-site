<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/tech">Tech</router-link> |
      <router-link to="/entertainment">Entertainment</router-link> |
      <router-link to="/weather">Weather</router-link> |

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container{
  margin-left: 20px;
  margin-right: 20px;
}

.row{
// rows for the file
}

button{
  border-radius: 4px;
  border-style: solid;
  

}
  .btn-success{
    color: white;
    background-color:  #49ff01; 
  }
</style>
