<template>
  <div class="home-page">
    <div class="device-responsive">
      <div class="container-fluid">
        <div class="row intros no-gutters justify-content-center">
          <div class="col-lg-2">
            <div class="titles">
              <p class="titl">TODOS FOR <span class="sel"> Better me</span></p>
              <p class="ru">
                Consistency for - <span class="selm">Self Mastery . .</span>
              </p>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="reminder">
              <!-- <p class="rder">Overdue Tasks <span class="ress"> 47</span></p> -->
            </div>
          </div>

          <div class="col-lg-2 cls">
            <div class="period">
              <p class="time">00 10</p>
              <p class="day">Sunday</p>
              <p class="date">13 03 2022</p>
            </div>
          </div>
        </div>
      </div>

      <!-- tudu cards for tas*                    -->
      <div class="container-fluid">
        <div class="row no-gutters card-row justify-content-center">
          <div class="col-lg-2">
            <router-link to="/tasks">
              <div class="card tasks shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Tasks</h5>
                  <p class="material-icons md-32 icn">task</p>
                  <img
                    src="../assets/images/Task.png"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-lg-2">
            <router-link to="/notes">
              <div class="card notes shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Notes</h5>
                  <p class="material-icons md-32 icn">notes</p>
                  <img
                    src="https://i0.wp.com/blog.lulu.com/wp-content/uploads/2020/02/021120_NoteTaking-Blog.png?fit=1200%2C675&ssl=1"
                    class="img-fluid"
                    alt="notes picture"
                  />
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-lg-2">
            <router-link to="/future">
              <div class="card future shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Futures</h5>
                  <p class="material-icons icn">next_plan</p>
                  <img
                    src="../assets/images/Future.png"
                    class="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-lg-2">
            <router-link to="/pending">
              <div class="card pending shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Pending</h5>
                  <p class="material-icons icn">pending_actions</p>
                  <img
                    src="../assets/images/Pending.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </router-link>
          </div>

          <div class="col-lg-2">
            <router-link to="/perfomance">
              <div class="card perfomance shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">Perfomance</h5>
                  <p class="material-icons icn">timeline</p>
                  <img
                    src="../assets/images/Perfomance01.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile responsivw view home page -->
    <div class="all-mobile">
      <div class="mobile-home">
        <div class="mb-title mbls">
          <h5>Else</h5>
          <h6>got no</h6>
          <span class="material-icons"> data_thresholding </span>
        </div>

        <div class="mb-period clock">
           <div class="dbls1">
              <div class="year">2022</div>
               <h3 class="minutes">54</h3>
           </div>
           <div class="dbls2">
              <div class="month">April</div>
              <h5 class="seconds">12</h5>
           </div>
           <div class="dbls3">
              <div class="tarehe">12th</div>
                  <!-- <h4 class="hour">4</h4> -->
           </div>
           <div class="dbls4">
              <div class="siku">Sunday</div>
              <h4 class="hour">4</h4>
           </div>
        </div>
      </div>

      <!-- Mobile responsive home cards -->
      <div class="home-cards">
        <router-link to="/tasks">
          <div class="mobile-task homca">
            <h4>Task</h4>
            <p class="material-icons sd">tasks</p>
          </div>
        </router-link>
        <router-link to="/notes">
          <div class="mobile-note homca">
            <h4>Notes</h4>
            <p class="material-icons sd">notes</p>
          </div>
        </router-link>
        <router-link to="/future">
          <div class="mobile-future homca">
            <h4>Futures</h4>
            <p class="material-icons  sd">next_plan</p>
          </div>
        </router-link>
        <router-link to="/pending">
          <div class="mobile-pending homca">
            <h4>Pending</h4>
            <p class="material-icons sd"></p>
          </div>
        </router-link>
        <router-link to="/perfomance">
          <div class="mobile-perfomance homca">
            <h4>Perfomance</h4>
            <p class="material-icons sd">timeline</p>
          </div>
        </router-link>
      </div>

      <!-- mobile responsive home footer -->
      <div class="home-footer">
        <div class="icone">
          <p class="material-icons">person</p>
        </div>
      <router-link to="/">
        <div class="ictwo">
          <p class="material-icons">notifications</p>
        </div></router-link>
        <div class="icthree shadow">
          <p class="material-icons">priority_high</p>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld
  },
};
</script>


<style scoped>
@media (max-width: 575.98px) {
  .device-responsive {
    display: none;
  }

  .home-page {
    height: 80vh;
  }

  .all-mobile {
    background-color: rgb(0, 0, 0);
    border-radius: 9px;
    padding-top:1.8rem;
    /* background-color: red; */
  }
  .mobile-home {
    display: grid;
    grid-gap: 1rem;
    margin: 1rem;
    grid-template-columns: 1fr 1fr;
    border-radius:15px;
  }

  .mbls {
    background-color: rgb(47, 46, 73);
    min-height:5rem;
    border: solid 1px rgb(44, 43, 68);
    padding: 1.2rem;
    color: rgb(219, 208, 208);
    border-radius: 16px;
  }

  .mbls h5 {
    color: rgb(200, 210, 212);
    font-weight: 900;
    font-size: 20px;
  }

  .mbls h6 {
    color: rgb(9, 180, 223);
    font-weight: 600;
    letter-spacing: -0.5px;
    font-size: 14px;
  }

  .home-cards {
    margin-top:1.2rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 13px;
  }

  .homca {
    padding: 2rem;
    background-color: rgb(45, 42, 65);
    color: rgb(11, 190, 221);
    border-radius: 15px;
    min-height: 7rem;
    border: none;
  }

  .homca h4 {
    font-size: 15px;
    font-weight: 700;
  }

  .home-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 3rem;
    padding-bottom: 1rem;
    color: rgb(191, 209, 212);
  }

  .sd{
    /* border: solid 1px rgb(46, 40, 54); */
    padding: 4px;
    border-radius:9px;
    color: rgb(250, 246, 255);
    /* box-shadow: 0px 3px 35px rgb(19, 16, 26); */
  }
  
  .clock{
    background-color: rgb(37, 31, 58);
    opacity: 0.7;
    border-radius:20px;
    display: grid;
     grid-template-columns: 1fr 1fr;
     border: solid 2px rgb(45, 57, 59);
     padding:1rem;     
    /* padding-top:2rem; */
  }

  .year{
    color: rgb(17, 173, 201);
    padding: 0.5rem;
    /* width: 3rem; */
     transform: rotate(2deg);
     margin-right: 0.5rem;
    border-radius:6px
  }

  .month{
    /* height: 2.5rem; */
    padding: 0.5rem;
    margin-left: 1rem;
     transform: rotate(4deg);
    border-radius:3px
  }
  

  .dbls1{
   border-right: 7px solid rgb(194, 37, 37);
  border-radius:5px;
   transform: rotate(-2deg);
   
  }
  .dbls2{
    border-radius:5px;
   border-bottom: 2px solid rgb(192, 66, 50);
    transform: rotate(-4deg);
    padding:13px;
  }

  .dbls3{
   border-right: 15px solid rgb(155, 24, 24);
   transform: rotate(4deg); 
    border-radius:5px;
  }

  .dbls4{
   transform: rotate(1deg);
  }

  .hour{
    font-weight: 800;
    font-size:2rem;
  }

  .dbls2 h5{
    font-size:3rem;
    font-weight:300;
    margin-left:1.67rem;
    /* background-color:red; */
  }

  .dbls1,.dbls2,.dbls3,.dbls4{
  /* background-color:red */
  }

  .dbls1 h3{
    font-size:2rem;
    font-weight:600;
    margin-right:1.67rem;
  }

  .siku{
    margin-top:1rem;
    margin-left:1rem;
  }
  .tarehe{
    transform: rotate(-4deg); 
  }
  .minutes{
         transform: rotate(4deg);
  }
  .seconds{
         transform: rotate(4deg);
  }

}
</style>