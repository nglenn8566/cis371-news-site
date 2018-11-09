<template>

  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand to="/">Michigan News</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item  to="/tech">Technology</b-nav-item>
      <b-nav-item to="/entertainment">Entertainment</b-nav-item>
      <b-nav-item to="/sports">Sports</b-nav-item>
      <b-nav-item to="/politics">Politics</b-nav-item>
       <b-nav-item-dropdown text="Regional News" right>
        <b-dropdown-item to="/news/GrandRapids">Grand Rapids</b-dropdown-item>
        <b-dropdown-item to="/news/Lansing">Lansing</b-dropdown-item>
        <b-dropdown-item to="/news/Holland">Holland</b-dropdown-item>
        <b-dropdown-item to="/news/Flint">Flint</b-dropdown-item>
        <b-dropdown-item to="/news/Detroit">Detroit</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="dark">Search</b-button>
      </b-nav-form>



      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item ><router-link to="/profile">Profile</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/logout">Signout</router-link></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
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
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

</style>
