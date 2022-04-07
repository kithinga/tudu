<template>
 

 
  <nav>
    <div class="container-fluid">
      <div class="row no-gutters cnav">
        <div class="col-sm-4">
          <div class="back">
            <router-link class="tudu-logo" to="/">tudu !</router-link>
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


  <!-- Mobile responsive content -->
  <div class="mobile-header">
          <div class="mb-logo" >
            <router-link to="/"><h6>tudu !</h6></router-link>
          </div>
          <div class="mb-login" >
            <button class="logbtn"> <h6>Login</h6></button>
          </div>
  </div>


 

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
  color: #07a2d1;
}
nav a.router-link-exact-active {
  color: #0f99cf;
}


.mobile-header{
  background-color: rgb(9, 8, 15);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding:0.3rem;
}
.mb-logo{
  color: rgb(151, 169, 226);;
  height:5rem;
  padding:1rem;
  padding-top:2rem;
}
.mb-logo h6{
    font-weight:900;
  font-size:17px;
}
.mb-login{
  color: rgb(15, 145, 206);;
  height:5rem;
  padding:1rem;
  padding-top:1.5rem;
}
.mb-login h6{
  font-weight:600;
  font-size:15px;
}
.logbtn{
  padding:0.5rem;
  color:rgb(223, 221, 221);
  width:7rem;
  border-radius:1.3rem;
  border: none;
  background-color:transparent;
  border: solid 2px rgb(41, 132, 160);
  padding-top: 0.7rem;
}
</style>




