<template>
  <div class="home-page">
    <div class="container-fluid">
      <div class="row intros no-gutters justify-content-center">
        <div class="col-lg-2">
          <div class="titles">
            <p class="titl">The productive me</p>
            <p>Fealess courage <span>Fight harder</span></p>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="period">
            <p class="timtitl">Today is Thursday</p>
            <p class="dti">03 Mar 2022</p>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="reminder">
            <p class="rder">Overdue <span class="ress">47 Tasks</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row no-gutters card-row justify-content-center">
        <div class="col-lg-2">
          <router-link to="about">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-lg-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
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
