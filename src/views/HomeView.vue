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

          <div class="col-lg-2">
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

        <div class="mb-period mbls">
          <h5>Prior to</h5>
          <h6>got no</h6>
          <span class="material-icons"> fingerprint </span>
        </div>
      </div>

      <!-- Mobile responsive home cards -->
      <div class="home-cards">
        <router-link to="/tasks">
          <div class="mobile-task homca">
            <h4>Task</h4>
            <p class="material-icons">tasks</p>
          </div>
        </router-link>
        <router-link to="/notes">
          <div class="mobile-note homca">
            <h4>Notes</h4>
            <p class="material-icons">notes</p>
          </div>
        </router-link>
        <router-link to="/future">
          <div class="mobile-future homca">
            <h4>Futures</h4>
            <p class="material-icons">next_plan</p>
          </div>
        </router-link>
        <router-link to="/pending">
          <div class="mobile-pending homca">
            <h4>Pending</h4>
            <p class="material-icons"></p>
          </div>
        </router-link>
        <router-link to="/perfomance">
          <div class="mobile-perfomance homca">
            <h4>Perfomance</h4>
            <p class="material-icons">timeline</p>
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
        <div class="icthree">
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
    padding-top:1rem;
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
    background-color: rgb(44, 43, 68);
    min-height:10rem;
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
    color: rgb(20, 184, 224);
    font-weight: 600;
    letter-spacing: -0.5px;
    font-size: 15px;
  }

  .home-cards {
    margin-top: 2rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .homca {
    padding: 1.3rem;
    background-color: rgb(34, 33, 49);
    color: rgb(11, 175, 224);
    border-radius: 15px;
    min-height: 6rem;
    border: none;
  }

  .homca h4 {
    font-size: 16px;
    font-weight: 600;
  }

  .home-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 3rem;
    padding-bottom: 1rem;
    color: rgb(191, 209, 212);
  }

}
</style>
