<template>
  <div class="btn-group">
    <button
      class="btn"
      id="dropdownMenuClickableInside"
      data-bs-toggle="dropdown"
    >
      <div class="material-icons ver">more_vert</div>
    </button>

    <div class="dropdown-menu shadow-sm">
      <ul>
        <router-link :to="{ path: `/edittask/${task.id}` }">
          <li
            type="button"
            class="btn-edittask edit material-icons"
            title="Edit"
            @click="editTask"
          >
            edit
          </li>
        </router-link>

        <li
          class="material-icons close"
          title="Close"
          @click="deleteTask(task.id)"
        >
          close
        </li>
      </ul>
    </div>
  </div>
</template>



<template>
  <Navigator />
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <div class="container-fluid">
          <div class="row no-gutters">
            <div class="col-md-8 tacent">
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
                    <!-- Chart goes here nigga -->
                    <!-- Chart goes here nigga -->
                    <h6>Chart goes g-here</h6>
                    <div class="container">
                      <line-chart
                        v-if="loaded"
                        :chartdata="chartdata"
                        :options="options"
                      />
                   
                    </div>
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
import Navigator from "@/components/Navigator.vue";
import axios from "axios";
import { Bar } from "vue-chartjs";
import { Line } from 'vue-chartjs'
import LineChart from "./Chart.vue";

export default {
  name: "LineChartContainer",
  components: {
    Navigator,
    LineChart,
  },
  data() {
    return {
      loaded: false,
      chartdata: null,
    };
  },
  async mounted () {
    this.loaded = false
    try {
      const { userlist } = await fetch('/api/userlist')
      this.chartdata = userlist
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
};

// Chart js here
</script>



<style scoped>
.tacent {
  background-color: rgb(245, 245, 245);
  border-radius: 5px;
  border: solid 1px rgb(250, 243, 243);
  padding-bottom: 1.6rem;
  width: 100%;
}
</style>