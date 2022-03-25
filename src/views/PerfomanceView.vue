<template>
  <Navigator />
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-lg-1"></div>
      <div class="col-lg-10">
        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col-md-12 tacent">
              <div class="container-fluid">
                <div class="row no-gutters checker">
                  <div class="col-lg-6">
                    <div class="tid-task">
                      <div class="per-avar shadow-sm">
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
                      <h5 class="shadow-sm ti">
                        Task statistics to mark progress
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Charts content goes here -->
              <div class="container-fluid chart-con">
                <div class="row no-gutters justify-content-center">
                  <div class="col pers">
                    <div class="row no-gutters">
                      <div class="col-lg-4">
                        <div class="linechart chr">
                          <!-- Chart goes here nigga -->
                         
                          <Linechart />
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div class="barchart chr">
                          <!-- Chart goes here nigga -->
                      
                          <Barchart />
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <div class="piechart chr">
                          <!-- Chart goes here nigga -->
                          
                          <Piechart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-1"></div>
    </div>
  </div>
</template>


<script>
import Linechart from "../components/Linechart.vue";
import Navigator from "../components/Navigator.vue";
import Barchart from "../components/Barchart.vue";
import Piechart from "../components/Piechart.vue";

export default {
  name: "perfomanceView.vue",
  components: {
    Linechart,
    Barchart,
    Piechart,
    Navigator,
  },
};
</script>

<style scoped>
.tacent {
  background-color: rgb(247, 247, 247);
  /* background-color:rgb(44, 36, 83); */
  /* opacity: 0.9; */
  border-radius: 5px;
  border: solid 1px rgb(250, 243, 243);
  padding-bottom: 1.6rem;
}


</style>
