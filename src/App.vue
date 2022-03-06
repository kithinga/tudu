<template>
  <nav>
    <div class="container-fluid">
      <div class="row no-gutters cnav">
        <div class="col-sm-4">
          <div class="back">
            <router-link class="tudu-logo" to="/">Tudu !</router-link>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="ser-di">
            <form action="">
              <input type="text" class="ser-input" placeholder="search . . ." />
              <button type="submit" class="ser-btn material-icons md-32">
                search 
              </button>
            </form>
          </div>
        </div>
        <div class="col-sm-2">
          <div>
            <button class="lgnbtn">Login</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style >
/* @import "~@/assets/scss/vendors/bootstrap-vue/index"; */
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #0ebea7;
}



</style>
