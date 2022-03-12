<template>
  <div class="home-page">
    <div class="container-fluid">
      <div class="row intros no-gutters justify-content-center">
        <div class="col-lg-2">
          <div class="titles">
            <p class="titl">TODOS FOR <span class="sel"> Better me</span></p>
            <p class="ru">Consitency for <span class="selm">Self mastery</span></p>
          </div>
        </div>

        <div class="col-lg-3">
          <div class="reminder">
            <!-- <p class="rder">Overdue Tasks <span class="ress"> 47</span></p> -->
          </div>
        </div>

        <div class="col-lg-2">
          <div class="period">
            <p class="dti"><span>Fri</span> 03 Mar 2022</p>
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

        <div class="col-lg-2" >
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
                  src="../assets/images/Perfomance.png"
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
