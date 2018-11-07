<template>

  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Michigan News</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <!-- <li class="nav-item active">
        <a class="nav-link" herf="/home">Home <span class="sr-only">(current)</span></a>
      </li> -->
      <li class="nav-item">
        <a class="nav-link" href="/tech">Technology</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/entertainment">Entertainment</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/sports">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/politics">Politics</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Regional News
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/news/Grand-Rapids">Grand Rapids</a>
          <a class="dropdown-item" href="/news/Detroit">Detroit</a>
          <a class="dropdown-item" href="/news/Lansing">Lansing</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/tech">Tech</router-link> |
      <router-link to="/entertainment">Entertainment</router-link> |
      <router-link to="/weather">Weather</router-link> |

    </div> -->
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

// .dropdown{
//   position: relative;
//   display: inline-block;
// }
// .dropdown-content{
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//   padding: 12px 16px;
//   z-index: -1; 
// }
// .dropdown:hover .dropdown-content{
//   display: block;
// }
</style>
