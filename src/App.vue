<template>
 

 
  <nav class="navchecker">
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
            <router-link to="/">
             <img src="@/assets/images/tudulogo.png" alt="" />
            </router-link>
          </div>
          <div class="mb-login" >
            <button class="logbtn"> <h6>Login</h6></button>
          </div>
  </div>
  <div class="mobile-searcher">
          <div class="mb-serc" >
              <input type="text" class="ser-input" placeholder="search . . ." />
              <button type="submit" class="ser-btn material-icons md-32">
                search
              </button>
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



img{
 height: 2rem;
 border-radius:0.5rem;
 width: 3rem;
}
.mobile-searcher{
  text-align: center;
  padding-right:30px;
  padding-bottom: 0.6rem;
  background-color:rgb(9, 8, 14);
}

.mobile-header{
  background-color: rgb(9, 8, 15);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding:0.3rem;
  border: solid 1px rgb(0, 0, 0);
}

.mb-logo{
 
  height:5rem;
  padding:0.6rem;
  padding-top:2rem;
  text-align: left;
  padding-left: 2rem;
}

.mb-logo h6{
    font-weight:900;
  font-size:30px;
  color:rgb(58, 153, 182);
}

.mb-login{
  color: rgb(15, 145, 206);;
  height:5rem;
  padding:1rem;
  padding-top:1.5rem;
  text-align:right;
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
  background-color:rgb(41, 41, 53);
  /*  border: solid 2px rgb(41, 132, 160);  */
  padding-top: 0.7rem;
}

@media (max-width: 575.98px) {
 .navchecker{
  display: none;
}
.mobile-searcher{
  padding: 0.5rem;
  padding-right: 4rem;
}
.ser-input{
    border: none;
    /* margin: 1rem; */
    width:100%;
    height:2.8rem;
    border: solid 1px rgb(236, 236, 236);
    padding-left: 3rem;
    border-top-left-radius:1.2rem;
    border-bottom-left-radius:  1.2rem;
    border-right: none;
    font-size:14px;
    font-weight:400;
}
}

</style>




