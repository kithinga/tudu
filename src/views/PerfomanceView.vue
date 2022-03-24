<template>
  <Navigator />
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col-md-12 tacent">
              <div class="container-fluid">
                <div class="row no-gutters checker">
                  <div class="col-lg-6">
                    <div class="tid-task">
                      <div class="per-avar">
                        <h4 class="per-tihead">
                          Perfomance<span class="material-icons per-tic"
                            >timeline</span
                          >
                        </h4>
                        <h5 class="per-stat">Statistics</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="per-des">
                      <h5 class="shadow-sm">
                        Task statistics to mark progress
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Chart content goes here -->
              <div class="container-fluid chart-con">
                <div class="row no-gutters justify-content-center">
                  <div class="col pers">
                    <!-- Chart goes here nigga -->
                    <h6>Perfomance per task completion</h6>
                    <Perchart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-2"></div>
    </div>
  </div>
</template>


<script>
import Perchart from '../components/Perchart.vue'
import Navigator from '../components/Navigator.vue'

export default {
  name: 'perfomanceView.vue',
  components: {
    Perchart,
    Navigator,
  }
}
</script>

<style scoped>
.tacent {
  background-color: rgb(237, 237, 238);
  /* background-color:rgb(44, 36, 83); */
  /* opacity: 0.9; */
  border-radius: 5px;
  border: solid 1px rgb(250, 243, 243);
  padding-bottom: 1.6rem;
}
</style>
