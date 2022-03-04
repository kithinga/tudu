<template>
  <nav>
    <router-link class="navbar-brand material-icons md-32 hoicn" to="/">arrow_back home</router-link>   
    <form class="ser-form">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search">
      <button class="btn material-icons md-32" type="submit">search</button>
    </form>
    <!-- <router-link to="/about">About</router-link> -->
  </nav>
  <router-view/>
</template>

<style >
/* @import "~@/assets/scss/vendors/bootstrap-vue/index"; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
